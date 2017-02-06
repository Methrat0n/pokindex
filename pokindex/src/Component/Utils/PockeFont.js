/**
 * Created by merlin on 03/02/17.
 */
import React, { PureComponent } from 'react';

import styles from '../../API/Styling/Styles';

class PockeFont extends PureComponent {
  render() {
    return (
      <img style={styles.imageSize}
           src={this.props.font ||
           "http://placehold.it/50x50"}
           alt="placeholder"/>
    )
  }
}

PockeFont.propTypes = {
  font: React.PropTypes.string,
};

export default PockeFont;