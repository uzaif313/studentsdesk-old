class RegistrationsController < Devise::RegistrationsController
 require "json"
 before_filter :configure_sign_up_params, only: [:create]
 before_filter :configure_account_update_params, only: [:update]


  def configure_sign_up_params
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username,:usertype, :email, :password,:password_confirmation) }
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:username,:usertype, :email, :password,:password_confirmation,:current_password) }
  end

  # The path used after sign up.
  

  def after_sign_up_path_for(resource)
      if resource.usertype =="teacher"

       return teachers_url
      elsif resource.usertype == "student"
         @id=resource.id
         params[:student][:stud][:user_id]=@id
         #raise params.inspect
    @st=Stud.new(params[:student].require(:stud).permit(:class_name,:hobby,:user_id,:firstname,:lastname)
)
         @st.save
         return students_url
    end

  end

   def after_update_path_for(resource)
      if resource.usertype == "student"

        return students_url

        elsif resource.usertype == "teacher"
          
        return teachers_url        
      end

   end

  # def stud_params id
  #   params[:student][:user_id]=id
  #   params[:student].require(:stud).permit(:class_name,:hobby,:user_id,:firstname,:lastm)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
