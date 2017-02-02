/**
 * Created by merlin on 02/02/17.
 */
import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex();

const defaultPokemon = new Promise(resolve => resolve([]))

const isSearching = (state = false, action) => {
  switch (action.type) {
    case "Begin_Search" :
      return true;
    case "Ending_Search" :
      return false;
    default :
      return state;
  }
};

const pokemons = (state = defaultPokemon, action) => {
  switch (action.type) {
    case "Searching_Pokemon" :
      return pokedex.getPokemonByName(action.pokemonName);
    default :
      return state;
  }
};

const currentPokemon = (state = null, action) => {
  switch (action.type) {
    case "Find_Pokemon" :
      return pokedex.getPokemonByName(action.pokemonName);
    default :
      return state;
  }
};

export {isSearching,pokemons,currentPokemon};