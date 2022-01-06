import { Link } from 'react-router-dom'

export default function RenderListings ({post, changePostToRender}){
    console.log('i am post in renderlistings:', post)
    return(
        <div className="product-listing" onClick={()=>changePostToRender(post)}>
            <Link to="/postrender">
            <img src={post.img_url} alt={post.title} />
            <h1>{post.title}</h1>
            <h2>{post.city}</h2>
            </Link>
        </div>
    )
}