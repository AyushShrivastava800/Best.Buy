import { createSlice, current } from "@reduxjs/toolkit";
import { Product } from "../../../data/cartProducts";


const listFromLocalStorage = JSON.parse(localStorage.getItem('wishItems'));
const initialListItems = listFromLocalStorage ? listFromLocalStorage.ProductWishlist : [];

const initialState = {
    wishItems: Product,
    newlist:initialListItems,
    amount: initialListItems.length,
  
  };


  const wishSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
      addWishlist: (state, { payload }) => {
     
        const existingItem = state.newlist.find((item) => item.id === payload.id);
        if(existingItem){
          existingItem.amount+=payload.amount;
        }else{  
          state.newlist.push(payload);
          state.amount=state.newlist.length;

        }
         localStorage.setItem(
           'wishItems',
           JSON.stringify({
             ProductWishlist: state.newlist,
           }),
         );
       
       },
      clearWishList: (state) => {
        state.newlist = [];
        state.amount=0
        localStorage.setItem(
          'wishItems',
          JSON.stringify({
            ProductWishlist: state.newlist,
        
          }),
        ); 
      },
      removeWishItem: (state, action) => {
        const itemId = action.payload;
        state.newlist = state.newlist.filter((item) => item.id !== itemId);
        state.amount = state.amount - 1;
        localStorage.setItem(
          'wishItems',
          JSON.stringify({
            ProductWishlist: state.newlist,
        
          }),
        ); 
      },
     
     
    },
  });
  
  export const {  removeWishItem ,clearWishList ,addWishlist} =
    wishSlice.actions;
  export default wishSlice.reducer;
  