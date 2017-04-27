import * as followAPIUtil from '../util/follow_api_util.js';
import { receiveCurrentUser } from './session_actions.js';

export const createFollow = follow => dispatch => {
  return followAPIUtil.createFollow(follow).then(
    (user) => dispatch(receiveCurrentUser(user))
  );
};

export const removeFollow = follow => dispatch => {
  return followAPIUtil.removeFollow(follow).then(
    (user) => dispatch(receiveCurrentUser(user))
  );
};
