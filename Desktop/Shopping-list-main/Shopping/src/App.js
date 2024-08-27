
import React from 'react';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>Shopping List </h1>
      <div>

        <AddItem />
      <ShoppingList />
      </div>

    </div>
  );
};

export default App;

