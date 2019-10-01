class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :title
      t.boolean :completed
      t.text :description
      t.string :category
    

      t.timestamps
    end
  end
end
