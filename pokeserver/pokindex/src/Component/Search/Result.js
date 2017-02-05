/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Row, Column} from 'react-foundation';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { browserHistory} from 'react-router';

import PockeFont from '../Utils/PockeFont';

import styles from '../../API/Styling/Styles';

class Result extends PureComponent {
  
  render() {
    const spinningWell = (
      <div style={styles.loadingContainer}>
        <RefreshIndicator
          size={100}
          left={-50}
          top={0}
          status="loading"
          style={styles.loading}
        />
    </div>
    );
    
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
          spinningWell : pokemonsRender
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
    pokemons: state.pokemons,
  }
};

export default connect(mapStateToProps)(Result);