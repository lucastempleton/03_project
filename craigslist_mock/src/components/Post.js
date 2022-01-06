import { useState, useEffect } from 'react';
import ChooseCategory from "./sub-components/ChooseCategory"
import PostingDetails from "./sub-components/PostingDetails"
import ContactInfo from "./sub-components/ConactInfo"

export default function Post ({posts}){
    let idNumber = posts.length
    const [newDetails, setNewDetails] = useState({
        id: idNumber,
        cryptocurrency: false,
        delivery: false,
        reviewDisplay: false,
        make: "",
        model: "",
        size: "",
        condition: "",
    });
    const [newPhone, setNewPhone] = useState({
        id: idNumber,
        showNumber: false,
        canCall: false,
        canText: false,
        number: "",
        extension: "",
        name: "",
    });
    const [newContact, setNewContact] = useState({
        id: idNumber,
        email: "",
        phone_id: newPhone.id
    })
    const [newPost, setNewPost] = useState({
        id: idNumber,
        category: "",
        title: "",
        price: "",
        city: "",
        zipcode: "",
        description: "",
        detail_id: newDetails.id,
        contact_id: newContact.id,
    })
    function handlePost(e){
        let key = e.target.name
        setNewPost({...newPost, [key]: e.target.value})
    }
    function handleDetails(e){
        let key = e.target.name
        setNewDetails({...newDetails, [key]: e.target.value})
    }
    function handleContact(e){
        let key = e.target.name
        setNewContact({...newContact, [key]: e.target.value})
    }
    function handlePhone(e){
        let key = e.target.name
        setNewPhone({...newPhone, [key]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()

        console.log(newPost)
        console.log(newDetails)
        console.log(newPhone)
        console.log(newContact)
        fetch("http://localhost:9292/posts",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(newPost)
        })
        .then(r=>r.json())
        .then(log => console.log(log))
        fetch("http://localhost:9292/phones",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(newPhone)
        })
        .then(r=>r.json())
        .then(log => console.log(log))
        fetch("http://localhost:9292/contacts",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(newContact)
        })
        .then(r=>r.json())
        .then(log => console.log(log))
        fetch("http://localhost:9292/details",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(newDetails)
        })
        .then(r=>r.json())
        .then(log => console.log(log))

    
    }

    return(
        <div>
            <form>
                <div className="category">Category</div>
                <ChooseCategory />
                
                    <p>posting title</p>
                    <input type="text" name="title" onChange={(e) => handlePost(e)} value={newPost.title}></input>
                    <p>price</p>
                    <input type="text" name="price" onChange={(e) => handlePost(e)} value={newPost.price}></input>
                    <p>city or neighborhood</p>
                    <input type="text" name="city" onChange={(e) => handlePost(e)} value={newPost.city}></input>
                    <p>postal code</p>
                    <input type="text" name="zipcode" onChange={(e) => handlePost(e)} value={newPost.zipcode}></input>
                    <p>description</p>
                    <input type="text" name="description" onChange={(e) => handlePost(e)} value={newPost.description}></input>
                    <PostingDetails newDetails={newDetails} handlePost={handleDetails}/>
                    <ContactInfo newPhone={newPhone} newContact = {newContact} handleContact={handleContact} handlePhone={handlePhone}/>
                    <label>
                        <input type="checkbox" />
                         ok for others to contact you about other services, products or commercial interests
                    </label>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>continue</button>
                
            </form>
        </div>
    )
}