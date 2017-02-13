/**
 * Created by merlin on 12/02/17.
 */
import React, { PureComponent } from 'react';
import SocialButton from 'react-social-button';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Row, Column} from 'react-foundation';

const defaultTitleSign = "Login";
const defaultIsTitleSignFloating = true;
const defaultTitlePwd = "Password";
const defaultIsTitlePwdFloating = true;

class Sign extends PureComponent
{
  constructor() {
    super();
    this.state = {
      signText: "",
      pwdText: "",
    };
  }
  
  signChange = (e) => {
    const newValue = e.target.value;
    this.setState({signText: newValue});
    this.props.onSignChange({signText: newValue, pwdText: this.state.pwdText});
  };
  
  pwdChange = (e) => {
    const newValue = e.target.value;
    this.setState({pwdText: newValue});
    this.props.onSignChange({signText: this.state.signText, pwdText: newValue});
  };
  
  render() {
    return (
      <div>
        <Row>
          <Column>
            <TextField
              floatingLabelText={this.props.titleSign || defaultTitleSign}
              floatingLabelFixed={this.props.isTitleSignFloating ||
                defaultIsTitleSignFloating}
               onChange={this.signChange}
            >
            </TextField>
          </Column>
        </Row>
        <Row>
          <Column>
            <TextField
              floatingLabelText={this.props.titlePwd || defaultTitlePwd}
              floatingLabelFixed={this.props.isTitlePwdFloating ||
                defaultIsTitlePwdFloating}
              type="password"
              onChange={this.pwdChange}
            >
            </TextField>
          </Column>
        </Row>
        {this.props.socials ?
          <Row>
            {this.props.socials.map((social, id) =>
              <Column key={id}>
                <SocialButton social={social}/>
              </Column>
            )}
          </Row>
          :<spans></spans>
        }
        {this.props.actions ?
          <Row>
            {this.props.actions.map((action,id) =>
              <Column key={id}>
                <FlatButton label={action.label}
                            primary={action.primary || false}
                            secondary={action.secondary || false}
                            default={action.default || false}
                            onTouchTap={action.onTouchTap}
                />
              </Column>
            )}
          </Row>
          : <span></span>
        }
      </div>
    )
  }
}

Sign.PropTypes = {
  titleSign: React.PropTypes.string,
  isTitleSignFloating: React.PropTypes.bool,

  titlePwd: React.PropTypes.string,
  isTitlePwdFloating: React.PropTypes.bool,
  
  socials: React.PropTypes.array,
  socialsAction: React.PropTypes.arrayOf(React.PropTypes.func),
  
  actions: React.PropTypes.array,
  
  onSignChange: React.PropTypes.func.isRequired,
};

export default Sign;