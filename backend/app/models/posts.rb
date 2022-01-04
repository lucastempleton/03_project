class Post < ActiveRecord::Base
    belongs_to :user
    belongs_to :detail
    belongs_to :contact
    has_many :reviews, through: :users
end