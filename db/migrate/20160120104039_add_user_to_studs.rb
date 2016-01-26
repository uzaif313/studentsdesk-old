class AddUserToStuds < ActiveRecord::Migration
  def change
     add_reference :studs, :user, index: true, foreign_key: true
  end
end
