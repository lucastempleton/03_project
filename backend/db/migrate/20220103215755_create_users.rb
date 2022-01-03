class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.integer :post_id
      t.integer :review_id
      t.string :name
    end
  end
end
