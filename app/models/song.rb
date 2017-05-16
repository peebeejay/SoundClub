class Song < ActiveRecord::Base
  # has_attached_file :audio
  # validates_attachment_content_type :audio, content_type: /\Aimage\/.*\z/

  # before_validation :extract_metadata

  validates :title, :user_id, :audio, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, :content_type => [
    'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3',
    'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg',
    'audio/x-mpegaudio'
  ]

  has_attached_file :img
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\Z/
  validates_attachment_presence :img

  belongs_to :artist,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id


  # Comments Associations
  has_many :comments,
    class_name: 'Comment',
    primary_key: :id,
    foreign_key: :song_id

  has_many :commenters,
    through: :comments,
    source: :user


  # Likes Associations
  has_many :likings,
    class_name: 'Like',
    primary_key: :id,
    foreign_key: :song_id

  has_many :likes,
    through: :likings,
    source: :user


  ###From EricMoy Songcloud
  def extract_metadata
    return unless (self.waveform.empty? || self.duration.zero?)
    path = audio.queued_for_write[:original] &&
           audio.queued_for_write[:original].path ||
           audio.url

    open(path) do |url_file|
      io_command = "php vendor/assets/php-waveform-json.php #{url_file.path}"
      # IO.popen(io_command) do |io|
      #   self.waveform = JSON.parse(io.read)['left']
      # end

      open_opts = { :encoding => 'utf-8' }
      Mp3Info.open(url_file.path, open_opts) do |mp3info|
        self.duration = mp3info.length.to_i
      end
    end
  end
end
