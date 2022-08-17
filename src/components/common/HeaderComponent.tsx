import { Link, useLocation } from "react-router-dom";

const HeaderComponent = () => {
  const location = useLocation();

  return (
    <div className="flex items-center h-14 px-6">
      <div className="flex items-center">
        <Link to={"/"}>
          <p className="text-3xl">
            Ho<span className="border-b-2 border-green-600">me</span>
          </p>
        </Link>
        <div className="ml-8 text-gray-500">
          <Link to={"/products"}>
            <p
              className={`font-light ${
                location.pathname === "/products" && "text-green-600"
              }`}
            >
              products
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
