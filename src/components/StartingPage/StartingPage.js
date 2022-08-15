import "./StartingPage.css";
import StartingPageValue from "./StartingPageValue/StartingPageValue";
import StartingPageProduct from "./StartingPageProduct/StartingPageProduct";
import StartingPageCommitment from "./StartingPageCommitment/StartingPageCommitment";

const StartingPage = () => {
  return (
    <div className="content">
      <StartingPageValue />
      <StartingPageProduct />
      <StartingPageCommitment />
    </div>
  );
};

export default StartingPage;
