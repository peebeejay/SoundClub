export const createLike = (song_id) =>  {
  return $.ajax({
    method: "POST",
    url: `api/songs/${song_id}/likes`
  });
};

export const removeLike = (song_id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/songs/${song_id}/likes`
  });
};
