import React from "react";
import { useSelector } from "react-redux";
import TwitterIcon from "../assets/TwitterIcon.png";
import "../styles/RandomQuote.css";

const TweetQuote = () => {
  const randomTweet = useSelector((state) => state.randomQuote.randomQuote);
  const extraTweetText = `Random Nursima quote of the day: "${randomTweet}"`;
  const formTweetLink = `https://twitter.com/intent/tweet?url= ${encodeURIComponent(
    extraTweetText
  )}`;

  return (
    <React.Fragment>
      <a href={formTweetLink} target="blank">
        <img src={TwitterIcon} alt="twitter icon" className="twitter-icon" />
      </a>
    </React.Fragment>
  );
};

export default TweetQuote;
