class HomeController < ApplicationController
  def index
    render json: {
      current_user: current_user,
      twitter_omniauth_url: user_twitter_omniauth_authorize_url,
    }
  end
end
