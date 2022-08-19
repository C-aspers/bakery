import React from "react";
import Header from "../components/Header/Header";
import StartingPage from "../components/StartingPage/StartingPage";
import ImgLibrary from "../components/ImgLibrary/ImgLibrary";

const HomePages = () => {
  return (
    <section>
      <Header />
      <StartingPage />
      <ImgLibrary />
    </section>
  );
};

export default HomePages;
