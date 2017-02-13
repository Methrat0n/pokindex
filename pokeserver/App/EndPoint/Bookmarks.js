/**
 * Created by merlin on 07/02/17.
 */
const {Bookmarks} = require('../Database');

const sendBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName;
  const userId = req.params.userId;
  
	Bookmarks.findOne({where: {pokemon_name: pokemonName, id_users: userId}})
  .then(bookmark => {
    if(typeof bookmark === 'undefined' || bookmark === null)
      res.json(false);
    else
      res.json(true);
  });
};

const _pokemonIsAlreadyKnow = function(pokemonNames, bookmark) {
  for(const pokeName of pokemonNames)
    if(pokeName === bookmark.dataValues.pokemon_name)
      return true;
  
  return false;
};

const sendBookmarks = function(req, res) {
  const userId = req.params.userId;
  
  Bookmarks.findAll({where: {id_users: userId}})
  .then(bookmarks => {
    let pokemonNames = [];
    for(const bookmark of bookmarks)
      if(!_pokemonIsAlreadyKnow(pokemonNames, bookmark))
        pokemonNames.push(bookmark.dataValues.pokemon_name)
    
    res.json(pokemonNames);
  });
};

const retrieveBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName;
  const userId = req.params.userId;

  const bookMarkPromise = Bookmarks.findOne( {where :
    {pokemon_name: pokemonName, id_users:userId }});
  
  if(req.body.bookmark)
  {
    bookMarkPromise.then(bookmark => {
      
      if(typeof bookmark === 'undefined' || bookmark === null)
        Bookmarks.create({pokemon_name: pokemonName, id_users: userId});
      
      //If we dont find one, we create it, if we find it then the user
      //should not have be able to send that message, so we do nothing
    });
  }
  else {
    bookMarkPromise.then(bookmark => {
      //If the user ask to delete a bookmark, we delete if we can
      
      if(typeof bookmark !== 'undefined' && bookmark !== null)
        bookmark.destroy();
    })
  }
  
  //Anyway everything's all right, ainit ?
  res.sendStatus(200);
};

module.exports = {sendBookmark, sendBookmarks, retrieveBookmark};
