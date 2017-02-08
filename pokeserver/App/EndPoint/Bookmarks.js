/**
 * Created by merlin on 07/02/17.
 */
const idUser = 1;

const {Bookmarks} = require('../Database');

const sendBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName;

	Bookmarks.findOne({where: {pokemon_name: pokemonName}}).then(bookmark => {
    
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
	
  Bookmarks.findAll().then(bookmarks => {

    console.log(bookmarks);
    
    let pokemonNames = [];
    for(const bookmark of bookmarks)
      if(!_pokemonIsAlreadyKnow(pokemonNames, bookmark))
        pokemonNames.push(bookmark.dataValues.pokemon_name)
    
    console.log(pokemonNames);
    
    res.json(pokemonNames);
  });
};

const retrieveBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName;
  
  console.log(pokemonName);
  
  const bookMarkPromise = Bookmarks.findOne( {where :
    {pokemon_name: pokemonName, id_users:idUser }});
  
  if(req.body.bookmark)
  {
    bookMarkPromise.then(bookmark => {
      
      console.log(bookmark);
      
      if(typeof bookmark === 'undefined' || bookmark === null)
        Bookmarks.create({pokemon_name: pokemonName, id_users: idUser});
      
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
