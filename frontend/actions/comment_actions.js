import * as commentAPIUtil from '../util/comment_api_util.js';
import { receiveSong } from './song_actions.js';

export const createComment = comment => dispatch => {
  return commentAPIUtil.createComment(comment).then(
    (song) => dispatch(receiveSong(song))
  );
};

export const removeComment = id => dispatch => {
  return commentAPIUtil.removeComment(id).then(
    (song) => dispatch(receiveSong(song))
  );
};
