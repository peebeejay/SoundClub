import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const REMOVE_SONGS = "REMOVE_SONGS";

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

export const fetchSongs = () => dispatch => {
  return SongAPIUtil.fetchSongs().then(
    (songs) => dispatch(receiveSongs(songs))
  ) ;
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

// May have to change in the future
export const createSong = (song) => dispatch => {
  return SongAPIUtil.createSong(song).then(
    (song) => dispatch(receiveSong(song))
  );
};
