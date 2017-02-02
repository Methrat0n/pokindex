/**
 * Created by merlin on 02/02/17.
 */
const beginSearch = {
  type: "Begin_Search",
};
const endSearch = {
  type: "Ending_Search",
};

const searchPokemons = (name) => {
  return {
    type: "Searching_Pokemon",
    pokemonName: name,
  }
};

const findPokemon = (name) => {
  return {
    type: "Find_Pokemon",
    pokemonName: name,
  }
};

export {beginSearch,endSearch,searchPokemons,findPokemon};