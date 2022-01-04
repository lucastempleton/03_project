class CreatePhonenumber < ActiveRecord::Migration[6.1]
  def change
    create_table :phones do |t|
      t.boolean :showNumber
      t.boolean :canCall
      t.boolean :canText
      t.string :number
      t.string :extension
      t.string :name
    end
  end
end
