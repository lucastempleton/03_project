export default function ProductList ({posts}){
    
    if (posts.length <= 1){
        return(
            <h1>Loading....</h1>
        )
    }
    else
    return(
        <div>
        {
            posts.each(post => console.log(post.title))
        }
        </div>
    )
}