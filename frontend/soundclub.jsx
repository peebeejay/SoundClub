import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { showModal, hideModal } from './actions/modal_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // REMOVE IN PRODUCTION //
  window.store = store;
  window.login = login;
  window.showModal = showModal;
  window.hideModal = hideModal;
  // END REMOVE IN PRODUCTION //
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
