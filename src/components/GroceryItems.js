import React from 'react'


const GroceryItems = props =>{

return(
  <div>
    <ul>

      {props.GroceryData.map((item, index)=>{
        return <li key={item.id}>{item.name}<button onClick={props.handleButtonClick}>delete</button></li>
      })}
    </ul>
  </div>
)
}

export default GroceryItems