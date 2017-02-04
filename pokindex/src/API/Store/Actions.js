/**
 * Created by merlin on 02/02/17.
 */
const beginSearch = {
  type: "Begin_Search",
};
const endSearch = {
  type: "Ending_Search",
};

const addPokemon = (pokemon) => {
  return {
    type: "adding_pokemon",
    pokemon: pokemon,
  }
};

const resetPokemon = {
  type: "Reset_Pokemon",
};

export {beginSearch,endSearch,addPokemon,resetPokemon};