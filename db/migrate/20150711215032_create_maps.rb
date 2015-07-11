class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :organization
      t.text :address
      t.string :phone
      t.string :website
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
