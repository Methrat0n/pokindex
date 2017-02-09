/**
 * Created by merlin on 09/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import Dialog from 'material-ui/Dialog';
//import RaisedButton from 'material-ui/RaisedButton';
import SocialButton from 'react-social-button';
import {Row, Column} from 'react-foundation';

import {connection, connect} from '../../API/Store/Actions';
//import styles from '../../API/Styling/Styles';

const sociales = ['twitter','dropbox','facebook','github','google','linkedin','openid','reddit','twitter'];

class ConnectionDialog extends PureComponent {
  
  render() {
    return (
      <div>
        <Dialog
          title={this.props.title}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.close}
        >
          <Row>
            {sociales.map((social,id) =>
              <Column key={id}>
                <SocialButton
                  social={social}
                  btnProps={{
                    disabled: false,
                    onClick: function(){alert('Callback called.');}
                  }}/>
              </Column>
            )}
          </Row>
        </Dialog>
      </div>
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