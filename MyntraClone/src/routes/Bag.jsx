import BagSummary from "../components/BagSummary";
import Bagitem from "../components/Bagitem";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagitems = useSelector((store) => store.bagItems);
  const finalItems = items.filter((item) => {
    const itemFound = bagitems.indexOf(item.id);
    return itemFound >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <Bagitem item={item} key={item.id} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
