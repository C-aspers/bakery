import React from "react";
import ShowCaseCard from "../ShowCaseCard/ShowCaseCard";
import "./Products.css";
import eclair from "../../assets/eclair.jpg";

const Products = () => {
  return (
    <div className="container_Products">
      <div className="column_ImgProducts">
        <img src={eclair} alt="éclair au chocolat" />
      </div>
      <div className="column_Products">
        <h2 className="subtitle_Products">Pains, tartes et viennoiseries</h2>
        <ShowCaseCard />
      </div>
    </div>
  );
};

export default Products;
