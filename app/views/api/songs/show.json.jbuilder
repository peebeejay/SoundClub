json.partial! "api/songs/song", song: @song

json.comments do
  # comments = @song.comments.sort_by { |comment| comment.created_at }
  comments = @song.comments.order(created_at: :desc)
  json.array! comments do |comment|
    json.partial! "api/comments/comment", comment: comment
  end
end

json.commenters do
  @song.commenters.uniq.each do |commenter|
    json.set! commenter.id do
      json.partial! "api/users/user", user: commenter
    end
  end
end
