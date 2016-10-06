class GotosController < ApplicationController
  before_action :find_user_by_nickname
  before_action :find_goto, except: [:index]
  before_action :current_user_can_edit!, only: [:create, :update, :destroy]

  before_save :fetch_twitter_data

  def index
    render json: @user.gotos
  end

  def create
    @user.gotos.create(goto_params)
  end

  def update
    @goto.update(goto_params)
    @user.save
  end

  def destroy
    @goto.delete
    @user.save
  end

  private
  def find_user_by_nickname
    @user = User.find_by(nickname: params[:user_id])
  end

  def find_goto
    @goto = Goto.find(params[:id])
  end

  def goto_params
    params.require(:nickname, :craft).permit(:image, :name)
  end

  def fetch_twitter_data
    twitter_user = $twitter.user(params[:nickname])
    self.name = twitter_user.name
    self.image = twitter_user.profile_image_url.to_s
  end
end
