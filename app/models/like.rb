class Like < ActiveRecord::Base
  validates :user_id, :song_id, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :song,
    class_name: 'Song',
    primary_key: :id,
    foreign_key: :song_id
end
