/**
 * Created by merlin on 07/02/17.
 */
const inMemory = {};

const sendBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName;
  
  if(typeof inMemory[pokemonName] === 'undefined')
    res.json(false);
  else
    res.json(inMemory[pokemonName]);
};

const sendBookmarks = function(req, res) {
  res.json(inMemory);
};

const retrieveBookmark = function(req, res) {
  const pokemonName = req.params.pokemonName;
  
  inMemory[pokemonName] = req.body;
  
  res.sendStatus(200);
};

module.exports = {sendBookmark, sendBookmarks, retrieveBookmark};