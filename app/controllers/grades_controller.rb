class GradesController < ApplicationController
  # layout "student", :only => [:show, :index,:new,:edit]
  layout false

  # skip_before_action :verify_authenticity_token

  before_action :authenticate_student!
  def index
    @grades=current_student.stud.grades
    render json: @grades
  end


  def new
  end

  def create
        @grade=current_student.stud.grades.create(grade_params)
        if @grade.errors.any?
            render json:@grade.errors.to_a ,status: :not_found
        else
            index
        end
  end

  def show
  end

  def update
      @grade=Grade.find(params[:grade][:id])
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
     params.require(:grade).permit(:subject, :grade,:examdate)
  end
end
