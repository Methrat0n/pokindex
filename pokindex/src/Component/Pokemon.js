/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';

import {Row, Column} from 'react-foundation';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import Caracteristics from './Pokemon/Caracteristics';
import pokindex from '../API/Pokindex';
import PockeFont from './Utils/PockeFont';
import Loading from './Utils/Loading';
import Tweets from './Pokemon/Tweets';
import SocialButton from './Pokemon/SocialButton';

import styles from '../API/Styling/Styles';

class Pokemon extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  
  componentWillMount() {
    pokindex.getPokemon(this.props.params.name).then(pokemon => {
        this.setState({pokemon: pokemon});
    });
  };
  
  render() {
    const pokemon = this.state.pokemon;
    
    //Handling the first render
    if(pokemon == null)
      return (<Loading />);

    return (
      <Row>
        <Column small={12} medium={7}>
          <Card style={styles.columnSearchBar}>
            <CardHeader
              title={<h3 style={styles.pokemonName}>{pokemon.name}</h3>}
              subtitle={"types: "+pokemon.types.map(parentType =>
                parentType.type.name+" ")}
              actAsExpander={false}
              showExpandableButton={false}
            />
            <CardText>
              <Row>
                <Column small={12} medium={8}>
                  <Row>
                    <Column>
                      <PockeFont font={pokemon.sprites.front_default} />
                    </Column>
                  </Row>
                  <SocialButton pokemonName={this.state.pokemon.name} />
                </Column>
                <Column small={12} medium={4}>
                  <Caracteristics pokemonStats={this.state.pokemon.stats}/>
                </Column>
              </Row>
            </CardText>
          </Card>
          
        </Column>
        <Column small={12} medium={5}>
          <Tweets nbTweet={2} pokemonName={this.state.pokemon.name} />
        </Column>
      </Row>
    )
  }
}

export default Pokemon;