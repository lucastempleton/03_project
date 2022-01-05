puts "seeding"



d1 = Detail.create(cryptocurrency: true, delivery: false, reviewDisplay: false, make:"ford", model:"ford", size:"large", condition:"new")
ph1 = Phone.create(showNumber: true, canCall: true, canText: true, number: "309-999-9999", extension: "no.1", name:"Sir Cornelius")
c1 = Contact.create(email:"@gmail.com", phone:ph1)
u1 = User.create(name: "lucas", contact_id: 1)
p1 = Post.create(category: "Cars/Trucks", title: "BEST TRUCK 2022", img_url: nil, price: "$6000.00", city:"peoria", zipcode:"61234", description:"Ol' Reliable", contact: c1, detail: d1, user: u1, posted_at: Time.now)

r1 = Review.create(user: u1, rating_text: "wants too much money", rating_number: 6, created_at: Time.now)
puts "finished"