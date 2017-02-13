/**
 * Created by merlin on 09/02/17.
 */
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {connection,closeConnection,
  closeDisconnection,disconnection} from '../../API/Store/Actions';
import SignInDialog from './Sign/SignInDialog';
import SignOutDialog from './Sign/SignOutDialog';

import server from '../../API/Server';

const socials = [];/*'twitter','dropbox','facebook','github',
  'google','linkedin','openid','reddit','twitter'];*/

class ConnectionDialog extends PureComponent {
  
  signUp = (logs) => {
    //create user
    server.signUp(logs).then(user => {
      this.props.connection(user);
    }).catch(err => {
      console.log(err);
    })
  };
  
  signIn = (logs) => {
    server.signIn(logs).then(user => {
      this.props.connection(user);
    }).catch(err => {
      console.log(err);
    })
  };
  
  disconnect = () => {
    this.props.disconnect();
    this.props.closeDisconnectionModal();
  };
  
  render() {
    return (
      <div>
        <SignInDialog
          signUp={true}
          socials={socials}
          open={this.props.openConnection}
          onClose={this.props.closeConnectionModal}
          onSignIn={this.signIn}
          onSignUp={this.signUp}
        />
        <SignOutDialog
          open={this.props.openDisconnection}
          onClose={this.props.closeDisconnectionModal}
          disconnect={this.disconnect}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    openConnection: state.isConnectionOpen,
    openDisconnection: state.isDisconnectionOpen,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    connection: (user) => {
      dispatch(connection(user));
    },
    closeConnectionModal: () => {
      dispatch(closeConnection);
    },
    closeDisconnectionModal: () => {
      dispatch(closeDisconnection);
    },
    disconnect: () => {
      dispatch(disconnection);
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ConnectionDialog);