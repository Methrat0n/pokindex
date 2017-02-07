/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Row, Column} from 'react-foundation';

import Loading from '../Utils/Loading';
import PokemonMiniature from '../Search/PokemonMiniature';

import styles from '../../API/Styling/Styles';

class Result extends PureComponent {
  
  render() {
    return (
      <div>
        {this.props.isSearching ?
          <Loading /> :
          <Row upOnLarge={3} upOnMedium={2} upOnSmall={1}>
            {this.props.pokemons.map((pokemon, id) =>
              <Column key={id} style={styles.column}>
                <PokemonMiniature pokemon={pokemon}/>
              </Column>
            )}
          </Row>
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