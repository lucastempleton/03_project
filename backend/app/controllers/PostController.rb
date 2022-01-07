class PostController < ApplicationController
    get "/posts" do
        post = Post.all
        post.to_json(methods: :nested_data)
        # post.to_json(include: :detail, include: :user)
    end
    get "/posts/:id" do
        Post.find(params[:id]).to_json
    end
    patch "/posts/:id" do
        post = Post.find(params[:id])
        post.update(title: params[:title], price: params[:price,], city: params[:city])
    end


    post "/posts" do 

        # params -> {
        #     id: posts.length + 2,
        #     category: "",
        #     title: "",
        #     price: "",
        #     city: "",
        #     zipcode: "",
        #     description: "",
        #     detail_id: newDetails.id,
        #     contact_id: newContact.id,
        # }

        # binding.pry
        ## THEN TYPE params in the Pry Session

        Post.create( contact_id: params[:contact_id], category: params[:category], title: params[:title], price: params[:price], city: params[:city], zipcode: params[:zipcode], description: params[:description], detail_id: params[:detail_id], posted_at: Time.now, img_url: params[:img_url], user_id: 1)

    end
    delete "/posts/:id" do 
        post = Post.find(params[:id])
        post.destroy
    end

end