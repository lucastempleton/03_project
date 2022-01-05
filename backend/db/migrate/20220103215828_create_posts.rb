class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :img_url
      t.string :category
      t.string  :title
      t.string :price
      t.string :city
      t.string :zipcode
      t.string :description
      t.datetime :posted_at

      t.references :detail
      t.references :contact
      t.references :user
      
    end
  end
end
