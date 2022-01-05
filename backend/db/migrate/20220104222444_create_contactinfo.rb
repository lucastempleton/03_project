class CreateContactinfo < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.references :phone
      t.string :email
    end
  end
end
