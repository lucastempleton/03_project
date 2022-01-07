import React from 'react'

function SearchBar() {
    return (
       
        <div className="SearchBar">
            <input 
            className="search_input" type="text"/>  
        
        <div className="search_nav"></div>
         <div className="search_signin">
           <span className="search_signinLineOne"> Sign In </span>
         </div>
         
        </div>
    );
}

export default SearchBar
