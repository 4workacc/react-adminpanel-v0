import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';

import initRed from './store/initRed';
import { createStore, Store } from 'redux'
import { Provider } from 'react-redux';

const store: Store <IRootState> = createStore( initRed );

ReactDOM.render(

  <Provider store = {store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
