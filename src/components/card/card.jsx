import React , {useState }  from 'react';
import '../card/card.css'



function Card(props)
{
    // console.log("card:", props);
return(


    <div class = "card">
            {/* <h3 key ={props.data.id}>{props.data.name}</h3> 
             */}
            <img src = { `https://robohash.org/${props.data.id}?set=set1&size=180x180`}></img>
            <h2> {props.data.username}</h2>
            <p> {props.data.email}</p>
    </div>
    )
    
}


export default Card;
