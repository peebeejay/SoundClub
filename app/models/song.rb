class Song < ActiveRecord::Base
  # has_attached_file :audio
  # validates_attachment_content_type :audio, content_type: /\Aimage\/.*\z/

  validates :title, :user_id, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, :content_type => [
    'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3',
    'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg',
    'audio/x-mpegaudio'
  ]

  belongs_to :artist,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id
end
