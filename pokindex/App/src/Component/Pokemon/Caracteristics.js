/**
 * Created by merlin on 06/02/17.
 */
import React, { PureComponent } from 'react';
import {Row} from 'react-foundation';

import Caracteristic from './Caracteristic';
import server  from '../../API/Server';

class Caracteristics extends PureComponent {
  
  constructor() {
    super();
    this.state={
      stats: null,
    };
  }
  
  componentWillMount() {
    server.getStats().then(stats => {
      this.setState({stats:stats});
    });
  }
  _correctNaming = (name) => {
    if(name === "hp")
      return "HP";
    
    const better = name[0].toUpperCase() + name.substring(1);
    let best  = better.replace("-"," ");
    if(best.indexOf(" ") > 0) {
      const spaceIndex = best.indexOf(" ")+1;
      best = best.substring(0, spaceIndex) +
        best[spaceIndex].toUpperCase() + best.substring(spaceIndex+1);
    }
    return best;
  };
  
  _getMax = (name) => {
    if(this.state.stats == null)
      return 100;
    
    const betterName = this._correctNaming(name);
    
    return parseInt(this.state.stats[betterName].max,10);
  };
  
  _getMin = (name) => {
    if(this.state.stats == null)
      return 0;
    
    const betterName = this._correctNaming(name);
    
    return parseInt(this.state.stats[betterName].min,10);
  };
  
  render() {
    return (
      <Row upOnSmall={1}>
        {this.props.pokemonStats.map((parentStat,id) =>
          <Caracteristic value={this.state.stats == null ?
                          0 :
                          parentStat.base_stat}
                         step={1}
                         max={this._getMax(parentStat.stat.name)}
                         min={this._getMin(parentStat.stat.name)}
                         label={parentStat.stat.name} key={id}
          />
        )}
      </Row>
    )
  }
}

Caracteristics.propTypes = {
  pokemonStats: React.PropTypes.array.isRequired,
};

export default Caracteristics;