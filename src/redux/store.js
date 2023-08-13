import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/postsSlice.js";
import { authReducer } from "./slices/authSlice.js";

const store = configureStore({
  reducer: {
    [postsReducer.name]: postsReducer,
    [authReducer.name]: authReducer,
  },
});

export default store;
