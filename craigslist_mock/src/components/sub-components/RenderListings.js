export default function RenderListings ({post}){
    return(
        <div className="product-listing">
            {/* <a href="/postrender" onClick={()=>changePostToRender(post)}> */}
            <img src={post.img_url} alt={post.title} />
            <h1>{post.title}</h1>
            <h2>{post.city}</h2>

            {/* </a> */}
        </div>
    )
}