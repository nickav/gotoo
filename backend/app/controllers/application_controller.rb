class ApplicationController < ActionController::API
  def new_session_path(scope)
    new_user_session_path
  end

  def after_sign_in_path_for(resource)
    if resource.is_a?(User)
      return resource.profile_url
    end
    request.env['omniauth.origin'] || stored_location_for(resource) || root_path
  end

  protected
  def current_user_can_edit!
    raise ActionController::RoutingError.new('Not Found') unless authenticate_user!.nickname == params[:nickname]
  end
end
