class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
      t.timestamps null: false
    end

    add_index :likes, [:song_id, :user_id], unique: true
    add_index :likes, :user_id
    add_index :likes, :song_id
  end
end
