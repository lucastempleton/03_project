export default function PostsList ({posts, changePostToRender}){
    console.log(posts)
    if (posts.length <= 1){
        return(
            <h1>Loading....</h1>
        )
    }
    else
    return(
        <div className="product-list">
        {
            posts.map(post => {
                <div className="product-listing">
                    <a href="/postrender" onClick={changePostToRender(post)}>
                    <img src={post.img_url} alt={post.title} />
                    <h1>{post.title}</h1>
                    <h2>{post.city}</h2>
                    </a>
                </div>
            })
        }
        </div>
    )
}