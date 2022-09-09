import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomQuote: "",
};

const randomQuoteSlice = createSlice({
  name: "random-quote",
  initialState,
  reducers: {
    randomQuote(state, action) {
      state.randomQuote = action.payload;
    },
  },
});

export const randomQuoteActions = randomQuoteSlice.actions;

export default randomQuoteSlice;
