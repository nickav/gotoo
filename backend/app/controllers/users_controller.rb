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
    # TODO
  end

  def destroy
    # TODO
  end

  private
  def find_user_by_nickname
    @user = User.find_by(nickname: params[:nickname])
  end
end
