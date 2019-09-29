class CreateDestinations < ActiveRecord::Migration[6.0]
  def change
    create_table :destinations do |t|
      t.string :location 
      t.boolean :completed
      t.text :description
      t.string :category
    

      t.timestamps
    end
  end
end
