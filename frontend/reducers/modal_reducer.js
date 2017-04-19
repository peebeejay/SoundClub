import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions.js';
import { merge } from 'lodash';

const _initialModalStates = {
  loginForm: false,
  createUserForm: false
};

const ModalReducer = (state = _initialModalStates, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  // debugger
  switch(action.type) {
    case SHOW_MODAL:
      newState[action.modal_name] = true;
      return newState;
    case HIDE_MODAL:
      newState[action.modal_name] = false;
      return newState;

    //ADD TOGGLE MODAL ACTION;
    default:
      return state;
  }
};

export default ModalReducer;
