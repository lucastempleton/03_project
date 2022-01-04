

export default function Homepage(){
    const categories = ["Antiques", "Appliances", "Arts/Crafts", "Sporting Vehicles", "Auto Parts", "Auto Wheel/Tires", "Aviation", "Baby/Kid", "Barter", "Bicycyle Parts", "Boat Parts", "Books/Magazines", "Business/Commercial", "Cars/Trucks", "CDs/DVDs/VHS", "Cell Phones", "Clothing/Accesories", "Collectibles", "Computer Parts", "Computers", "Electronics", "Farm/Garden", "Free Stuff", "Furniture", "Garage/Moving Sale", "General Items", "Health/Beauty", "Heavy Equipment", "Household Items", "Jewelry", "Materials", "Motorcycles Parts", "Motorcycles/ Scooters", "Musical Instruments", "Photo/Video", "RVS", "Sporting Goods", "Tickets", "Tools", "Toys/Games", "Trailers", "Video Gaming", "Wanted"]
    return (
        <div classname="header">
            <h1>CraigslistMock</h1> 
            <img 
            ClassName="headerImage" 
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            />               
            <h2> Buy or sell easy</h2>
        </div>   
        
    );
    }
    // export default function product({title,image,price,rating}){
    //     return( 
    //     <div ClassName="product">
    //         <div ClassName="product_info">
    //             <p>{title}</p>
    //             <p ClassName="product_price">
    //                 <small>$</small>
    //                 <stong>{price}</stong>
    //             </p>
    //             <div ClassName="product_rating">
    //             <p>{rating}</p>
    //             </div>
    //     </div>
    //     <img src="https://"alt=""/>
    //     <button>Buy</button>
    //     </div>
    //     );
    // }