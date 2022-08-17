import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/products";
import { IProduct } from "../../api/products/Product";
import LoaderComponent from "../common/LoaderComponent";
import ProductItem from "../products/ProductItem";

const ProductList = () => {
  const { isLoading, error, data } = useQuery<IProduct[], AxiosError>(
    ["products"],
    getProducts
  );

  if (isLoading) return <LoaderComponent />;

  if (error) return <div>error: {error.message}</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
