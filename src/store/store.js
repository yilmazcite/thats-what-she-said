import { configureStore } from "@reduxjs/toolkit";

import addQuoteSlice from "./add-quote-slice";
import randomQuoteSlice from "./random-quote-slice";
import popupSlice from "./manage-popup-slice";

export const store = configureStore({
  reducer: {
    addQuote: addQuoteSlice.reducer,
    randomQuote: randomQuoteSlice.reducer,
    managePopup: popupSlice.reducer,
  },
});
