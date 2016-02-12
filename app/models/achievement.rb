class Achievement < ActiveRecord::Base
	belongs_to :stud
	validates :title,:description,:achievment_date,presence:true
end
