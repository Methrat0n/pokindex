/**
 * Created by merlin on 09/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import Dialog from 'material-ui/Dialog';
//import RaisedButton from 'material-ui/RaisedButton';
import SocialButton from 'react-social-button';
import {Row, Column} from 'react-foundation';

import {connection,closeConnection} from '../../API/Store/Actions';
import styles from '../../API/Styling/Styles';

const sociales = ['twitter','dropbox','facebook','github','google','linkedin','openid','reddit','twitter'];

class ConnectionDialog extends PureComponent {
  
  render() {
    return (
        <Dialog
          title={this.props.title}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.close}
        >
          {sociales.map((social,id) =>
            <SocialButton social={social} key={id} style={styles.socialButton} />
          )}
        </Dialog>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.isConnectionOpen,
    title: state.titleDialog || "default",
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    connection: () => {
      dispatch(connection);
    },
    close: () => {
      dispatch(closeConnection);
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ConnectionDialog);