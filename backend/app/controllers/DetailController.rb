class DetailController < ApplicationController
    get "/details" do
        Detail.all.to_json
    end
    get "/details/:id" do
        Detail.find(params[:id]).to_json
    end
    post "/details" do 
        Detail.create(cryptocurrency: params[:cryptocurrency], delivery: params[:delivery], reviewDisplay: params[:review_display], make: params[:make], model: params[:model], size: params[:size], condition: params[:condition])
    end
end