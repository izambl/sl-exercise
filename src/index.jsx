import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import 'normalize.css';
import './styles/app.scss';

import { Footer, Header, Main } from './components/layout';

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>,
  document.getElementById('salesloft-app'),
);
