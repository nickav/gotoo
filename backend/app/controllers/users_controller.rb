class UsersController < ApplicationController
  before_action :find_user_by_id_or_nickname, except: [:current, :index]
  before_action :current_user_can_edit!, only: [:update, :destroy]

  def current
    render json: current_user
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
end
