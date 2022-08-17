import { IProduct } from "../../api/products/Product";

type Props = {
  product: IProduct;
};

const ProductItem = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-2 group">
      <div className="h-56 bg-slate-400 rounded"></div>
      <h3 className="text-lg font-light">{product.name}</h3>
      <p className="font-extralight">{product.contents}</p>
      <div className="flex">
        <p className="text-lg font-light text-green-700">
          <span className="group-hover:decoration-2 group-hover:underline">
            show details
          </span>{" "}
          &gt;
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
