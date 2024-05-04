import { useSelector } from "react-redux";
import Homeitems from "../components/Homeitems";

const Home = () => {

   const items = useSelector((store) => store.items)
  //  console.log(items);
    
    return<>
        <main>
          <div className="items-container">
            {items.map( (item) => (
              <Homeitems item={item} key={item.id}/>
            ))}
          </div>
        </main>
    </>
}
export default Home;