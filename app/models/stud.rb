class Stud < ActiveRecord::Base
  validates :firstname,:lastname,:class_name,:hobby,presence:true
  belongs_to :user
  has_many :grades
  has_many :achievements
end
