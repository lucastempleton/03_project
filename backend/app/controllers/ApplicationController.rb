class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    get "/" do
        {message: "WorkingDatabase"}.to_json
    end
    get "/posts" do
        Post.all.to_json
    end
    get "/posts/:id" do
        Post.find(params[:id]).to_json
    end
    get "/reviews" do
        Review.all.to_json
    end
    get "/reviews/:id" do
        Review.find(params[:id]).to_json
    end
    get "/users" do
        User.all.to_json
    end
    get "/users/:id" do
        User.find(params[:id]).to_json
    end
end