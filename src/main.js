import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList';
import GroceryData from './constants/GroceryData'
ReactDOM.render(

  <GroceryList
  GroceryData={GroceryData}/>,
  document.getElementById('app')

);
