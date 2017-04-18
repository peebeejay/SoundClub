import * as APIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const signUp = (user) => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveErrors(err)));
};

export const login = (user) => dispatch => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveErrors(err)));
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)),
          err => dispatch(receiveErrors(err)));
};
