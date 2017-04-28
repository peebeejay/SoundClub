import * as likeAPIUtil from '../util/like_api_util.js';
import { receiveSong } from './song_actions.js';

export const createLike = song_id => dispatch => {
  return likeAPIUtil.createLike(song_id).then(
    (song) => dispatch(receiveSong(song))
  );
};

export const removeLike = song_id => dispatch => {
  return likeAPIUtil.removeLike(song_id).then(
    (song) => dispatch(receiveSong(song))
  );
};
