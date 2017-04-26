class Comment < ActiveRecord::Base
  validates :user_id, :song_id, :body, presence: true

  belongs_to :song,
    class_name: 'Song',
    primary_key: :id,
    foreign_key: :song_id

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id
end
