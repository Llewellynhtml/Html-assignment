import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";

const AddItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('Groceries'); 
  const [notes, setNotes] = useState(''); 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity && category) {
      const newItem = { id: Date.now(), name, quantity, category, notes }; 
      dispatch(addItem(newItem));
      setName('');
      setQuantity(1); 
      setCategory('Groceries'); 
      setNotes(''); 
    }
  };

  return (
    <form className='add-item-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="name">Item Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor="quantity">Quantity (between 1 and 100):</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          id="quantity"
          name="quantity"
          min="1"
          max="100"
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='form-control'
        >
          <option value="Groceries">Groceries</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home furniture">Home furniture</option>
          <option value="Sports, Outdoor & Healthy Living">Sports, Outdoor & Healthy Living</option>
          <option value="Baby & Toddler">Baby & Toddler</option>
          <option value="Garden & Patio">Garden & Patio</option>
          <option value="Pets">Pets</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor="notes">Notes (Optional):</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any additional notes (optional)"
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <button type='submit' className='submit-button'>Add Item</button>
      </div>
    </form>
  );
};

export default AddItem;
