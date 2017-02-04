/**
 * Created by merlin on 22/01/17.
 */
import { createStore, combineReducers } from 'redux';

import {isSearching,pokemons,stats} from './Reducers';

const reducer = combineReducers({
  isSearching,
  pokemons,
  stats,
});

const store = createStore(reducer);
export default store;