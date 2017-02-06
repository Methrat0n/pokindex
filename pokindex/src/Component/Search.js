/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';

import Results from './Search/Result';
import SearchBar from './Search/SearchBar';


class Search extends PureComponent {

  render() {
    return (<div>
      <SearchBar />
      <Results />
    </div>)
  }
}

export default Search;