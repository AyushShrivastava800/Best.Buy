import { Category } from "@mui/icons-material";
import { createSlice, current } from "@reduxjs/toolkit";

import { Product } from "../../../data/cartProducts";

const initialState = {
  Products: Product,
  productSort: Product,
  amount: 0,
  total: 0,
  isloading: 0,
};

const filterSort = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    sortLatest: (state) => {
      state.productSort=  state.Products.reverse();
    },  
    sortLowToHigh: (state) => {
      state.productSort=  state.Products.sort((a, b) =>
        a.price > b.price ? 1 : a.price < b.price ? -1 : 0
      );
    },
    sortHighToLow: (state) => {
      state.productSort=   state.Products.sort((a, b) =>
        a.price < b.price ? 1 : a.price > b.price ? -1 : 0
      );
    },
    Categoryfilter:(state,{payload})=>{
     state.productSort= state.Products.filter((items) =>
     items.category===payload
      );
  }
  },
});

export const { sortLatest, sortLowToHigh, sortHighToLow,Categoryfilter } = filterSort.actions;
export default filterSort.reducer;
