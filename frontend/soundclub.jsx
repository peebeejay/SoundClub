import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// REMOVE IN PRODUCTION
import { login } from './actions/session_actions';
import { showModal, hideModal } from './actions/modal_actions';
import { fetchSong, fetchSongs, discoverSongs, createSong, removeSong, removeSongs, searchSongs } from './actions/song_actions';
import { fetchUser } from './actions/user_actions';
// END REMOVE IN PRODUCTION

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
  window.fetchSong = fetchSong;
  window.fetchSongs = fetchSongs;
  window.discoverSongs = discoverSongs;
  window.createSong = createSong;
  window.removeSong = removeSong;
  window.removeSongs = removeSongs;
  window.fetchUser = fetchUser;
  window.searchSongs = searchSongs;
  // END REMOVE IN PRODUCTION //

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
