import React from "react";
import ShowCaseCard from "../ShowCaseCard/ShowCaseCard";
import "./Products.css";
//import datas from "../../datas";
import { Row } from "react-bootstrap";


const Products = () => {
  return (
    <Row className="container_Products">
      <h2 className="title_Products">Nos produits</h2>
      <h5 className="subtitle_Products">Pains, tartes et viennoiseries</h5>
      <ShowCaseCard />
    </Row>
  );
};

export default Products;

// const datas = [
//   {
//     src: "./assets/bruchetta.jpg",
//     ne: "Pain complet",
//     price: "3",
//   },
//   {
//     src: "./assets/blé.jpg",
//     ne: "Pains complet",
//     price: "31",
//   },
//   {
//     src: "./assets/blé.jpg",
//     ne: "Pains complet",
//     price: "31",
//   },
// ];

// const listItems = datas.map((data, index) => {
//   return (
//     <div key={index}>
//       {data.price}
//       {data.ne}
//       <img src={data.src} key={data.src} alt='foto'></img>
//     </div>
//   );
// });

//
//{datas.map((product) => (
//  <ShowCaseCard key={product.id} product={product} />
//))}
