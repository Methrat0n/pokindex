/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import pokindex from '../API/Pokindex';
import PockeFont from './Utils/PockeFont';

class Pokemon extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  
  componentWillMount() {
    pokindex.getPokemon(this.props.params.name)
      .then(pokemon => this.setState({pokemon: pokemon}))
      .catch(error => console.log("Pokemon: "+this.props.params.name
        +" not found"));
  }
  
  render() {
    const pokemon = this.state.pokemon;
    //Handling the first render, TODO, make it better
    if(pokemon == null)
      return (<div></div>);
    
    return (
      <div>
        <PockeFont font={pokemon.sprites.front_default} />
      </div>
    )
  }
}

export default connect()(Pokemon);