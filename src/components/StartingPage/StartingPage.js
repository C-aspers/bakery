import "./StartingPage.css";
import AboutFirstSvg from "./AboutSVG/AboutFirstSvg";
import AboutSecondSvg from "./AboutSVG/AboutSecondSvg";
import AboutThirdSvg from "./AboutSVG/AboutThirdSvg";
import blé from "../../assets/blé.jpg";
import panierPain from "../../assets/panierPain.jpg";

const StartingPage = () => {
  const handleClick = () => {};
  return (
    <div className="content">
      <div className="starting__Value">
        <div>
          <AboutFirstSvg />
          <h5>passionnés</h5>
          <p>
            Professionnels, passionnés et engagés, nous agissons chaque jour
            pour offrir à nos clients un pain traditionnel de qualité.
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
      <div className="starting__Imge">
        <img src={panierPain} alt="panier de pains" />
        <p>
          Pour votre plus grand plaisir, découvrez toutes les offres pérennes et
          les nouveautés de vos boulangeries !
        </p>
        <button onClick={handleClick}>Découvrez les vites ! </button>
      </div>
    </div>
  );
};

export default StartingPage;
/*
<div className="starting__Imge">
        <div>
          <img src={blé} alt="champs de blé" />
        </div>
        <div>
          <img src={blé} alt="champs de blé" />
        </div>
      </div>
      */
