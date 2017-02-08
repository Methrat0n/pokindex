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

//Tell if an array already contains a Pokemon
const isInPokemonsArray = (array, pokemon) => {
  for(const elementPokemon of array)
    if(elementPokemon.name === pokemon.name)
      return true;
  
  return false;
};

const pokemons = (state = [], action) => {
  switch (action.type) {
    case "adding_pokemon" :
      if(isInPokemonsArray(state,action.pokemon)) //If the Pokemon is already in the array
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

const isEventBarOpen = (state = false, action) => {
  switch (action.type) {
    case "Closing_Event_Bar" :
      return false;
    case "Opening_Event_Bar" :
      return true;
    default :
      return state;
  }
};

const eventBarMessage = (state = "", action) => {
  switch (action.type) {
    case "Changing_Event_Bar_Message" :
      return action.msg;
    default :
      return state;
  }
};

const isBookmarkBarOpen = (state = false, action) => {
  switch (action.type) {
    case "Closing_Bookmark_Bar":
      return false;
    case "Opening_Bookmark_Bar":
      return true;
    default:
      return state;
  }
};

const pokemonBookmarked = (state = [], action) => {
  switch (action.type) {
    case "Adding_Pokemon_To_Bookmark":
      return Object.assign([],[...state,action.pokemon]);
    case "Removing_Pokemon_From_Bookmark":
      const newState = [];
      for(let pokemon of state) {
        if (pokemon.name !== action.pokemon.name)
          newState.push(pokemon);
      }
      return newState;
    default:
      return state;
  }
};

export {isSearching,pokemons,
  isEventBarOpen,eventBarMessage,
  isBookmarkBarOpen,pokemonBookmarked};