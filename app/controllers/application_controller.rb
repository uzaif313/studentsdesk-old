class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  layout :layout_by_resource

  def after_sign_in_path_for(resource)
    if resource.usertype == "teacher"
      return  teachers_url
    elsif resource.usertype == "student"
      return students_url
    end
  end

  protected


    def layout_by_resource
      if devise_controller? && resource_name == :student
        "student"
      elsif devise_controller? && resource_name == :teacher
        "teacher"
      else
        "application"
      end
    end

end
