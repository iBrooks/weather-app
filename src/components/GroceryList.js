import React from 'react'
import GroceryItems from './GroceryItems'

const GroceryList = props => {
  
  return(
    <div>
      <h1>Grocery List</h1>
      <GroceryItems GroceryData={props.GroceryData} handleButtonClick={ (event) => { alert("Consume")}}/>
    </div>
  )
}

export default GroceryList