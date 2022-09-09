import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: "",
  quoteSubmitted: false,
};

const addQuoteSlice = createSlice({
  name: "add-quote",
  initialState,
  reducers: {
    addQuote(state, action) {
      state.quote = action.payload;
    },
    removeInputField(state) {
      state.quote = "";
    },
    quoteSubmission(state) {
      state.quoteSubmitted = true;
    },
  },
});

export const quoteActions = addQuoteSlice.actions;

export default addQuoteSlice;
