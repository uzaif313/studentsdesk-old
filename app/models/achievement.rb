class Achievement < ActiveRecord::Base
  validates :title,:description,:achievment_date,presence:true
end
