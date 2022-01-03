class Post < ActiveRecord::Base
    belongs_to :user
    has_many :reviews, through: :users
end