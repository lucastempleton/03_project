class CreateDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :details do |t|
      t.boolean :cryptocurrency
      t.boolean :delivery
      t.boolean :reviewDisplay
      t.string :make
      t.string :model
      t.string :size
      t.string :condition
    end
  end
end
