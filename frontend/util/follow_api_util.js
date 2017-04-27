export const createFollow = (follow) => {
  return $.ajax({
    method: "POST",
    url: 'api/follows',
    data: { follow }
  });
};


//TODO: NEED TO DO MAD WORK ON THIS ONE.
export const removeFollow = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${id}`
  });
};
