/**
 * Created by merlin on 05/02/17.
 */
var Pokedex = require('pokedex-promise-v2');
var sleep = require('sleep'); //Needed so that I dont dos the api
var pokedex = new Pokedex({hostName:'localhost:80'});

var stats = [];

//Do the calculations and save it in stats
var _addToStats = function(parentStat) {
  var currentStat = {
    min: 10000000,
    max: 0,
    total: 0,
    nbInfo: 0,
  };
  //If the state already contains an object for this stat
  if(typeof stats[parentStat.stat.name] !== 'undefined')
    currentStat = stats[parentStat.stat.name];
  
  if(currentStat.min > parentStat.base_stat)
    currentStat.min = parentStat.base_stat;
  
  if(currentStat.max < parentStat.base_stat)
    currentStat.max = parentStat.base_stat;
  
  currentStat.total+= parentStat.base_stat;
  currentStat.nbInfo++;
  
  stats[parentStat.stat.name] = currentStat;
};

pokedex.getPokemonsList().then(function(pokemons) {
  pokemons.results.forEach(function(pokemonRef) {
    sleep.sleep(1);
    pokedex.getPokemonByName(pokemonRef.name).then(function(pokemon) {
      pokemon.stats.forEach(function(parentStat) {
          _addToStats(parentStat);
      });
    })
  });
});

module.exports.default = stats;