  
import React, { useState, useEffect} from 'react';
import Card from "../card/card";




 function CardList(props) {



// console.log(props.data);

            return(<div className =" allocate" >

 
            
                
                       
                    {props.data.map(t => (
                     <Card data = { t } />
                    
                    ))}
                 
                 
                    

              </div>)
            }
            
 

    
    


export default CardList;
   
  
  

    
    




