export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: 'api/comments',
    data: { comment }
  });
};

export const removeComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });
};
