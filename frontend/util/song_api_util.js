export const fetchSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/${id}`
  });
};

export const fetchSongs = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs"
  });
};

export const discoverSongs = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs/discover"
  });
};

// May have to change in the future
export const createSong = (formData) => {
  return $.ajax({
    method: "POST",
    url: 'api/songs',
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData
  });
};
