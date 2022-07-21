import React from "react";
import "./Header.css";
import banner from "../../assets/breadBanner.jpg";

const Header = () => {
  return (
    <article>
      <img src={banner} alt="bread" className="banner"></img>
      <h1 className="banner_title">Le bon goût du savoir-faire</h1>
    </article>
  );
};

export default Header;
