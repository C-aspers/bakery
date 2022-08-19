import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footers.css";
import FooterFirstSvg from "./FootersSvg/FooterFirstSvg";
import FooterSecondSvg from "./FootersSvg/FooterSecondSvg";
import FooterThirdSvg from "./FootersSvg/FooterThirdSvg";
import FooterFourthSvg from "./FootersSvg/FooterFourthSvg";
import epi from "../../assets/epi.jpg";

const Footers = () => {
  return (
    <footer>
      <Container className="content__Footer">
        <Row className="row__Footer">
          <Col className="column__Footer">
            <div className="heading__Footer">Manger Bouger</div>
            <a
              className="footerLink__Footer"
              href="https://www.mangerbouger.fr"
              target="_blank"
              rel="noreferrer"
            >
              MANGER BOUGER
            </a>
          </Col>
          <Col className="column__Footer">
            <div className="heading__Footer">Contact</div>
            <div className="footerLink__Footer">+1 (378) 999-2222</div>
            <div className="footerLink__Footer" href="#">
              contact@laboulangeriequebecoise.ca
            </div>
            <div className="footerLink__Footer" href="#">
              <p>Heures d'ouverture : Tous les jours de 9h00 à 18h00 </p>
              <p>Adresse :10036, chemin Sainte-Foy, Québec</p>
            </div>
          </Col>
          <Col className="column__Footer">
            <div className="heading__Footer">Suivez-nous</div>
            <div className="only__Svg">
              <a
                className="footerLink__Footer"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FooterFirstSvg />
              </a>
              <a
                className="footerLink__Footer"
                href="https://www.instagram.com/?hl=fr"
                target="_blank"
                rel="noreferrer"
              >
                <FooterSecondSvg />
              </a>
              <a
                className="footerLink__Footer"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FooterThirdSvg />
              </a>
              <a
                className="footerLink__Footer"
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <FooterFourthSvg />
              </a>
            </div>
          </Col>
          <Col className="column__Footer">
            <img src={epi} alt="ear of wheat" />
          </Col>
        </Row>
        <Row>
          <div className="copyright__Footer">
            @2022 Copyright : make with ❤️ by AKWeb
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footers;
