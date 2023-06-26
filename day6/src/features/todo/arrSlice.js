import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const arrSlice = createSlice({
  name: "arr",
  initialState:initialState,
  reducers: {
    add: (state) => {
      state.tasks.push("data");
    },
    deleter: (state) => {
      state.tasks.pop();
    },
  },
});

export const { add, deleter } = arrSlice.actions;

export default arrSlice.reducer;