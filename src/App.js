import './App.css';
import React, { Component, useState, useEffect} from 'react';
import CardList from "./components/cardList/cardList";
import Search from './components/search/search'

function App()
{
  const [data, setdata] = useState([]);
  const [Sword,setSword] = useState("");
 

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setdata(users)
       );
}, []);



  const filter = (data.filter(d => d.username.toLowerCase().includes(Sword.toLocaleLowerCase())));

    return (
      <div className="App">

        <h1 className = "headerText"> Macro-Bot Shop </h1>

        <Search 
          handleChange   =    { (e) =>{ setSword(e.target.value) } } 
          value = { Sword}
        />

        <CardList data ={ filter }/> 

        <div className= "footer"></div>
        
      </div> 
    )



  }




export default App;
