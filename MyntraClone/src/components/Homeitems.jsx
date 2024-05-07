import { useDispatch, useSelector } from "react-redux";
import { bagItemsActions } from "../store/bagItems";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ImBin } from "react-icons/im";

const Homeitems = ({ item }) => {
  const bagItems = useSelector((store) => store.bagItems);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagItemsActions.addItems(item.id));
  };
  const handleRemove = () => {
    dispatch(bagItemsActions.removeItems(item.id));
  };

  const elementFound = bagItems.indexOf(item.id) >= 0;

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? (
          <button
            type="button"
            className="btn btn-add-bag btn-danger"
            onClick={handleRemove}
          >
            Remove <ImBin />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-add-bag btn-success"
            onClick={handleAddToBag}
          >
            Add to bag <IoMdAddCircleOutline />
          </button>
        )}
      </div>
    </>
  );
};
export default Homeitems;
