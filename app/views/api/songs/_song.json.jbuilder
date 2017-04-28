json.extract! song, :id, :title, :user_id, :duration, :audio, :img, :created_at, :updated_at
json.comment_count song.comments.length
json.likes_count song.likings.length
json.likes current_user.likes.include?(song) if current_user

json.artist do
  json.extract! song.artist, :id, :username, :display_name, :location, :img
  json.song_count song.artist.songs.length
end
