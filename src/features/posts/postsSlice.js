import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch api
const api = "https://jsonplaceholder.typicode.com/posts";
// ned to use createAsyncThunk to execute async fetch 
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get(api);
  return res.data;
});

// in slice we write all logics here
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    // before calling api this state should be lokks like this
    isLoading: false,
    posts: [],
    error: null,
  },
  // The recommended way of using extraReducers is to use a callback that receives a ActionReducerMapBuilder instance.
  // This builder notation is also the only way to add matcher reducers and default case reducers to your slice.
  extraReducers: (builder) => {
    // we may have three case's pending, fullfilled and rejected
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
