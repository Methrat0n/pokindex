/**
 * Created by merlin on 07/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import PokemonMiniature from '../Search/PokemonMiniature';
import Loading from './Loading';

import server  from '../../API/Server';
import pokindex  from '../../API/Pokindex';
import {closeBookmarkBar,
  addPokemonToBookmark,
  removePokemonFromBookmark} from '../../API/Store/Actions';
import styles from '../../API/Styling/Styles';

class BookMarkSideBar extends PureComponent {
  
  constructor() {
    super();
    this.id_users = 0;
  }
  
  componentWillReceiveProps(newProps) {
    if(newProps.user !== null) {
      if(newProps.user.id_users !== this.id_users) {
      this.id_users = newProps.user.id_users;
      server.getBookmarks(newProps.user).then(bookmarks => {
        bookmarks.forEach(pokemonName => {
          pokindex.getPokemon(pokemonName).then(pokemon => {
            this.props.addPokemonToBookmark(pokemon);
          });
        });
      });
    }}
    else
      this.props.bookmarkPokemon.forEach(pokemon =>
        this.props.removePokemonFromBookMark(pokemon))
  }
  
  render() {
    return (
      <Drawer docked={false} openSecondary={true} containerStyle={styles.sideBar}
              open={this.props.open} onRequestChange={this.props.close}
              width={400}>
        <h2 style={styles.bookmarkTitle}>Bookmarks</h2>
        {this.props.bookmarkPokemon.length <= 0 ?
          <Loading /> :
          <List>
            {this.props.bookmarkPokemon.map((pokemon,id) =>
              <ListItem key={id} disabled>
                <PokemonMiniature pokemon={pokemon} />
              </ListItem>
            )}
          </List>
        }
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.isBookmarkBarOpen,
    bookmarkPokemon: state.pokemonBookmarked,
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {
      dispatch(closeBookmarkBar);
    },
    addPokemonToBookmark: (pokemon) => {
      dispatch(addPokemonToBookmark(pokemon));
    },
    removePokemonFromBookMark: (pokemon) => {
      dispatch(removePokemonFromBookmark(pokemon));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(BookMarkSideBar);
