import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getProducts } from "../../api/products";
import { IProduct } from "../../api/products/Product";

const ProductList = () => {
  const { isLoading, error, data } = useQuery<IProduct[], AxiosError>(
    ["products"],
    getProducts
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>error: {error.message}</div>;

  return (
    <>
      {data.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
  );
};

export default ProductList;
