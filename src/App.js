import './App.css';
import React, { Component, useState, useEffect} from 'react';
import CardList from "./components/cardList/cardList";
import Search from './components/search/search'

function App()
{
  const [data, setdata]   = useState([]);
  const [Sword,setSword]  = useState("");
  const [inc,setinc]      = useState(0);
  

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setdata(users)
       );


}, [0]);
console.log(data);

const handleChange =() =>
{
  setinc((inc + 1));
  

  
}
const handledec =() =>
{
  setinc((inc - 1));
  

  
}



  const filter = (data.filter(d => d.username.toLowerCase().includes(Sword.toLocaleLowerCase())));

    return (
      <div className="App">

        <h1 className = "headerText"> Macro-Bot Shop </h1>
        

       {/* <span style = {{"margin":'20px'}}> <h1>{inc}</h1>
        <button onClick = { handleChange }>Update</button>
        <button onClick = { handledec }>dec</button>
        </span> */}

        <Search 
          handleChange   =    { (e) =>{ setSword(e.target.value) } } 
          value = { Sword}
        />

        <CardList data ={ filter }/> 

        <div className= "footer"></div>

        <h3> &#0169;Avis 2021</h3>
        
        
      </div> 

      
    )



  }




export default App;
