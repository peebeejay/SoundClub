export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};

export const signUpForm = (formData) => {
  return $.ajax({
    method: "POST",
    url: 'api/users',
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session"
  });
};
