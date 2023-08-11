import { createSlice, current } from "@reduxjs/toolkit";

// const data = JSON.parse(localStorage.getItem("users")) || [];
// const User = JSON.parse(localStorage.getItem("loggedUser"));
// const initialUser = User ? User : "";

const initialState = {
  AllUsers:[],
  Users: null,
  isloggedIn: false,
  isloading: 0,
};

const FormSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsers:(state,{payload})=>{
      state.AllUsers=payload;
   },
    LogOut: (state) => {
      state.Users =null;
      console.log(state.Users)
      // state.isloggedIn=false
    },
    LogIn: (state, { payload }) => {
      console.log(current(state),"csc")
      const getdata = state.AllUsers.find(
        (items) =>
          items.email === payload.email && items.password === payload.password
      );

      if (getdata) {
        state.Users = getdata;   
        state.isloggedIn=true
        console.log(current(state))
      } else {
        console.log("error");
      }
    },
  },
});

export const { loggedUser, LogOut, LogIn,getAllUsers } = FormSlice.actions;
export default FormSlice.reducer;
