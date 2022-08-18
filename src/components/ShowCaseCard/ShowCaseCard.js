import React from "react";
import "./ShowCaseCard.css";
import datas from "../../datas";
//import Card from "react-bootstrap/Card";

const ShowCaseCard = () => {
  return (
    <div className="container__table">
      <table>
        <thead>
          <tr>
            <th>Produits</th>
            <th>Prix</th>
          </tr>
        </thead>
        {datas.map(({ id, title, price }) => {
          return (
            <tbody key={id}>
              <tr>
                <td>{title}</td>
                <td>
                  {price} <strong>$</strong>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ShowCaseCard;

/*
  <Card className="card_Products">
          <Card.Body>
            <Card.Title className="card_Text">{title}</Card.Title>
            <Card.Text className="card_Text">{price} $</Card.Text>
          </Card.Body>
        </Card>
*/
