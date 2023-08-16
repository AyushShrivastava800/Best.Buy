import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
  OrderItems:[],
  };

const orderApi=createSlice({
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
     
    },
})