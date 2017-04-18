class User < ActiveRecord::Base
  attr_reader :password

  validates :display_name, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user
    @user.is_password(password) ? @user : nil
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.reset_session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
