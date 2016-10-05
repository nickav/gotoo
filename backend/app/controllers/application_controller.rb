class ApplicationController < ActionController::API
  def new_session_path(scope)
    new_user_session_path
  end
end
