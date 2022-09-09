import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendQuotePopup: null,
  randomQuotePopup: null,
  quoteValidity: "",
};

const popupSlice = createSlice({
  name: "random-quote",
  initialState,
  reducers: {
    sendQuotePopupOpen(state) {
      state.sendQuotePopup = true;
    },
    sendQuotePopupClosed(state) {
      state.sendQuotePopup = null;
    },
    checkQuoteValidity(state, action) {
      state.quoteValidity = action.payload;
    },
    randomQuotePopupOpen(state) {
      state.randomQuotePopup = true;
    },
    randomQuotePopupClose(state) {
      state.randomQuotePopup = null;
    },
  },
});

export const managePopupActions = popupSlice.actions;

export default popupSlice;
