class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string  :title
      t.string :img_url
      t.string :description
      t.string :location
      t.string :phone_number
      t.datetime :posted_at
      t.integer :user_id
      t.integer :review_id
    end
  end
end
