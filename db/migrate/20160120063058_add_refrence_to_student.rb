class AddRefrenceToStudent < ActiveRecord::Migration
  def change
     add_reference :stud, :user, index: true, foreign_key: true
  end
end
