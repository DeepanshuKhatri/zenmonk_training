import { configureStore } from "@reduxjs/toolkit";
import arrReducer from "./features/todo/arrSlice";

const store = configureStore({
  reducer: {
    arr: arrReducer,
  },
});

export default store;