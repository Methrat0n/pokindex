/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { browserHistory} from 'react-router'

import theme from '../API/Styling/Theme';
import styles from '../API/Styling/Styles';
import {grey50} from 'material-ui/styles/colors';

class SearchEntryPoint extends PureComponent {

    returnToHome = () => {
        browserHistory.push("/");
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <AppBar
                        title={<span style={styles.handCurser}>Pokindex</span>}
                        onTitleTouchTap={this.returnToHome}
                        showMenuIconButton={false}
                        iconElementRight={<IconButton><FontIcon
                          className="material-icons" color={grey50}>
                          bookmark</FontIcon>
                        </IconButton>}
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default SearchEntryPoint;