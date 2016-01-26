class CreateStuds < ActiveRecord::Migration
  def change
    create_table :studs do |t|
        t.string :firstname
        t.string :lastname
        t.string :class_name
        t.string :hobby
        add_reference  :users, index: true, foreign_key: true
        t.timestamps null: false
    end
  end
end
