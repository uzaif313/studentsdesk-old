class AchievementsController < ApplicationController
  before_action :authenticate_student!
  def index
    @achievements=current_student.stud.achievements
    render json:@achievements
  end

  def create
    @achievement=current_student.stud.achievements.create(achievement_params)
    if @achievement.errors.any?
      render json:@achievement.errors.to_a ,status: :not_found
    else
        index
    end
  end

  def destroy
    Achievement.find_by(:id=>params[:id]).destroy
    index
  end

  def update
    @achievement=Achievement.find_by(id:params[:id])
    @achievement.update_attributes(achievement_params)
    if @achievement.errors.any?
      render json:@achievement.errors.to_a ,status: :not_found
    else
        index
    end
  end

  private
    def achievement_params
      params.require(:achievement).permit(:title,:description,:achievment_date)
    end
end
