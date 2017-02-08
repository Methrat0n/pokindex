/**
 * Created by merlin on 07/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import Snackbar from 'material-ui/Snackbar';

import {closeEventBar} from '../../API/Store/Actions';

class EventBar extends PureComponent {
  render() {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={1000}
        onRequestClose={this.props.close}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open : state.isEventBarOpen,
    message : state.eventBarMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
   close: () => {
     dispatch(closeEventBar);
   }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(EventBar);