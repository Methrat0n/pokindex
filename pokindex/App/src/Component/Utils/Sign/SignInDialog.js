/**
 * Created by merlin on 12/02/17.
 */
import React, { PureComponent } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Sign from './Sign';

class SignInDialog extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      signUpOpen: false,
      signIn: {},
      signUp: {},
    }
  }
  
  onSignInChange = (signIn) => {
    this.setState({signIn: signIn})
  };
  
  onSignUpChange = (signUp) => {
    this.setState({signUp: signUp})
  };
  
  signUp = () => {
    this.props.onSignUp(this.state.signUp);
    this.props.onClose();
    this.closeSignUp();
  };
  
  closeSignUp = () => {
    this.setState({signUpOpen: false})
  };
  
  openSignUp = () => {
    this.setState({signUpOpen: true});
    this.props.onSignUp(this.state.signUp)
  };
  
  signIn = () => {
    this.props.onClose();
    this.props.onSignIn(this.state.signIn);
  };
  
  render() {
    const defaultActions = [
      <FlatButton
        label="Sign in"
        primary={true}
        onTouchTap={this.props.signIn}
      />
    ];
    
    const withSignUpActions = [
      <FlatButton
        label="Sign up"
        primary={false}
        onTouchTap={this.openSignUp}
      />,
      <FlatButton
        label="Sign in"
        primary={true}
        onTouchTap={this.signIn}
      />,
    ];
  
    const defaultTitle = "Please Sign In";
    const defaultModal = false;
    const defaultRepositionOnUpdate = true;
    const defaultStyle = {
      width: '40em',
      marginLeft: '30em'
    };
    
    const defaultSignUpTitle = "Sign Up";
    const defaultSignUpActions =  [
      <FlatButton
      label="Sign up"
      primary={true}
      onTouchTap={this.signUp}
      />
    ];
    
    const defaultSignUpModal = false;
    
    return (
      <div>
        <Dialog
          title={this.props.signInTitle || defaultTitle}
          actions={this.props.signInActions ||
          this.props.signUp ? withSignUpActions : defaultActions}
          modal={this.props.signInModal || defaultModal}
          open={this.props.open}
          onRequestClose={this.props.onClose}
          style={this.props.signInStyle || defaultStyle}
          repositionOnUpdate={this.props.repositionSignInOnUpdate ||
            defaultRepositionOnUpdate}
        >
          <Sign
            titleConnection={this.props.SignInName}
            isTitleConnectionFloating={this.props.isNameSignInFloating}
            titlePwd={this.props.titleSignInPwd}
            isTitlePwdFloating={this.props.isTitleSignInPwdFloating}
            socials={this.props.socials}
            onSignChange={this.onSignInChange}
          />
        </Dialog>
        {this.props.signUp ?
          <Dialog
            title={this.props.titleSignUp || defaultSignUpTitle}
            actions={this.props.SignUpActions || defaultSignUpActions}
            modal={this.props.SignUpModal || defaultSignUpModal}
            open={this.state.signUpOpen}
            onRequestClose={this.closeSignUp}
            style={this.props.SignUpStyle || defaultStyle}
            repositionOnUpdate={this.props.repositionSignUpOnUpdate ||
            defaultRepositionOnUpdate}
          >
            <Sign
              titleConnection={this.props.titleSignUpConnection || "Sign Up"}
              isTitleConnectionFloating={this.props.isTitleSignUpConnectionFloating}
              titlePwd={this.props.titleSignUpPwd}
              isTitlePwdFloating={this.props.isTitleSignUpPwdFloating}
              socials={this.props.signUpSocials || this.props.socials}
              onSignChange={this.onSignUpChange}
            />
          </Dialog>:
          <span></span>
        }
      </div>
    )
  }
}

SignInDialog.PropTypes = {
  open: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired,
  
  signInStyle: React.PropTypes.object,
  signInTitle: React.PropTypes.string,
  signInActions: React.PropTypes.array,
  signInModal: React.PropTypes.bool,
  repositionSignInOnUpdate: React.PropTypes.bool,
  
  SignInName: React.PropTypes.string,
  isNameSignInFloating: React.PropTypes.bool,
  titleSignInPwd: React.PropTypes.string,
  isTitleSignInPwdFloating: React.PropTypes.bool,
  socials: React.PropTypes.array,
  
  onSignIn: React.PropTypes.func.isRequired,
  
  
  
  signUp: React.PropTypes.bool,
  
  titleSignUp: React.PropTypes.string,
  SignUpActions: React.PropTypes.array,
  SignUpModal: React.PropTypes.bool,
  SignUpStyle: React.PropTypes.object,
  repositionSignUpOnUpdate: React.PropTypes.bool,
  
  titleSignUpConnection: React.PropTypes.string,
  isTitleSignUpConnectionFloating: React.PropTypes.bool,
  titleSignUpPwd: React.PropTypes.string,
  isTitleSignUpPwdFloating: React.PropTypes.bool,
  signUpSocials: React.PropTypes.array,
  
  onSignUp: React.PropTypes.func,
};

export default SignInDialog;