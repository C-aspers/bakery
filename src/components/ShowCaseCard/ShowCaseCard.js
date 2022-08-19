import React from "react";
import "./ShowCaseCard.css";
import datas from "../../datas";

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
