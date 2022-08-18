import React from "react";
import "./ImgLibrary.css";
import bruchetta from "../../assets/bruchetta.jpg";
import cake_fruits from "../../assets/cake_fruits.jpg";
import croissants from "../../assets/croissants.jpg";
import hamburger from "../../assets/hamburger.jpg";
import macaron from "../../assets/macaron.jpg";
import meringue from "../../assets/meringue.jpg";
import pizza from "../../assets/pizza.jpg";
import salade from "../../assets/salade.jpg";
//import tartelette from "../../assets/tartelette.jpg";
//import sandwich_boeuf from "../../assets/sandwich_boeuf.jpg";

const ImgLibrary = () => {
  return (
    <section className="container__Library">
      <div className="row__Library">
        <img src={bruchetta} alt="une bruchetta"></img>
        <img src={cake_fruits} alt="une bruchetta"></img>
        <img src={croissants} alt="une bruchetta"></img>
        <img src={hamburger} alt="une bruchetta"></img>
      </div>
      <div className="row__Library">
        <img src={macaron} alt="une bruchetta"></img>
        <img src={meringue} alt="une bruchetta"></img>
        <img src={pizza} alt="une bruchetta"></img>
        <img src={salade} alt="une bruchetta"></img>
      </div>
    </section>
  );
};

export default ImgLibrary;
