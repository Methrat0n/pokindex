import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory} from 'react-router'

import store from './API/Store/Store';
import routes from './API/Routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
  document.getElementById('root')
);
