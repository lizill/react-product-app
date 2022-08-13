import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";

const MainComponent = () => {
  return (
    <>
      <h1>main page</h1>

      <div>
        <SearchForm />
      </div>

      <div>
        <Link to="/products">new products</Link>
      </div>

      <div>
        <ProductList />
      </div>
    </>
  );
};

export default MainComponent;
