import { createSlice } from "@reduxjs/toolkit";

// in slice we nned to put all logics.slice have 3 things name , iitial state and reducers.
const counterSlice = createSlice({
  name: "counter",
  // initial state and reducers should be both object
  initialState: { count: 0 },
  reducers: {
    // in reducers we need some function
    increment: (state) => {
      // here we change state
      // each function have two parameters called state and action
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    // we need receive value here.so we need here action as well
    // by action we receive value with payload
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrementByValue: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});


// here we should export actions and reducer
export const {
  increment,
  decrement,
  reset,
  incrementByValue,
  decrementByValue,
} = counterSlice.actions;
export default counterSlice.reducer;
