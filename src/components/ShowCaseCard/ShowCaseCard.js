import React from "react";
import "./ShowCaseCard.css";
import pic from "../../assets/meringue.jpg";
import datas from "../../datas";
import Card from "react-bootstrap/Card";

const ShowCaseCard = () => {
  const listItems = datas.map(({ id, src, title, price }) => {
    return (
      <div key={id}>
        <Card className="card_Products">
          <Card.Img variant="top" className="card_Picture" src={pic} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price} $</Card.Text>
          </Card.Body>
        </Card>
        <br></br>
      </div>
    );
  });

  return <div className="container_ShowCaseCard">{listItems}</div>;
};

export default ShowCaseCard;

// const images = [
//   {
//     id: "1",
//     src: "./../../assets/bruchetta",
//   },
//   {
//     id: "2",
//     src: "https://unsplash.com/photos/sqkXyyj4WdE",
//   },
//   {
//     id: "3",
//     src: "./assets/blé.jpg",
//   },
// ];

// const imageItems = images.map(({ src, id }) => {
//   return (
//     <div key={id}>
//       <img src={src} key={id} alt="foto"></img>
//     </div>
//   );
//});
