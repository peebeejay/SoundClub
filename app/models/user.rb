class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :display_name, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_attached_file :img, default_url: "http://www.atelier-eme.it/wp-content/uploads/2016/03/avatar-default.png"
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\Z/

  has_many :songs,
    class_name: 'Song',
    primary_key: :id,
    foreign_key: :user_id

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
