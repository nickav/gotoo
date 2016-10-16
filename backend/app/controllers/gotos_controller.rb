class GotosController < ApplicationController
  before_action :find_goto, except: [:index, :create]
  before_action :find_user_by_id_or_nickname
  before_action :current_user_can_edit!, only: [:create, :update, :destroy]

  def index
    render json: @user.gotos
  end

  def create
    @user.gotos.create!(goto_params)
    @user.save!
    render json: @user.gotos
  end

  def update
    @goto.update!(goto_params)
    @user.save!
    render json: @user.gotos
  end

  def destroy
    @goto.destroy!
    @user.save!
    render json: @user.gotos
  end

  private

  def find_goto
    @goto = Goto.find(params[:id])
  end

  def goto_params
    params.require(:goto).permit(:nickname, :skill, :image, :name)
  end
end
