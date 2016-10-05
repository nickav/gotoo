class GotosController < ApplicationController
  before_action :find_user_by_nickname
  before_action :current_user_can_edit!, only: [:create, :update, :destroy]

  def index
    render json: @user.gotos
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def find_user_by_nickname
    @user = User.find_by(nickname: params[:user_id])
  end
end
