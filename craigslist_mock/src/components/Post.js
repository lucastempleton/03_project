import { useState, useEffect } from 'react';
import ChooseCategory from "./sub-components/ChooseCategory"
import PostingDetails from "./sub-components/PostingDetails"

export default function Post (){


    return(
        <div>
            <form>
                <div className="category">Category</div>
                <ChooseCategory />
                <form>
                    <p>posting title</p>
                    <input type="text"></input>
                    <p>price</p>
                    <input></input>
                    <p>city or neighborhood</p>
                    <input></input>
                    <p>postal code</p>
                    <input></input>
                    <p>description</p>
                    <input></input>
                    <PostingDetails/>
                </form>
            </form>
        </div>
    )
}