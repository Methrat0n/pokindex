/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';

import Results from './Search/Result';
import SearchBar from './Search/SearchBar';

class Search extends PureComponent {

    constructor() {
        super();
        this.state = {
            results: [],
        }
    }

    render() {
        return (<div>
            <SearchBar/>
            <Results pokemons={this.state.results}/>
        </div>)
    }
}

export default Search;