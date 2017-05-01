import { SHOW_MODAL, HIDE_MODAL, TOGGLE_MODAL } from '../actions/modal_actions.js';
import { merge } from 'lodash';

const _initialModalStates = {
  loginForm: false,
  createUserForm: false
};

const ModalReducer = (state = _initialModalStates, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case SHOW_MODAL:
      if (noFormsCurrentlyOpen(newState, action.modal_name))
        newState[action.modal_name] = true;
      return newState;

    case HIDE_MODAL:
      newState[action.modal_name] = false;
      return newState;

    case TOGGLE_MODAL:
      if (noFormsCurrentlyOpen(newState, action.modal_name))
        newState[action.modal_name] = newState[action.modal_name] === true ? false : true;
      return newState;

    default:
      return state;
  }
};

//Helper Functions
const noFormsCurrentlyOpen = (newState, modal_name) => {
  // Checks whether any other modals are currently open.
  // If so, don't make any additional modals visible
  for (let form in newState) {
    if (newState[form] === true && form !== modal_name)
      return false;
  }
  return true;
};

export default ModalReducer;
