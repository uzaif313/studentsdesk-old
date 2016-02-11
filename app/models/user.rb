class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :stud
  validates :username,presence: true,length:{minimum:5},uniqueness:{case_sensitive: true}
  validates :email,presence: true,uniqueness:true
  validates :usertype,presence: true
  # self.abstract_class = true



end
