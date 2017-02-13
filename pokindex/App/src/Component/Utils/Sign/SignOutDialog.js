/**
 * Created by merlin on 12/02/17.
 */
import React, { PureComponent } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class SignOutDialog extends PureComponent {
  
  disconnect = () => {
    this.props.disconnect();
    this.props.onClose();
  };
  
  render() {
    
    const defaultTitle = "Sign Out";
    const defaultModal = false;
    const defaultStyle = {
      width: '40em',
      marginLeft: '30em'
    };
    const defaultRepositionOnUpdate = true;
    const defaultDeconnectionMessage = "You are going offline, are you sure ?";
  
    const defaultActions = [
      <FlatButton
        label="Sure"
        primary={false}
        onTouchTap={this.disconnect}
      />,
      <FlatButton
        label="No"
        primary={true}
        onTouchTap={this.props.onClose}
      />,
    ];
    
    return (
      <Dialog
        title={this.props.title || defaultTitle}
        actions={this.props.actions || defaultActions}
        modal={this.props.modal || defaultModal}
        open={this.props.open}
        onRequestClose={this.props.onClose}
        style={this.props.style || defaultStyle}
        repositionOnUpdate={this.props.repositionOnUpdate ||
        defaultRepositionOnUpdate}
      >
        {this.props.deconnectionMessage || defaultDeconnectionMessage}
      </Dialog>
    )
  }
}
SignOutDialog.PropTypes = {
  open: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired,
  disconnect: React.PropTypes.func.isRequired,
  
  style: React.PropTypes.object,
  title: React.PropTypes.string,
  actions: React.PropTypes.array,
  modal: React.PropTypes.bool,
  repositionOnUpdate: React.PropTypes.bool,

  deconnectionMessage: React.PropTypes.string,
};

export default SignOutDialog;
