import { useState, useEffect } from 'react';
import ChooseCategory from "./sub-components/ChooseCategory"
import PostingDetails from "./sub-components/PostingDetails"
import ContactInfo from "./sub-components/ConactInfo"

export default function Post (){
    const [newPost, setNewPost] = useState({
        category: "",
        title: "",
        city: "",
        zipcode: null,
        description: "",
        details: {
            cryptocurrency: false,
            delivery: false,
            reviewDisplay: false,
            make: "",
            model: "",
            size: "",
            condition: "",
        },
        contact_info:{
            email: "",
            phoneNumber: {
                showNumber: false,
                canCall: false,
                canText: false,
                number: "(309)999-9999",
                extension: null,
                name: ""
            }
        }
    })
    function handlePost(e){
        let key = e.target.name
        setNewPost({...newPost, [key]: e.target.value})
    }
    function handleDetails(e){
        let key = e.target.name
        setNewPost({...newPost, ['details']:{...newPost['details'], [key]: e.target.value}})
    }
    function handleContact(e){
        let key = e.target.name
        setNewPost({...newPost, ['contact_info']:{...newPost['contract_info'], [key]: e.target.value}})
    }
    function handlePhone(e){
        let key = e.target.name
        setNewPost({...newPost, ['contact_info']:{...newPost['contract_info'], ['phoneNumber']: {[key]: e.target.value}}})
    }

    return(
        <div>
            <form>
                <div className="category">Category</div>
                <ChooseCategory />
                <form>
                    <p>posting title</p>
                    <input type="text" name="title" onChange={(e) => handlePost(e)} value={newPost.title}></input>
                    <p>price</p>
                    <input></input>
                    <p>city or neighborhood</p>
                    <input type="text" name="city" onChange={(e) => handlePost(e)} value={newPost.city}></input>
                    <p>postal code</p>
                    <input type="text" name="zipcode" onChange={(e) => handlePost(e)} value={newPost.zipcode}></input>
                    <p>description</p>
                    <input type="text" name="description" onChange={(e) => handlePost(e)} value={newPost.description}></input>
                    <PostingDetails newPost={newPost} handlePost={handleDetails}/>
                    <ContactInfo newPost={newPost} handlePost={handleContact} handlePhone={handlePhone}/>
                    <label>
                        <input type="checkbox" />
                         ok for others to contact you about other services, products or commercial interests
                    </label>
                    <button type="submit">continue</button>
                </form>
            </form>
        </div>
    )
}