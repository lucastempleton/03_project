import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function RenderListings ({post, changePostToRender, handleUpdate}){
    console.log('i am post in renderlistings:', post)
    const[showChange, setShowChange] = useState(false)
    function changeChange(){setShowChange(!showChange)}
    const [updates, setUpdates] = useState({title: "", city: "", price: ""})
    function handleUpdates(e){
        setUpdates({...updates, [e.target.name]: e.target.value})
    }
    function uploadToDB(e){
        
        fetch(`http://localhost:9292/posts/${post.id}`,{
            method: 'PATCH',
            headers:{"content-type": "application/json"},
            body: JSON.stringify(updates) 
        })
        .then(r=>r.json())
        .then(data => console.log(data))
        

    }
    return(
        <div>
        <div className="product-listing" onClick={()=>changePostToRender(post)}>
            <Link to="/postrender">
            <img src={post.img_url} alt={post.title} />
            </Link>
            <form>
                {showChange ? <input type="text" name="title" placeholder={post.title} onChange={(e) => handleUpdates(e)}value={updates.title}/>: <h1>{post.title}</h1>}
                {showChange ? <input type="text" name="city" placeholder={post.city} onChange={(e) => handleUpdates(e)}value={updates.city}/>: <h2>{post.city}</h2>}
                {showChange ? <input type="text" name="price" placeholder={post.price} onChange={(e) => handleUpdates(e)}value={updates.price}/>: <h3>{post.price}</h3>}
                {showChange ? <input type="submit" onClick={(e)=>uploadToDB(e)} value="CONFIRM"/> : null}
            </form>
        </div>
        <button onClick={()=>changeChange()}>update</button>
        </div>
    )
}