import React from "react";
import blé from "../../../assets/blé.jpg";
import panierPain from "../../../assets/panierPain.jpg";

import "./StartingPageProduct.css";

import { useNavigate } from "react-router-dom";

const StartingPageProduct = () => {
  const navigate = useNavigate();

  const handleClickProducts = () => {
    navigate(`/Products`);
  };
  const handleClickRecipes = () => {
    navigate(`/Recipes`);
  };

  return (
    <div className="starting__ImgeContent">
      <div className="starting__Imge">
        <img src={panierPain} alt="panier de pains" />
        <p>
          Pour votre plus grand plaisir, découvrez toutes les offres pérennes et
          les nouveautés de vos boulangeries !
        </p>
        <button onClick={handleClickProducts}>Découvrez les vites !</button>
      </div>
      <div className="starting__Inspiration">
        <img src={blé} alt="champs de blé" />
        <p>
          L’objectif de chacune de nos recettes? Rassembler les humains
          gourmands que nous sommes autour de réalisations simples et
          savoureuses.
        </p>
        <button onClick={handleClickRecipes}>Consultez nos recettes</button>
      </div>
    </div>
  );
};

export default StartingPageProduct;
