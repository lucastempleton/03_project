class PostController < ApplicationController
    get "/posts" do
        post = Post.all
        post.to_json(include: :detail)
    end
    get "/posts/:id" do
        Post.find(params[:id]).to_json
    end
end