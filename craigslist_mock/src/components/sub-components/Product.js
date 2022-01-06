 export default function Product({post}){
        return( 
        <div ClassName="product">
            <div ClassName="product_info">
                <p>{post.category}</p>
                <p>{post.title}</p>
                <p>{post.price}</p>
                <p>{post.city}</p>
                <p>{post.zipcode}</p>
                <p>{post.description}</p>
                <p ClassName="product_price">
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
                <div ClassName="contact_info">
                <p>{post.details.email}</p>
                <p>{post.details.phoneNumber.showNumber}</p>
                <p>{post.details.phoneNumber.canCall}</p>
                <p>{post.details.phoneNumber.canText}</p>
                <p>{post.details.phoneNumber.number}</p>
                <p>{post.details.phoneNumber.extension}</p>
                <p>{post.details.phoneNumber.name}</p>
                </div>
        </div>
        <img src="https://"alt=""/>
        <button>Buy</button>
        </div>
        );
        // function Deletion (product) {
        //     fetch(`http://localhost:9292/product/${product.id}`, {
        //       method: "DELETE"
        //     })
        //     deleteFromState(item)
        //   }
    } 
