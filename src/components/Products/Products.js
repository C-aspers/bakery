import React from "react";
import ShowCaseCard from "../ShowCaseCard/ShowCaseCard";
import "./Products.css";
import pains from "../../assets/pains.jpg";

const Products = () => {
  return (
    <div className="container_Products">
      <div className="column_ImgProducts">
        <img src={pains} alt="plusieurs pains" />
      </div>
      <div className="column_Products">
        <h2 className="title_Products">Nos produits</h2>
        <h5 className="subtitle_Products">Pains, tartes et viennoiseries</h5>
        <ShowCaseCard />
      </div>
    </div>
  );
};

export default Products;
