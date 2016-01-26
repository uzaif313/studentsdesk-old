class StudsController < ApplicationController

  def create

  end

  private
    def stud_params
      params.require(:stud).permit(:user_id,:class_name,:hobby)
    end
end
