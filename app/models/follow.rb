class Follow < ActiveRecord::Base
  validates :follower_id, :followee_id, presence: true
end
