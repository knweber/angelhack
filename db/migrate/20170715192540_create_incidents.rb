class CreateIncidents < ActiveRecord::Migration[5.1]
  def change
    create_table :incidents do |t|
      t.string :name
      t.integer :age
      t.string :sex
      t.string :race
      t.string :month
      t.integer :day
      t.integer :year, null:false
      t.string :address
      t.string :city, null:false
      t.string :state, null:false
      t.string :cause
      t.string :dept
      t.string :armed
      t.float :lat
      t.float :lon
      t.timestamps
    end
  end
end
