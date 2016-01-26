class GradesController < ApplicationController
  # layout "student", :only => [:show, :index,:new,:edit]
  layout false

  # skip_before_action :verify_authenticity_token

  before_action :authenticate_student!
  def index
    stud_id=Stud.find_by(:user_id=>current_student.id).id
    @grades=Grade.where(:stud_id=>stud_id)
    render json: @grades
  end


  def new
  end

  def create
        # raise params.inspect

        params[:grade][:stud_id]=Stud.find_by(:user_id=>current_student.id).id
        @grade=Grade.create(grade_params)
        if @grade.errors.any?
            render json:@grade.errors.to_a ,status: :not_found
        else
            index
        end
  end

  def show

  end

  def update
      # raise params.inspect
      @grade=Grade.find(params[:grade][:id])
      # params[:grade][:stud_id]=Stud.find_by(:user_id=>current_student.id).id
      @grade.update_attributes(grade_params)
      if @grade.errors.any?
        render json:@grade.errors.to_a ,status: :not_found
      else
        index
      end
  end

  def destroy
    @grade=Grade.find_by(:id=>params[:id])
    @grade.destroy()
    index
  end

private
  def grade_params
     params.require(:grade).permit(:subject, :grade,:examdate,:stud_id)
    # params.require(:newData).permit(:subject,:grade,:examdate,:stud_id)
  end
end
