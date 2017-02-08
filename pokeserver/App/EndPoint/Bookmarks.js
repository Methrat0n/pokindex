/**
 * Created by merlin on 07/02/17.
 */
const inMemory = {};
const idUser = 0;

const {Bookmarks} = require('../Database');

const sendBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName; //Pokemon Name
  Bookmarks.findOne({ //"Sql" request
    where: {pokemon_name: pokemonName,}
  }).then(bookmark => {
    if(typeof bookmark === 'undefined')
      res.json(false);
    else
      res.json(true);
  });
};

const sendBookmarks = function(req, res) {
  Bookmarks.findAll().then(bookmarks => {
    let pokemonNames = [];
    for(const bookmark of bookmarks)
      pokemonNames.push(bookmark.pokemon_name)
    
    res.json(pokemonNames);
  });
};

const retrieveBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName;
  
  if(req.body)
    Bookmarks.create({pokemon_name: pokemonName, id_users: idUser});
  else
    Bookmarks.delete()
  
  res.sendStatus(200);
};

module.exports = {sendBookmark, sendBookmarks, retrieveBookmark};