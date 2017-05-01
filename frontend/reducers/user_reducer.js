import { RECEIVE_USER} from '../actions/user_actions';
import { REMOVE_USER } from '../actions/user_actions';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return action.user;

    case REMOVE_USER:
      return {};
      
    default:
      return state;
  }
};

export default SessionReducer;
