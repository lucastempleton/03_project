class DetailController < ApplicationController
    get "/details" do
        Detail.all.to_json
    end
    get "/details/:id" do
        Detail.find(params[:id]).to_json
    end
end