import RenderListings from "./sub-components/RenderListings"

export default function PostsList ({posts, changePostToRender, handleUpdate}){


    if (posts.length < 1){
        return(
            <h1>Loading....</h1>
        )
    }
    else
    return(
        <div className="product-list">
        {
    
            posts.map(p => {
                return <RenderListings key={p.id} post={p} changePostToRender={changePostToRender}/>
            })
        }

        </div>
    )
}