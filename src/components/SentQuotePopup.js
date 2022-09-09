import React from "react";
import "../styles/QuotePopup.css";
import { useSelector, useDispatch } from "react-redux";
import { quoteActions } from "../store/add-quote-slice";
import { managePopupActions } from "../store/manage-popup-slice";

const SentQuotePopup = () => {
  const dispatch = useDispatch();
  const quoteSubmitted = useSelector((state) => state.addQuote.quoteSubmitted);
  const checkQuoteValidity = useSelector(
    (state) => state.managePopup.quoteValidity
  );

  const quoteReqText =
    checkQuoteValidity.length === 0
      ? "Quote can't be empty."
      : checkQuoteValidity.length > 50
      ? "Quote can't be longer than 50 characters."
      : "Your quote request has successfully been received!";

  const clickHandler = () => {
    dispatch(quoteActions.quoteSubmission(false));
    dispatch(managePopupActions.sendQuotePopupClosed());
  };

  return (
    <div>
      <div className="backdrop" onClick={clickHandler} />
      <div className="popup-content">
        {quoteSubmitted && <p>{quoteReqText}</p>}
        <button onClick={clickHandler}>Close</button>
      </div>
    </div>
  );
};

export default SentQuotePopup;
