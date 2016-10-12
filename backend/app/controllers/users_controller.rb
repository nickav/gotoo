class UsersController < ApplicationController
  before_action :find_user_by_nickname, only: [:show, :update, :destroy]
  before_action :current_user_can_edit!, only: [:update, :destroy]

  def home
    render json: {
      current_user: current_user,
      twitter_omniauth_url: user_twitter_omniauth_authorize_url,
    }
  end

  def index
    render json: { users: User.all }
  end

  def show
    render json: @user.as_json.tap { |json| json[:gotos] = @user.gotos }
  end

  def update
    # TODO
  end

  def destroy
    # TODO
  end

  private
  def find_user_by_nickname
    @user = User.find_by(nickname: params[:nickname])
    raise ActionController::RoutingError.new('Not found') unless @user
  end
end
