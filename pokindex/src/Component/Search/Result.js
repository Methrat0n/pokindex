/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Row, Column} from 'react-foundation';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import { browserHistory} from 'react-router';

import PockeFont from '../Utils/PockeFont';
import Loading from '../Utils/Loading';

import styles from '../../API/Styling/Styles';

class Result extends PureComponent {
  
  render() {
    
    const pokemonsRender = (
      <Row upOnLarge={3} upOnMedium={2} upOnSmall={1}>
        {this.props.pokemons.map((pokemon, id) =>
          <Column key={id} style={styles.column}>
            <Card style={styles.handCurser}
                  onClick={() => browserHistory.push("/pokemon/"+pokemon.name)}>
              <CardMedia
                overlay={
                  <CardTitle title={pokemon.name}
                  subtitle={"types : "+pokemon.types.map(type =>
                  type.type.name+" ")}
                  />
                }
              >
                <PockeFont font={pokemon.sprites.front_default} />
              </CardMedia>
            </Card>
          </Column>
        )}
      </Row>
    );
    
    return (
      <div>
        {this.props.isSearching ?
          <Loading /> : pokemonsRender
        }
      </div>
    )
  }
}

Result.propTypes = {
  isSearching: React.PropTypes.bool.isRequired,
  pokemons: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
    pokemons: state.pokemons,
  }
};

export default connect(mapStateToProps)(Result);