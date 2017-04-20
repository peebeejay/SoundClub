import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import SongReducer from './song_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  songs: SongReducer
});

export default rootReducer;
