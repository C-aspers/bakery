import React from "react";
//import "./Products.css";
//import pic from "../../assets/meringue.jpg";

const Products = () => {
  const datas = [
    {
      src: "./assets/meringue.jpg",
      ne: "Pain complet",
      price: "3",
    },
    {
      src: "./assets/blé.jpg",
      ne: "Pains complet",
      price: "31",
    },
  ];

  const listItems = datas.map((data, index) => {
    return (
      <div key={index}>
        {data.price}
        {data.ne}
        <img src={data.src} key={data.src} alt='foto'/>
      </div>
    );
  });

  return (
    <div>
      <h2 className="title_Products">Nos produits</h2>
      <h5 className="subtitle_Products">Pains, tartes et viennoiseries</h5>
      <div className="card_Products">
        <div>{listItems}</div>
        <h4>
          <b>Pain céréale</b>
        </h4>
        <p>4,25$</p>
      </div>
    </div>
  );
};

export default Products;
