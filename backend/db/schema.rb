# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_04_222502) do

  create_table "contacts", force: :cascade do |t|
    t.string "phone_id"
    t.string "email"
  end

  create_table "details", force: :cascade do |t|
    t.boolean "cryptocurrency"
    t.boolean "delivery"
    t.boolean "reviewDisplay"
    t.string "make"
    t.string "model"
    t.string "size"
    t.string "condition"
  end

  create_table "phones", force: :cascade do |t|
    t.boolean "showNumber"
    t.boolean "canCall"
    t.boolean "canText"
    t.string "number"
    t.string "extension"
    t.string "name"
  end

  create_table "posts", force: :cascade do |t|
    t.string "img_url"
    t.string "category"
    t.string "title"
    t.string "price"
    t.string "city"
    t.string "zipcode"
    t.string "description"
    t.datetime "posted_at"
    t.integer "detail_id"
    t.integer "contact_id"
    t.integer "user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id"
    t.integer "rating_number"
    t.string "rating_text"
    t.datetime "created_at"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "contact_id"
  end

end
