class AddAttachmentImgToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :users, :img
  end
end
