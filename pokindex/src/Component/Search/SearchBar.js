/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import {Row, Column} from 'react-foundation';
import Paper from 'material-ui/Paper';

import {beginSearch,endSearch,addPokemon,resetPokemon} from '../../API/Store/Actions';

import styles from '../../API/Styling/Styles';
import pokindex from '../../API/Pokindex';

class SearchBar extends PureComponent {
  render() {
    return (
      <Row>
        <Column centerOnSmall style={styles.columnSearchBar}>
          <Paper zDepth={4}>
            <TextField fullWidth={true} style={styles.searchBar}
              onChange={(e) => this.props.search(e)}>
            </TextField>
          </Paper>
        </Column>
      </Row>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (event) => {
      dispatch(resetPokemon);
      const newValue = event.target.value;
      
      if (newValue.length > 2) {
        const pokemonPromises = pokindex.getPokemonsLike(newValue);
        dispatch(beginSearch);
        pokemonPromises.forEach(pokemonPromise => {
          pokemonPromise.then(pokemon => {
            dispatch(endSearch);
            dispatch(addPokemon(pokemon));
          });
        });
        if(pokemonPromises.length < 1)
          dispatch(endSearch);
      }
    }
  }
};

export default connect(null, mapDispatchToProps)(SearchBar);

//import FontIcon from 'material-ui/FontIcon';
//<FontIcon className="material-icons">search</FontIcon>