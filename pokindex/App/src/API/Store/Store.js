/**
 * Created by merlin on 22/01/17.
 */
import { createStore, combineReducers } from 'redux';

import {isSearching,pokemons,
  isEventBarOpen,eventBarMessage,
  isBookmarkBarOpen,pokemonBookmarked} from './Reducers';

const reducer = combineReducers({
  isSearching,
  pokemons,
  eventBarMessage,
  isEventBarOpen,
  isBookmarkBarOpen,
  pokemonBookmarked
});

const store = createStore(reducer);
export default store;