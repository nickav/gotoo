class Goto < ApplicationRecord
  belongs_to :user

  validates :skill, presence: true
  validates :nickname, presence: true
  validates :nickname, length: { maximum: 15 }

  before_save :fetch_twitter_data_if_needed

  def as_json(options={})
    super(options).tap do |json|
      json[:twitter_profile_url] = "https://twitter.com/#{nickname}"
    end
  end

  private

  def fetch_twitter_data_if_needed
    fetch_twitter_data if changes_include? 'nickname'
  end

  def fetch_twitter_data
    twitter_user = $twitter.user(nickname)
    self.name = twitter_user.name
    self.image = twitter_user.profile_image_url.to_s
  end

end
