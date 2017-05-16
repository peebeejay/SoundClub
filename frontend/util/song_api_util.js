export const fetchSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/${id}`
  });
};

export const fetchRandomSong = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs/random"
  })
}

export const fetchSongs = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs"
  });
};

export const fetchSongsByUser = (user_id) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/user/${user_id}`
  });
};

export const discoverSongs = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs/discover"
  });
};

export const streamSongs = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/stream/${id}`
  });
};

export const deleteSong = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/songs/${id}`
  });
};

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
