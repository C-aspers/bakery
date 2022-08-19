import React from "react";
import panierPain from "../../../assets/panierPain.jpg";

import "./StartingPageProduct.css";

import { useNavigate } from "react-router-dom";

const StartingPageProduct = () => {
  const navigate = useNavigate();

  const handleClickProducts = () => {
    navigate(`/Products`);
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
    </div>
  );
};

export default StartingPageProduct;
