/**
 * Created by merlin on 06/02/17.
 */
import React, { PureComponent } from 'react';

import {Row,Column} from 'react-foundation';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import server  from '../../API/Server';

import {red600,indigo500} from 'material-ui/styles/colors';
import styles from '../../API/Styling/Styles';

class SocialButton extends PureComponent {
  
  constructor() {
    super();
    this.state = {
      like: false,
      dislike:false,
      bookmark:false,
    }
  }
  
  componentWillMount() {
    server.getLikes(this.props.pokemonName).then(likes => {
      this.setState({like:likes.like, dislike:likes.dislike});
    });
  }
  
  _update = (like, dislike) => {
    const newLikes = {like:like, dislike:dislike};
    this.setState({like:like, dislike:dislike});
    server.setLikes(this.props.pokemonName, newLikes);
  };
  
  render() {
    return (
      <Row>
        <Column>
          <IconButton tooltip="Like" iconStyle={styles.largeIcon}
            onClick={() => this._update(!this.state.like, false)}>
            <FontIcon className="material-icons"
              color={this.state.like ? indigo500 : red600}>
              thumb_up
            </FontIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton tooltip="Dislike" iconStyle={styles.largeIcon}
            onClick={() => this._update(false,!this.state.dislike)}>
            <FontIcon className="material-icons"
              color={this.state.dislike ? indigo500 : red600}>
              thumb_down
            </FontIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton tooltip="bookmark" iconStyle={styles.largeIcon}>
            <FontIcon className="material-icons" color={red600}>bookmark_border</FontIcon>
          </IconButton>
        </Column>
      </Row>
    )
  }
}

SocialButton.propTypes = {
  pokemonName: React.PropTypes.string.isRequired,
};

export default SocialButton;