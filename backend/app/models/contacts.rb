class Contact < ActiveRecord::Base
    has_many :posts
    belongs_to :phone
end