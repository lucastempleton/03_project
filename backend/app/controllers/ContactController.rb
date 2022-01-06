class ContactController < ApplicationController
    get "/contacts" do
        contact = Contact.all
        contact.to_json
    end
    get "/contacts/:id" do
        Contact.find(params[:id]).to_json
    end
    post "/contacts" do 
        Contact.create( email: params[:email], phone_id: params[:phone_id])
    end
end