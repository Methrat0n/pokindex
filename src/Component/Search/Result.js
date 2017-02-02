/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Row, Column} from 'react-foundation';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { browserHistory} from 'react-router'

import styles from '../../API/Styling/Styles';

import {endSearch} from '../../API/Store/Actions';

class Result extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state= {
      pokemons: [],
    };
  }
  
  _pokemonsToState = () => {
    if(this.props.isSearching) {
      this.props.pokemons.then(findPokemon => {
        this.setState({pokemons: [findPokemon]});
        this.props.stopSearch();
      }).catch(error => {
        this.props.stopSearch();
        this.setState({pokemons: []});
      });
    }
  };
  
  render() {
    
    this._pokemonsToState();
    
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
    
    const pokemons = (
      <Row upOnLarge={3} upOnMedium={2} upOnSmall={1}>
        {this.state.pokemons.map((pokemon, id) =>
          <Column key={id} style={styles.column}>
            <Card style={styles.handCurser} onClick={() => browserHistory.push("/pokemon/"+pokemon.name)}>
              <CardMedia
                overlay={<CardTitle title={pokemon.name}
                subtitle={"types : "+pokemon.types.map(type =>
                  type.type.name+" ")} />}
              >
                <img src={pokemon.sprites.front_default} alt="placeholder"/>
              </CardMedia>
            </Card>
          </Column>
        )}
      </Row>
    );
    
    return (
      <div>
        {this.props.isSearching ?
          spinningWell : pokemons
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

const mapDispatchToProps = (dispatch) => {
  return {
    stopSearch: () => {
      dispatch(endSearch)
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Result);