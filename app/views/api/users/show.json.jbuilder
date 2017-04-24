json.partial! "api/users/user", user: @user

json.songs do
  json.array! @user.songs do |song|
    json.partial! "api/songs/song", song: song
  end
end
