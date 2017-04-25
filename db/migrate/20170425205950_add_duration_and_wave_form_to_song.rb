class AddDurationAndWaveFormToSong < ActiveRecord::Migration
  def change
    add_column :songs, :waveform, :float, default: [], array: true
    add_column :songs, :duration, :integer, default: 0, null: false
  end
end
