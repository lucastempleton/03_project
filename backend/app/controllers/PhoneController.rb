class PhoneController < ApplicationController
    get "/phones" do
        Phone.all.to_json
    end
    get "/phones/:id" do
        Phone.find(params[:id]).to_json
    end
    post "/phones" do 
        Phone.create( showNumber: params[:show_number], canCall: params[:can_call], canText: params[:can_text], number: params[:number], extension: params[:extension], name: params[:name])
    end
end