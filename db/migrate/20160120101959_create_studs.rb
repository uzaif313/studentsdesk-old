class CreateStuds < ActiveRecord::Migration
  def change
    create_table :studs do |t|
        t.string :firstname
        t.string :lastname
        t.string :class_name
        t.string :hobby
        t.timestamps null: false
    end
  end
end
