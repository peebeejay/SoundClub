class AddAttachmentImgToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :songs, :img
  end
end
