json.extract! song, :id, :title, :user_id, :duration, :audio, :img, :created_at, :updated_at

json.artist do
  json.extract! song.artist, :id, :username, :display_name, :location, :img
  json.song_count song.artist.songs.length

end

# json.artist2 do
#   json.partial! 'api/users/user', user: song.artist
# end

# URL for Paperclip,
# extract relevant attributes in jbuilder
# Storing Seed Data somewhere online (AWS)
