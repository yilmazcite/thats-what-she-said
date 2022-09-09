import React from "react";
import { useSelector } from "react-redux";
import "../styles/QuotePopup.css";

const Quote = () => {
  const quote = useSelector((state) => state.randomQuote.randomQuote);
  return (
    <div>
      <h3 className="displayed-quote">"{quote}"</h3>
    </div>
  );
};

export default Quote;
