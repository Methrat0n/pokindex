/**
 * Created by merlin on 09/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {openBookmarkBar} from '../../API/Store/Actions';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

import {openConnection} from '../../API/Store/Actions';

import styles from '../../API/Styling/Styles';
import {grey50} from 'material-ui/styles/colors';

class ButtonBar extends PureComponent {
  render() {
    return (
      <div>
        <FlatButton onClick={() => {this.props.openConnection}
        }>
          <h4 style={styles.logButton}>{this.props.isConnected ? "Log Out" : "Log In"}</h4>
        </FlatButton>
        <IconButton onClick={this.props.openSideBar}><FontIcon
          className="material-icons" color={grey50}>
          bookmark</FontIcon>
        </IconButton>
      </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    isConnected: state.isConnected,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSideBar: () => {
      dispatch(openBookmarkBar);
    },
    openConnection: () => {
      dispatch(openConnection)
    },
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ButtonBar);