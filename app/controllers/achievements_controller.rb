class AchievementsController < ApplicationController
  before_action :authenticate_student!
  def index
    @achievements=Achievement.where(:stud_id=>Stud.find_by(:user_id=>current_student.id).id)
    render json:@achievements
  end

  def create
    params[:achievement][:stud_id]=Stud.find_by(:user_id=>current_student.id).id
    @achievement=Achievement.create(achievement_params)
    if @achievement.errors.any?
      render json:@achievement.errors.to_a ,status: :not_found
    else
        index
    end
    # raise params.inspect
  end

  def destroy
    Achievement.find_by(:id=>params[:id]).destroy
    index
  end

  def update
    @achievement=Achievement.find_by(id:params[:id])
    if @achievement.errors.any?
      render json:@achievement.errors.to_a ,status: :not_found
    else
        index
    end
  end

  private
    def achievement_params
      params.require(:achievement).permit(:title,:description,:achievment_date,:stud_id)
    end
end
