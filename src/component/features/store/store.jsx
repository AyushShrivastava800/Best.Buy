import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../slice/cartSlice"
import wishReducer from "../slice/wishSlice"
export  const store= configureStore({
    reducer:{
      
        cart:cartReducer,
        wishList:wishReducer
    },
  
});
