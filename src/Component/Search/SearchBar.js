/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import {Row, Column} from 'react-foundation';
import Paper from 'material-ui/Paper';

import {beginSearch,endSearch,searchPokemons} from '../../API/Store/Actions';

import styles from '../../API/Styling/Styles';

class SearchBar extends PureComponent {
  render() {
    return (
      <Row>
        <Column centerOnSmall style={styles.columnSearchBar}>
          <Paper zDepth={4}>
            <TextField fullWidth={true} style={styles.searchBar}
              onChange={(e) => this.props.search(e,this.props.isSearching)}>
            </TextField>
          </Paper>
        </Column>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      search: (event, isSearching) => {
          const newValue = event.target.value;
          
          if(newValue === "")
            dispatch(endSearch);
          else {
            if(!isSearching) {
              dispatch(beginSearch);
            }
            
            dispatch(searchPokemons(newValue));
          }
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

//import FontIcon from 'material-ui/FontIcon';
//<FontIcon className="material-icons">search</FontIcon>