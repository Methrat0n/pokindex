/**
 * Created by merlin on 07/02/17.
 */
import React, { PureComponent } from 'react';
import { browserHistory} from 'react-router';

import AppBar from 'material-ui/AppBar';
import EventBar from './EventBar';
import BookMarkSideBar from './BookMarkSideBar';
import ButtonBar from './ButtonBar';
import ConnectionDialog from './ConnectionDialog';

import styles from '../../API/Styling/Styles';

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
          iconElementRight={<ButtonBar />}
        />
        {this.props.children}
        <BookMarkSideBar />
        <EventBar />
        <ConnectionDialog />
      </div>
    )
  }
}

export default TitleBar;