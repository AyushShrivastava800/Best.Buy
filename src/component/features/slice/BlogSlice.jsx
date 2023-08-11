import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  Blog: [],
  isloggedIn: false,
  isloading: 0,
};

const BlogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    AddPost: (state,{payload}) => {
      state.Blog.push(payload);
      console.log(current(state.Blog));
    },
  },
});

export const { AddPost } = BlogSlice.actions;
export default BlogSlice.reducer;
