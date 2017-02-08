/**
 * Created by merlin on 07/02/17.
 */
import React, { PureComponent } from 'react';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import { browserHistory} from 'react-router';

import PockeFont from '../Utils/PockeFont';
import styles from '../../API/Styling/Styles';

class PokemonMiniature extends PureComponent {
  render() {
    return (
      <Card style={styles.handCurser}
        onClick={()=> browserHistory.push("/pokemon/"+this.props.pokemon.name)}>
        <CardMedia
          overlay={
            <CardTitle title={this.props.pokemon.name}
             subtitle={"types : "+this.props.pokemon.types.map(type =>
                 type.type.name+" ")}
            />
          }
        >
          <PockeFont font={this.props.pokemon.sprites.front_default} />
        </CardMedia>
      </Card>
    )
  }
}

PokemonMiniature.PropTypes = {
  pokemon : React.PropTypes.object.isRequired,
};

export default PokemonMiniature;