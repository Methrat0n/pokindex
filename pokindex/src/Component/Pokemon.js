/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Row, Column} from 'react-foundation';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

import pokindex from '../API/Pokindex';
import PockeFont from './Utils/PockeFont';

class Pokemon extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  
  componentWillMount() {
    pokindex.getPokemon(this.props.params.name)
      .then(pokemon => this.setState({pokemon: pokemon}))
      .catch(error => console.log("Pokemon: "+this.props.params.name
        +" not found"));
  }
  
  render() {
    const pokemon = this.state.pokemon;
    //Handling the first render, TODO, make it better
    if(pokemon == null)
      return (<div></div>);
    
    return (
      <Paper>
        <Row>
          <Column small={12} medium={8}>
            <Card>
              <CardHeader
                title={<h3>{pokemon.name}</h3>}
                subtitle={"types: "+pokemon.types.map(parentType =>
                  parentType.type.name+" ")}
                actAsExpander={false}
                showExpandableButton={false}
              />
              <CardText>
                <Row upOnSmall={2} upOnMedium={3} upOnLarge={4}>
                {pokemon.stats.map((parentStat,id) =>
                  <Column key={id}>
                    <label>{parentStat.stat.name}
                      <LinearProgress mode="determinate"
                                      value={parentStat.base_stat}
                                      max={this.props.max(parentStat.stat.name)}
                                      min={this.props.min(parentStat.stat.name)}
                      />
                    </label>
                  </Column>
                )}
                </Row>
              </CardText>
            </Card>
            
          </Column>
          <Column small={12} medium={4}>
            <PockeFont font={pokemon.sprites.front_default} />
          </Column>
        </Row>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    max: (statName) => {
      return state.stat[statName].max;
    },
    min: (statName) => {
      return state.stat[statName].min;
    },
  }
};

export default connect(mapStateToProps)(Pokemon);