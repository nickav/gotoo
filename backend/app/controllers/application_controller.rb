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
    @user = find_user_by_id_or_nickname unless @user.present?
    raise ActionController::RoutingError.new('Not Found') unless authenticate_user!.id == @user.id
  end

  def find_user_by_id_or_nickname
    id = params[:user_id] || params[:id]

    if id.to_i.to_s == id
      @user = User.find(id)
    else
      @user = User.find_by_nickname(id)
    end

    raise ActionController::RoutingError.new('User not found') unless @user
  end
end
