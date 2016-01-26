class TeachersController < ApplicationController
  layout "teacher"
  before_action :authenticate_teacher!
  def index
    @students=Stud.all
  end

  def getGrade
    @grade=Grade.where(stud_id:params[:id])
    render json:@grade
  end

  def getAchievement
    @achievement=Achievement.where(stud_id:params[:id])
    render json:@achievement
  end

  def edit
  end
end
