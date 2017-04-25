import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import ModalReducer from './modal_reducer';
import SongReducer from './song_reducer';
import NowPlayingReducer from './now_playing_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  modal: ModalReducer,
  songs: SongReducer,
  nowPlaying: NowPlayingReducer
});

export default rootReducer;
