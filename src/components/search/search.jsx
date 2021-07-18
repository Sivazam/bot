import React, { useState } from 'react'
import '../search/search.css'


function Search(props){


    return(

        <div>

            <input  
                    onChange = { props.handleChange }
                    className ="searchBox" 
                    type="search" 
                    placeholder = "Search here"
                    value = { props.value }
                   
            />

        </div>
                     
            

    )

}

export default Search;