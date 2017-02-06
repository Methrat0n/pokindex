/**
 * Created by merlin on 06/02/17.
 */
import React, { PureComponent } from 'react';

import RefreshIndicator from 'material-ui/RefreshIndicator';

import styles from '../../API/Styling/Styles';

class Loading extends PureComponent {
  render() {
    return (
    <div style={styles.loadingContainer}>
      <RefreshIndicator
        size={100}
        left={-50}
        top={0}
        status="loading"
        style={styles.loading}
      />
    </div>
    )
  }
}

export default Loading;