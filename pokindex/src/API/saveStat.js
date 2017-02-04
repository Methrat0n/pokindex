/**
 * Created by merlin on 04/02/17.
 */

onmessage = function(e) {
  
  console.log('Message received from main script');
  
  import Pokedex from 'pokedex-promise-v2';
  import store from './Store/Store';
  import {saveStat} from './Store/Actions'
  
  const options = {
    hostName: 'localhost:8000',
  };
  
  const pokedex = new Pokedex(options);
  pokedex.getStatsList().then(stats => {
    stats.results.forEach(stat => {
      this.pokemonNames.forEach(pokemonName => {
        this.getPokemon(pokemonName).then(pokemon => {
          pokemon.stats.forEach(parentStat => {
            if (parentStat.stat.name === stat.name)
              store.dispatch(saveStat(parentStat.base_stat, stat.name))
          })
        })
      })
    });
  });
  
  console.log("End of the worker reach");
  
};