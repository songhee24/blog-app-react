import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios.js";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

const initialState = {
  posts: {
    items: {},
    status: "loading",
  },
  tags: {
    items: {},
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "loaded";
    },
  },
});

export const postsReducer = postsSlice.reducer;
