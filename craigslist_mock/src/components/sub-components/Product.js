 export default function product({post}){
        return( 
        <div ClassName="product">
            <div ClassName="product_info">
            
                <p>{post.title}</p>
                <p ClassName="product_price">
                    <small>$</small>
                    <strong>{post.price}</strong>
                    <p>{post.details.cryptocurrency}</p>
                </p>
                <div ClassName="product_rating">
                <p>{rating}</p>
                </div>
        </div>
        <img src="https://"alt=""/>
        <button>Buy</button>
        </div>
        );
    } 
