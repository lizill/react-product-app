import { Link } from "react-router-dom";
import ProductList from "./ProductList";

const MainComponent = () => {
  return (
    <div className="px-6">
      {/* <div>
        <SearchForm />
      </div> */}

      <div className="flex justify-center my-8">
        <Link to="/products">
          <button className="text-lg rounded bg-slate-500 text-white px-14 py-3">
            Create new products
          </button>
        </Link>
      </div>

      <h1 className="text-2xl font-light">Product List</h1>

      <hr className="my-6 w-12 border-2 border-green-600" />

      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default MainComponent;
