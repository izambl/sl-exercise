import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import 'normalize.css';
import './styles/app.scss';

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  </Provider>,
  document.getElementById('salesloft-app'),
);
