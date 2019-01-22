import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Sayer from './containers/Sayer';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Sayer />
  </Provider>,
  document.getElementById('root')
);

withRouter(connect(null, null)(Sayer));

serviceWorker.register();
