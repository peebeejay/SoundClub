@songs.each do |song|
  json.set! song.id do
    json.partial! 'api/songs/song', song: song
    json.artist do
      json.partial! 'api/users/user', user: song.artist
    end
    json.comment_count song.comments.length
  end
end
