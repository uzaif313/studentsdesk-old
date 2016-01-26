class CreateAchievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
      t.string :title
      t.string :description
      t.date :achievment_date
      t.references :stud, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
