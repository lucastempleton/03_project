class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    get "/" do
        {message: "WorkingDatabase"}.to_json
    end
    
    
    
end