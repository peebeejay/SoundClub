class MakeChangesToUsers < ActiveRecord::Migration
  def change
    change_column :users, :display_name, :string, null: false
  end
end
