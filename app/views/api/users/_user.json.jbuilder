json.extract! user, :id, :username, :display_name, :location, :img
json.song_count user.songs.length

if user.followees.length.zero?
  json.followees nil
else
  json.followees do
    user.followees.each do |followee|
      json.set! followee.followee_id do
        json.extract! followee, :id
      end
    end
  end
end
