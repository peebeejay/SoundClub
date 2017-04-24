export const RECEIVE_NOW_PLAYING = "RECEIVE_NOW_PLAYING";


export const receiveNowPlaying = (song) => ({
  type: RECEIVE_NOW_PLAYING,
  song
});
