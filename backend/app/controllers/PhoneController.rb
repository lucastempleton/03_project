class PhoneController < ApplicationController
    get "/phones" do
        Phone.all.to_json
    end
    get "/phones/:id" do
        Phone.find(params[:id]).to_json
    end
end