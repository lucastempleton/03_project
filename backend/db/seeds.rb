puts "seeding"
Post.create(category: "Cars/Trucks", title: "BEST TRUCK 2022", img_url: nil, price: "$6000.00", city:"peoria", zipcode:"61234", description:"Ol' Reliable", contact_id: 1, detail_id: 1, user_id: 1)


Detail.create(cryptocurrency: true, delivery: false, reviewDisplay: false, make:"ford", model:"ford", size:"large", condition:"new")
Phone.create(showNumber: true, canCall: true, canText: true, number: "309-999-9999", extension: "no.1", name:"Sir Cornelius")
Contact.create(email:"@gmail.com", phone_id:1)
User.create(name: "lucas", contact_id: 1)

Review.create(user_id: 1, rating_text: "wants too much money", rating_number: 6)
puts "finished"