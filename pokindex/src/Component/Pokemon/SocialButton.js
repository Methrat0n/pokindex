/**
 * Created by merlin on 06/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Row,Column} from 'react-foundation';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import server  from '../../API/Server';
import {changeEventBarMessage, openEventBar,
  addPokemonToBookmark,removePokemonFromBookmark} from '../../API/Store/Actions'

import {red600,green400} from 'material-ui/styles/colors';
import styles from '../../API/Styling/Styles';

class SocialButton extends PureComponent {
  
  constructor() {
    super();
    this.state = {
      like: false,
      dislike:false,
    }
  }
  
  componentWillMount() {
    server.getLikes(this.props.pokemon.name).then(likes => {
      this.setState({like:likes.like, dislike:likes.dislike});
    });
  }
  
  _updateLikes = (like, dislike) => {
    const newLikes = {like:like, dislike:dislike};
    this.setState({like:like, dislike:dislike});
    server.setLikes(this.props.pokemon.name, newLikes);
    
    //We pop specific message for each case
    if(newLikes.like)
      this.props.popMessage("You now like "+this.props.pokemon.name);
    else if(newLikes.dislike)
      this.props.popMessage("You now dislike "+this.props.pokemon.name);
    else
      this.props.popMessage("You dont care anymore about "+this.props.pokemon.name);
  };
  
  _updateBookmark = () => {
    const newBookmark = !this.props.bookmark;
    server.setBookmark(this.props.pokemon.name, {bookmark: newBookmark});
    
    //Comfirmation message and modification of the store
    if(newBookmark) {
      this.props.addPokemonToBookMark(this.props.pokemon);
      this.props.popMessage("You have bookmarked " + this.props.pokemon.name);
    }
    else {
      this.props.removePokemonFromBookMark(this.props.pokemon);
      this.props.popMessage("Your bookmark was remove");
    }
  };
  
  render() {
    return (
      <Row>
        <Column>
          <IconButton tooltip="Like" iconStyle={styles.largeIcon}
            onClick={() => this._updateLikes(!this.state.like, false)}>
            <FontIcon className="material-icons"
              color={this.state.like ? green400 : red600}>
              thumb_up
            </FontIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton tooltip="Dislike" iconStyle={styles.largeIcon}
            onClick={() => this._updateLikes(false,!this.state.dislike)}>
            <FontIcon className="material-icons"
              color={this.state.dislike ? green400 : red600}>
              thumb_down
            </FontIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton tooltip="bookmark" iconStyle={styles.largeIcon}>
            <FontIcon className="material-icons"
                      onClick={this._updateBookmark}
                      color={this.props.bookmark ? green400 : red600}>
              {this.props.bookmark ? "bookmark" : "bookmark_border"}
              </FontIcon>
          </IconButton>
        </Column>
      </Row>
    )
  }
}

SocialButton.propTypes = {
  pokemon: React.PropTypes.object.isRequired,
};

const mapStatToProps = (state, ownProps) => {
  
  let pokemonBookmark = false;
  for(let bookmark of state.pokemonBookmarked)
    if (ownProps.pokemon.name === bookmark.name)
      pokemonBookmark = true;
  
  return {
    bookmark : pokemonBookmark,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    popMessage : (msg) => {
      dispatch(changeEventBarMessage(msg));
      dispatch(openEventBar);
    },
    addPokemonToBookMark: (pokemon) => {
      dispatch(addPokemonToBookmark(pokemon));
    },
    removePokemonFromBookMark: (pokemon) => {
      dispatch(removePokemonFromBookmark(pokemon));
    }
  }
};

export default connect(mapStatToProps,mapDispatchToProps)(SocialButton);