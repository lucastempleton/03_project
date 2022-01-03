class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :rating_number
      t.string :rating_text
      t.datetime :created_at
    end
  end
end
