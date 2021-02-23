// Package import
import React from 'react';
import { render } from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

// Local import
import './styles/reset.scss';
import './styles/index.scss';
import App from './components/App';
import store from './store';

const rootReactElement = (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

const target = document.getElementById('root');

render(rootReactElement, target);



