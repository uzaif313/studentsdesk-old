class SessionsController < Devise::SessionsController
    def create
      type=params.keys[2]
        @user = User.find_by_email(params[type][:email])
        if @user != nil
          if !@user || @user.usertype!=type
            flash[:danger] = " Access denied."
              redirect_to root_url
          else
            super
          end
        else
            flash[:warning] = "Incorrect email or password"
            redirect_to root_url
        end
    end
    def after_sign_in_path_for(resource)
      if resource.usertype == "teacher"
        return  teachers_url
      elsif resource.usertype == "student"
        return students_url
      end
    end

    def after_sign_out_path_for(resource)
        if resource == :student
          puts "Student Sign Out"
          return student_session_url
        elsif resource == :teacher
          return teacher_session_url
        end
    end

    def destroy
      super
    end
  end
