class UserController < ApplicationController
    get "/users" do
        User.all.to_json
    end
    get "/users/:id" do
        User.find(params[:id]).to_json
    end
end