class CreateContactinfo < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :phone_id
      t.string :email
    end
  end
end
