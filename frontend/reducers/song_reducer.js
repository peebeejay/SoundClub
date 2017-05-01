import { RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG, REMOVE_SONGS } from '../actions/song_actions';
import { merge } from 'lodash';

const SongReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);


  switch(action.type) {
    case RECEIVE_SONGS:
      return merge({}, action.songs);

    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;

    case REMOVE_SONG:
      delete newState[action.song.id];
      return newState;

    case REMOVE_SONGS:
      return {};

    default:
      return state;
  }
};

export default SongReducer;
