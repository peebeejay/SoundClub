import { RECEIVE_NOW_PLAYING } from '../actions/now_playing_actions';
import { merge } from 'lodash';

const NowPlayingReducer = (state = { song: {}, playing: false }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOW_PLAYING:
      let newState = merge({}, state);
        if ( state.song.id !== action.song.id ) {
          newState.song = action.song;
          newState.playing = true;
        } else if ( state.song.id === action.song.id ) {
          newState.playing = togglePlaying(newState.playing);
        }
        return newState;
    default:
      return state;
  }
};

export default NowPlayingReducer;

const togglePlaying = (playing) => {
  return playing ? false : true;
};
