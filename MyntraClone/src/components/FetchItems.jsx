import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchingActions } from "../store/fetchingSlice";

const FetchItems = () => {
  const fetchingStatus = useSelector((store) => store.fetching);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchingStatus.currentlyFetching) return;

    dispatch(fetchingActions.markFetchingStarted());

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemActions.addItems(items[0]));
      });

    dispatch(fetchingActions.markFetchingFinished());
  }, []);

  return <></>;
};
export default FetchItems;
