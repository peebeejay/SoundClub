class AddIndexToFollow < ActiveRecord::Migration
  def change
    add_index :follows, [:follower_id, :followee_id], unique: true
  end
end
