export const createFollow = (follow) => {
  return $.ajax({
    method: "POST",
    url: 'api/follows',
    data: { follow }
  });
};

export const removeFollow = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${id}`
  });
};
