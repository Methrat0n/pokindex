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

const stats = (state = [], action) => {
  switch (action.type) {
    case "Saving_Stat" :
      const newState = Object.assign([],state); //Create a new array, copy the state
      let currentStat = {
        min: 10000000,
        max: 0,
        total: 0,
        nbInfo: 0,
      };
      //If the state already contains an object for this stat
      if(typeof newState[action.statName] !== 'undefined')
        currentStat = newState[action.statName];
      
      if(currentStat.min > action.value)
        currentStat.min = action.value;
      
      if(currentStat.max < action.value)
        currentStat.max = action.value;
      
      currentStat.total+= action.value;
      currentStat.nbInfo++;
  
      newState[action.statName] = currentStat;
      return newState;
    default :
      return state;
  }
};

export {isSearching,pokemons,stats};