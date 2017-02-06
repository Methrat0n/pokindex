/**
 * Created by merlin on 06/02/17.
 */
import React, { PureComponent } from 'react';

import LinearProgress from 'material-ui/LinearProgress';
import {Column} from 'react-foundation';

class Caracteristic extends PureComponent {
  
  constructor() {
    super();
    
    this.state = {
      completed: 0,
    };
  }
  
  componentDidMount() {
    this.timer = setTimeout(() => this._progress(this.props.min), 1000);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  
  _progress = (completed) => {
    
    const step = this.props.step;
    const value = this.props.value || 1;
    
    if (completed > value) {
      this.setState({completed: value});
    } else {
      this.setState({completed});
      this.timer = setTimeout(() => this._progress(completed + step), 10);
    }
  };
  
  render() {
    return (
      <Column>
        <label>{this.props.label}
          <LinearProgress mode="determinate" value={this.state.completed}
                      min={this.props.min} max={this.props.max}/>
        </label>
      </Column>
    );
  }
}

Caracteristic.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  label: React.PropTypes.string,
  value: React.PropTypes.number.isRequired,
  step: React.PropTypes.number,
};

export default Caracteristic;