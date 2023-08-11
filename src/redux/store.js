import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/postsSlice.js";

const store = configureStore({
  reducer: {
    [postsReducer.name]: postsReducer,
  },
});

export default store;
