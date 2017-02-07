/**
 * Created by merlin on 07/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import PokemonMiniature from '../Search/PokemonMiniature';
import Loading from '../Utils/Loading';

import server  from '../../API/Server';
import pokindex  from '../../API/Pokindex';
import {closeBookmarkBar,addPokemonToBookmark} from '../../API/Store/Actions';
import styles from '../../API/Styling/Styles';

class BookMarkSideBar extends PureComponent {
  
  componentWillMount() {
    server.getBookmarks().then(bookmarks => {
      Object.keys(bookmarks).forEach(pokemonName => {
        pokindex.getPokemon(pokemonName).then(pokemon => {
          this.props.addPokemonToBookmark(pokemon);
        });
      });
    });
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
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(BookMarkSideBar);