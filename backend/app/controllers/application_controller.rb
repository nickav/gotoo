class ApplicationController < ActionController::API
  def new_session_path(scope)
    new_user_session_path
  end

  protected
  def current_user_can_edit!
    raise ActionController::RoutingError.new('Not Found') unless authenticate_user!.nickname == params[:nickname]
  end
end
