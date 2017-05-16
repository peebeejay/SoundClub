import * as SongAPIUtil from '../util/song_api_util';
import { receiveCurrentUser } from './session_actions.js';
import { receiveNowPlaying } from './now_playing_actions.js';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const REMOVE_SONGS = "REMOVE_SONGS";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const removeSong = (song) => ({
  type: REMOVE_SONG,
  song
});

export const removeSongs = () => ({
  type: REMOVE_SONGS
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SONG_ERRORS,
    errors
  };
};

export const fetchSongs = () => dispatch => {
  return SongAPIUtil.fetchSongs().then(
    (songs) => dispatch(receiveSongs(songs))
  );
};

export const fetchSongsByUser = (user_id) => dispatch => {
  return SongAPIUtil.fetchSongsByUser(user_id).then(
    (songs) => dispatch(receiveSongs(songs))
  );
};

export const fetchSong = (id) => dispatch => {
  return SongAPIUtil.fetchSong(id).then(
    (song) => dispatch(receiveSong(song))
  );
};

export const discoverSongs = () => dispatch => {
  return SongAPIUtil.discoverSongs().then(
    (songs) => dispatch(receiveSongs(songs))
  );
};

export const streamSongs = (id) => dispatch => {
  return SongAPIUtil.streamSongs(id).then(
    (songs) => dispatch(receiveSongs(songs))
  );
};

export const createSong = (song) => dispatch => {
  return SongAPIUtil.createSong(song).then(
    (song) => dispatch(receiveSong(song)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const deleteSong = id => dispatch => {
  return SongAPIUtil.deleteSong(id).then(
    (user) => dispatch(receiveCurrentUser(user))
  );
};

export const fetchRandomSong = () => dispatch => {
  return SongAPIUtil.fetchRandomSong().then(
    (song) => dispatch(receiveNowPlaying(song))
  );
};
