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
import tartelette from "../../assets/tartelette.jpg";
import sandwich_boeuf from "../../assets/sandwich_boeuf.jpg";

const ImgLibrary = () => {
  return (
    <section className="container__Library">
      <div className="row__Library">
        <img src={bruchetta} alt="une bruchetta"></img>
        <img src={cake_fruits} alt="un cake au fruits"></img>
        <img src={croissants} alt="un croissant"></img>
        <div className="wrapper__img">
          <img
            className="change__img1"
            src={hamburger}
            alt="un hamburger"
          ></img>
          <img
            className="change__img2"
            src={sandwich_boeuf}
            alt="un sandwich au boeuf"
          ></img>
        </div>
      </div>
      <div className="row__Library">
        <div className="wrapper__img">
          <img className="change__img1" src={macaron} alt="un macaron"></img>
          <img
            className="change__img2"
            src={tartelette}
            alt="une tartelette aux fraises"
          ></img>
        </div>
        <img src={meringue} alt="une meringue"></img>
        <img src={pizza} alt="une pizza"></img>
        <img src={salade} alt="une salade"></img>
      </div>
    </section>
  );
};

export default ImgLibrary;
