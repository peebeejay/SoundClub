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
export const createSong = (song) => {
  return $.ajax({
    method: "POST",
    url: 'api/songs',
    data: { song }
  });
};
