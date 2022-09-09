import React from "react";
import SentQuotePopup from "./SentQuotePopup";
import { useSelector, useDispatch } from "react-redux";
import { quoteActions } from "../store/add-quote-slice";
import { managePopupActions } from "../store/manage-popup-slice";
import "../styles/Quote.css";

const AddQuote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.addQuote.quote);
  const popupIsOpen = useSelector((state) => state.managePopup.sendQuotePopup);

  const sendQuoteText =
    "Send your unique quote of Nursima to help us make a list of all of her phenomenal phrases!";

  const changeHandler = (e) => {
    dispatch(quoteActions.addQuote(e.target.value));
  };

  const transferQuote = async (sentQuote) => {
    await fetch(
      "https://get-quote-1f5ed-default-rtdb.europe-west1.firebasedatabase.app/quotes.json",
      {
        method: "POST",
        body: JSON.stringify({
          quote: sentQuote,
        }),
      }
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (quote.trim().length !== 0 && quote.trim().length < 50) {
      transferQuote(quote);
    }

    dispatch(quoteActions.removeInputField());
    dispatch(quoteActions.quoteSubmission());
    dispatch(managePopupActions.checkQuoteValidity(quote));
    dispatch(managePopupActions.sendQuotePopupOpen());
  };

  return (
    <React.Fragment>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="intro-text">
          <p>
            There is a friend whose ability to mix the two languages is
            incomparable.
          </p>
          <p>
            This website is dedicated to her and to some exceptional sentences
            she has come up with so far!
          </p>
          <p>Long live neologism!</p>
        </div>
        <h3>{sendQuoteText}</h3>
        <input value={quote} onChange={changeHandler} />
        <button>Send Quote!</button>
      </form>
      {popupIsOpen && <SentQuotePopup />}
    </React.Fragment>
  );
};

export default AddQuote;
