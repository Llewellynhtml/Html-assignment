// src/store.js
import { createStore, combineReducers } from 'redux';
import { shoppingListReducer } from './shoppingListReducer';

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer
});

const store = createStore(rootReducer);

export default store;
