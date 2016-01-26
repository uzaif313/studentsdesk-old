class Grade < ActiveRecord::Base
  belongs_to :stud
  validates :subject,:grade,:examdate,presence:true
end
