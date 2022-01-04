import { useState, useEffect } from 'react';
import ChooseCategory from "./sub-components/ChooseCategory"

export default function Post (){

    return(
        <div>
            <form>
                <div className="category">Category</div>
                <ChooseCategory />
            </form>
        </div>
    )
}