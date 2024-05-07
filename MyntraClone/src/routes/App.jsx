import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

function App() {
  const fetching = useSelector((store) => store.fetching);

  return (
    <>
      <Header />
      <FetchItems />
      {fetching.currentlyFetching && <Spinner />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
