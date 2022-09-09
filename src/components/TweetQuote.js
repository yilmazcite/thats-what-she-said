import React from "react";
import { useSelector } from "react-redux";
import TwitterIcon from "../assets/TwitterIcon.png";
import "../styles/RandomQuote.css";

const TweetQuote = () => {
  const websiteUrl = "— Powered by: bit.ly/3x91i2g";
  const randomTweet = useSelector((state) => state.randomQuote.randomQuote);
  const extraTweetText = `Nursima once said: "${randomTweet}" ${websiteUrl}`;
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
