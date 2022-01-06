import React from "react";

export default function Homepage(){
    const categories = ["Antiques", "Appliances", "Arts/Crafts", "Sporting Vehicles", "Auto Parts", "Auto Wheel/Tires", "Aviation", "Baby/Kid", "Barter", "Bicycyle Parts", "Boat Parts", "Books/Magazines", "Business/Commercial", "Cars/Trucks", "CDs/DVDs/VHS", "Cell Phones", "Clothing/Accesories", "Collectibles", "Computer Parts", "Computers", "Electronics", "Farm/Garden", "Free Stuff", "Furniture", "Garage/Moving Sale", "General Items", "Health/Beauty", "Heavy Equipment", "Household Items", "Jewelry", "Materials", "Motorcycles Parts", "Motorcycles/ Scooters", "Musical Instruments", "Photo/Video", "RVS", "Sporting Goods", "Tickets", "Tools", "Toys/Games", "Trailers", "Video Gaming", "Wanted"]
    return (
        <div classname="header">
        {/* <nav>
          <link to ="/"> Home </link>
          <link to ="/postlist"> Listings </link>
          <link to ="/post"> Create a new post </link>
        </nav> */}
            <h1>Shoply</h1> 
            <h2> Where local sellers meet local buyers</h2>
            <img 
            className="headerImage" 
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            /> 

        </div>
       
    );
    }
   

