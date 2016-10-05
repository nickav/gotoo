class User < ActiveRecord::Base
  has_many :gotos

  devise :registerable,
         :recoverable,
         :rememberable,
         :trackable,
         :omniauthable,
         :omniauth_providers => [:twitter]

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session['devise.twitter_data']
        user.email = data['email'] if user.email.blank?
      end
    end
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.name = auth.info.name
      user.nickname = auth.info.nickname
      user.image = auth.info.image
    end
  end

  def as_json(options = {})
    super(options).tap do |json|
      json[:gotos] = gotos
    end
  end
end
