/**
 * Created by merlin on 02/02/17.
 */
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

const pokemons = (state = [], action) => {
  switch (action.type) {
    case "adding_pokemon" :
      if(state.includes(action.pokemon)) //If the pokemon is already in the array
        return state;
      
      const newState = Object.assign([],state); //Create a new array, copy the state
      newState.push(action.pokemon);
      return newState;
    case "Reset_Pokemon" :
      return [];
    default :
      return state;
  }
};

export {isSearching,pokemons};