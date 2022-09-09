import React from "react";
import RandomQuotePopup from "./RandomQuotePopup";
import "../styles/RandomQuote.css";

import { useDispatch, useSelector } from "react-redux";
import { randomQuoteActions } from "../store/random-quote-slice";
import { managePopupActions } from "../store/manage-popup-slice";

const RandomQuote = () => {
  const dispatch = useDispatch();
  const displayPopup = useSelector(
    (state) => state.managePopup.randomQuotePopup
  );

  const fetchQuote = async () => {
    const response = await fetch(
      "https://get-quote-1f5ed-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"
    );
    const responseData = await response.json();

    const fetchedQuote = [];

    for (let key in responseData) {
      fetchedQuote.push(responseData[key].quote);
    }

    let randomQuote =
      fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)];

    dispatch(randomQuoteActions.randomQuote(randomQuote));
  };

  const quoteHandler = () => {
    fetchQuote();
    dispatch(managePopupActions.randomQuotePopupOpen());
  };

  return (
    <React.Fragment>
      <div className="random-quote-content">
        <h1>OR</h1>
        <p className="get-quote">
          Click the button to get a random Nursima quote!
        </p>
        <button onClick={quoteHandler} className="random-quote-btn">
          Get a Quote!
        </button>
      </div>
      {displayPopup && <RandomQuotePopup />}
    </React.Fragment>
  );
};

export default RandomQuote;
