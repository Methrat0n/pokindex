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

const saveStat = (value, statName) => {
  return {
    type: "Saving_Stat",
    value: value,
    statName: statName,
  }
};

const closeEventBar = {
  type: "Closing_Event_Bar",
};

const openEventBar = {
  type: "Opening_Event_Bar",
};

const changeEventBarMessage = (message) => {
  return {
    type: "Changing_Event_Bar_Message",
    msg: message,
  }
};

const closeBookmarkBar = {
  type: "Closing_Bookmark_Bar",
};

const openBookmarkBar = {
  type: "Opening_Bookmark_Bar",
};

const addPokemonToBookmark = (pokemon) => {
  return {
    type: "Adding_Pokemon_To_Bookmark",
    pokemon: pokemon,
  }
};

const removePokemonFromBookmark = (pokemon) => {
  return {
    type: "Removing_Pokemon_From_Bookmark",
    pokemon: pokemon,
  }
};

const connection = (user) => {
  return {
    type: "Connecting",
    user: user,
  }
};

const disconnection = {
  type: "Disconnecting"
};

const openConnection = {
  type: "Openning_Connection_Modal",
};

const closeConnection = {
  type: "Closing_Connection_Modal",
};

const openDisconnection = {
  type: "Openning_Disconnection",
};

const closeDisconnection = {
  type: "Closing_Disconnection",
};

export {beginSearch,endSearch,addPokemon,resetPokemon,saveStat,
  closeEventBar, openEventBar,changeEventBarMessage,
  closeBookmarkBar,openBookmarkBar,
  addPokemonToBookmark,removePokemonFromBookmark,
  disconnection, connection,openConnection,closeConnection,
  openDisconnection,closeDisconnection};