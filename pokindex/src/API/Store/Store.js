/**
 * Created by merlin on 22/01/17.
 */
import { createStore, combineReducers } from 'redux';

import {isSearching,pokemons} from './Reducers';

const reducer = combineReducers({
  isSearching,
  pokemons,
//  currentPokemon
});

const store = createStore(reducer);
export default store;