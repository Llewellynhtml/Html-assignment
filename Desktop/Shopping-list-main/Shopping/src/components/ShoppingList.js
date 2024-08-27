import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItem } from "../redux/action";

const ShoppingList = () => {
  const items = useSelector(state => state.shoppingList.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdate = (item) => {
    const updatedItem = prompt('Update item:', item.name);
    if (updatedItem) {
      dispatch(updateItem({ ...item, name: updatedItem }));
    }
  };

  return (
    <div className='shopping-list'>
      <h2 className='shopping-list-title'>Shopping List</h2>
      <ul className='shopping-list-items'>
        {items.map(item => (
          <li key={item.id} className='shopping-list-item'>
            <span className='item-name'>{item.name}</span>
            <button 
              className='update-button'
              onClick={() => handleUpdate(item)}
            >
              Update
            </button>
            <button 
              className='remove-button'
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
