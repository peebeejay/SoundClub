class Like < ActiveRecord::Base
  validates :user_id, :song_id, presence: true
end
