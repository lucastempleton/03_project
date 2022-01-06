import RenderListings from "./sub-components/RenderListings"

export default function PostsList ({posts, changePostToRender}){
    if (posts.length <= 1){
        return(
            <h1>Loading....</h1>
        )
    }
    else
    return(
        <div className="product-list">
            {console.log(posts)}
        {
            
            posts.map(p => {
                {console.log(p)}
                <RenderListings key={p.id} post={p} />
            })
        }
        <h1>not working</h1>
        </div>
    )
}