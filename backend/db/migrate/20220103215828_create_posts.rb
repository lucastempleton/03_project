class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table do |t|
      t.string  :title
      t.string :img_url
      t.string :description
      t.string :location
      t.string :phone_number
      t.datetime :posted_at
    end
  end
end
