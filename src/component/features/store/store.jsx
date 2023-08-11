import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../slice/cartSlice"
import wishReducer from "../slice/wishSlice"
import FormReducer from "../slice/FormSlice"
import BlogReducer from "../slice/BlogSlice"
import { UserApi } from "../api/UserApi"
import filterSortReducer from "../slice/filterSortSlice"
export  const store= configureStore({
    reducer:{
      
        cart:cartReducer,
        wishList:wishReducer,
        filterSort:filterSortReducer,
        users:FormReducer,
        Blog:BlogReducer,
        [UserApi.reducerPath]: UserApi.reducer,
    },  
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});
