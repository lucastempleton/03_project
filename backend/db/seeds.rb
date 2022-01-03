puts "seeding"
Post.create(title: "car", img_url: nil, description: "red", location:"peoria", phone_number: nil, user_id: 1)
Post.create(title: "truck", img_url: nil, description: "blue", location:"austin", phone_number: nil, user_id: 1)

User.create(name: "lucas")

Review.create(user_id: 1, rating_text: "wants too much money", rating_number: 6)