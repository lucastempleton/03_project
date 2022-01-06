 export default function PostRender({post}){
        console.log('i am being passed into postrender', post)
        function deletion () {
            fetch(`http://localhost:9292/posts/${post.id}`, {
              method: "DELETE"
            })
            .then(r=>r.json())
            .then(data => console.log(data))
            //route to refresh/return to the product listing page
          }
        if (Object.keys(post).length === 0) {
          return(
              <h1>Loading....</h1>
            )
        }
        else
        return( 
        <div className="product">
            <div ClassName="product_info">
                <p>{post.category}</p>
                <p>{post.title}</p>
                <p>{post.price}</p>
                <p>{post.city}</p>
                <p>{post.zipcode}</p>
                <p>{post.description}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{post.price}</strong>
                    <p>{post.nested_data.details.cryptocurrency}</p>
                    <p>{post.nested_data.details.delivery}</p>
                    <p>{post.nested_data.details.reviewDisplay}</p>
                    <p>{post.nested_data.details.make}</p>
                    <p>{post.nested_data.details.model}</p>
                    <p>{post.nested_data.details.size}</p>
                    <p>{post.nested_data.details.condition}</p>
                </p>
                <div className="contact_info">
                  <p>email:</p>
                <p>{post.nested_data.contact.email}</p>
                <p>{post.nested_data.phone.showNumber}</p>
                <p>{post.nested_data.phone.canCall}</p>
                <p>{post.nested_data.phone.canText}</p>
                <p>{post.nested_data.phone.number}</p>
                <p>{post.nested_data.phone.extension}</p>
                <p>{post.nested_data.phone.name}</p>
                </div>
        </div>
        <img src={post.img_url} alt=""/>
        <button onClick={()=>deletion()}><a href='/'>Buy</a></button>
        </div>
        );
    } 
