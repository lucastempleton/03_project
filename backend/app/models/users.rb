class Post < ActiveRecord::Base
    belongs_to :review
    belongs_to :post
end