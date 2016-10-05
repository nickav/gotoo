class HomeController < ApplicationController
  def index
    render json: {
      twitter_url: user_twitter_omniauth_authorize_url,
      user: current_user,
    }
  end
end
