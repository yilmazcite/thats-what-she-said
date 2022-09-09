import React from "react";
import "../styles/Header.css";

const Header = () => {
  const gif = "https://y.yarn.co/252d7b5b-ed76-4963-b717-3ad88cc0067b_text.gif";
  return (
    <header className="header-container">
      <h1>That's what she said. I mean, for real...</h1>
      <span>
        <img
          className="header-gif"
          src={gif}
          alt="that's what she said gif from the office"
        />
      </span>
    </header>
  );
};

export default Header;
