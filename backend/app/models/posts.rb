class Post < ActiveRecord::Base
    has_many :users
    has_many :reviews, through: :users
end