import { createSlice, current } from "@reduxjs/toolkit";

import { Product } from "../../../data/cartProducts";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('item'));
const initialCartItems = cartFromLocalStorage ? cartFromLocalStorage.products : [];

const initialState = {
  cartItems: Product,
  newCart:initialCartItems,
  amount: 0,
  total: 0,
  isloading: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, { payload }) => {
     const existingItem = state.newCart.find((item) => item.id === payload.id);
      if(existingItem){
        existingItem.amount+=payload.amount;
        existingItem.subtotal = existingItem.amount * existingItem.price;

      }else{  
        state.newCart.push(payload);
        state.amount=state.newCart.length;
      }
      localStorage.setItem(
        'item',
        JSON.stringify({
          products: state.newCart,
        }),
      );
    
    },
    clearCart: (state) => {
      state.newCart = [];
      state.amount = 0; //total amount
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.newCart = state.newCart.filter((item) => item.id !== itemId);
      state.amount = state.amount - 1; //Total amount
      localStorage.setItem(
        'item',
        JSON.stringify({
          products: state.newCart,
        }),
      ); 
    },
    Increase: (state, { payload }) => {
      const newCarts = state.newCart.find((item) => item.id === payload);
      console.log(current(newCarts))
      newCarts.amount =newCarts.amount + 1; //Products amount
      newCarts.subtotal = newCarts.amount * newCarts.price;
    },
    Decrease: (state, { payload }) => {
      const newCarts = state.newCart.find((item) => item.id === payload);
      newCarts.amount = newCarts.amount - 1; //Products amount
      newCarts.subtotal = newCarts.price / newCarts.amount;
    },
    calculateTotals: (state) => {
      let total = 0;
      state.newCart.forEach((item) => {
        total += item.subtotal;
      });
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, Increase, Decrease, calculateTotals,addtoCart } =
  cartSlice.actions;
export default cartSlice.reducer;
