/**
 * Created by merlin on 03/02/17.
 */
import Pokedex from 'pokedex-promise-v2';

class Pokindex {

  constructor() {
    this.pokedex = new Pokedex();
    this.pokemonNames = [];
    this.pokedex.getPokemonsList().then(pokemons => {
      pokemons.results.forEach(pokemon => {
        this.pokemonNames.push(pokemon.name);
      });
    });
  }
  
  getPokemonsLike = (name) => {
    let pokemonPromises = [];
    for(let pokemonName of this.pokemonNames) {
      if(pokemonName.indexOf(name) >= 0) {
        const pokemonPromise = this.getPokemon(pokemonName);
        pokemonPromises.push(pokemonPromise);
      }
    }
    return pokemonPromises;
  };
  
  getPokemon = (name) => {
    const pokemonPromise = this.pokedex.getPokemonByName(name);
    return pokemonPromise;
  };
}
const pokindex = new Pokindex();
export default pokindex;