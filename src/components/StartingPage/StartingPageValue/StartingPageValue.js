import React from "react";
import "./StartingPageValue.css";
import AboutFirstSvg from "./AboutSVG/AboutFirstSvg";
import AboutSecondSvg from "./AboutSVG/AboutSecondSvg";
import AboutThirdSvg from "./AboutSVG/AboutThirdSvg";

const StartingPageValue = () => {
  return (
    <div className="starting__Value">
      <div>
        <AboutFirstSvg />
        <h5>passionnés</h5>
        <p>
          Professionnels, passionnés et engagés, nous agissons chaque jour pour
          offrir à nos clients un pain traditionnel de qualité.
        </p>
      </div>
      <div>
        <AboutSecondSvg />
        <h5>enthousiastes</h5>
        <p>
          Chaque jour, nous aimons surprendre nos clients grâce à des équipes
          motivées et qualifiées !
        </p>
      </div>
      <div>
        <AboutThirdSvg />
        <h5>commerçants</h5>
        <p>
          Attentifs et à votre écoute, nous vous accueillons dans nos
          boulangeries et répondons à vos envies avec convivialité et respect.
        </p>
      </div>
    </div>
  );
};

export default StartingPageValue;
