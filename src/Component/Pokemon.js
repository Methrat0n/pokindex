/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Pokedex from 'pokedex-promise-v2';

class Pokemon extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
    const pokedex = new Pokedex();
    pokedex.getPokemonByName(props.params.name)
      .then(pokemon => this.setState({pokemon: pokemon}));
  }
  
  render() {
    if()
    
    return (
      <div>
        <img src={this.state.pokemon.sprites.front_default} alt="placeholder"/>
      </div>
    )
  }
}

export default connect()(Pokemon);