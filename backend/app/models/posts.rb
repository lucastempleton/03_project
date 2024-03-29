class Post < ActiveRecord::Base
    belongs_to :user
    belongs_to :detail
    belongs_to :contact
    has_many :reviews, through: :users


    def nested_data
    
        nested_data = { 

            details: self.detail,
            user: self.user,
            contact: self.contact,
            phone: self.contact.phone

        }
    end
    def contact_info
        contact = self.contact
    end

end