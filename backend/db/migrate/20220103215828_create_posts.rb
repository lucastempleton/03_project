class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table do |t|
      t.integer :post_id
      t.string  :title
      t.datetime :posted_at
  end
end
