import * as UserAPIUtil from '../util/user_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = () => ({
  type: REMOVE_USER
});

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(
    (user) => dispatch(receiveUser(user))
  );
};
