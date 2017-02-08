/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TitleBar from '../Component/Utils/TitleBar';

import theme from '../API/Styling/Theme';

class SearchEntryPoint extends PureComponent {
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <TitleBar>
                  {this.props.children}
                </TitleBar>
            </MuiThemeProvider>
        )
    }
}

export default SearchEntryPoint;