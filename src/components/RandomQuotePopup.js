import React from "react";
import TweetQuote from "./TweetQuote";
import Quote from "./Quote";
import "../styles/QuotePopup.css";
import { useDispatch } from "react-redux";
import { managePopupActions } from "../store/manage-popup-slice";

const RandomQuotePopup = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(managePopupActions.randomQuotePopupClose());
  };

  return (
    <div>
      <div className="backdrop" onClick={clickHandler} />
      <div className="random-quote-popup-content">
        <Quote />
        <span className="random-quote-btns">
          <TweetQuote />
          <button className="random-quote-popup-btn" onClick={clickHandler}>
            Close
          </button>
        </span>
      </div>
    </div>
  );
};

export default RandomQuotePopup;
