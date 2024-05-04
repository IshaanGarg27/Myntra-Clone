import BagSummary from "../components/BagSummary";
import Bagitem from "../components/Bagitem";

const Bag = () => {
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <Bagitem />
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
