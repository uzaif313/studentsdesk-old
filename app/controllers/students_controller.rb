class StudentsController < ApplicationController
  layout "student"
  before_action :authenticate_student!
  def index
  end

  def show
  end

  def edit_detail
    # @stud=Stud.where(:user_id=>current_student.id)
    @stud=current_student.stud
    render "editdetail"
  end

  def update
    @sutd=current_student.stud
    if @sutd.update_attributes(studs_params)
      redirect_to students_edit_detail_path,flash: {success: "Updated Successfully "}
    else
      redirect_to students_edit_detail_path,flash:{alert:"Unable to Update Detail"}
    end
  end


  private
    def studs_params
      params.require(:stud).permit(:firstname,:lastname,:class_name,:hobby)
    end
end
