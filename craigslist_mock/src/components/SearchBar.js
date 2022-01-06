import React from 'react'
import './SearchBar.css'
function SearchBar() {
    return (
       
        <div className="SearchBar">
            <img className="Search_logo"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsearch-vector&psig=AOvVaw0EBq73uIJf4Rfvsxa2M5VA&ust=1641441695154000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCnr_3cmfUCFQAAAAAdAAAAABAJ"/>
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
