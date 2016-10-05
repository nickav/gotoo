class UsersController < ApplicationController
  before_action :find_user_by_nickname, only: [:show, :update, :destroy]
  before_action :current_user_can_edit!, only: [:update, :destroy]

  def index
    render json: { users: User.all }
  end

  def show
    render json: @user
  end

  def update
  end

  def destroy
  end

  private
  def find_user_by_nickname
    @user = User.where(nickname: params[:nickname])
  end

  def current_user_can_edit!
    raise ActionController::RoutingError.new('Not Found') unless authenticate_user!.nickname == params[:nickname]
  end
end
