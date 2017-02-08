/**
 * Created by merlin on 07/02/17.
 */
import React, { PureComponent } from 'react';
import { browserHistory} from 'react-router';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import EventBar from './EventBar';
import BookMarkSideBar from './BookMarkSideBar';
import {openBookmarkBar} from '../../API/Store/Actions';

import styles from '../../API/Styling/Styles';
import {grey50} from 'material-ui/styles/colors';

class TitleBar extends PureComponent {
  
  returnToHome = () => {
    browserHistory.push("/");
  };
  
  render() {
    return (
      <div>
        <AppBar
          title={<span style={styles.handCurser}>Pokindex</span>}
          onTitleTouchTap={this.returnToHome}
          showMenuIconButton={false}
          iconElementRight={<IconButton onClick={this.props.openSideBar}><FontIcon
            className="material-icons" color={grey50}>
            bookmark</FontIcon>
          </IconButton>}
        />
        {this.props.children}
        <BookMarkSideBar />
        <EventBar />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openSideBar: () => {
      dispatch(openBookmarkBar);
    }
  }
};

export default connect(null,mapDispatchToProps)(TitleBar);