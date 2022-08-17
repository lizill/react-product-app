import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  deleteProductById,
  updateProductById,
} from "../../api/products";
import { IProduct } from "../../api/products/Product";
import LoaderComponent from "../common/LoaderComponent";

const ShowProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const { isLoading, error, data } = useQuery<IProduct, AxiosError>(
    ["products", id],
    () => getProductById(id + "")
  );

  const onHandleUpdateBtn = () => {
    if (isUpdating) {
      if (!name.trim() || !contents.trim()) return;

      const updatedProduct: IProduct = {
        id: id + "",
        name,
        contents,
        timestamp: new Date(),
      };

      updateProduct.mutate(updatedProduct);
    } else {
      setName(data?.name + "");
      setContents(data?.contents + "");
    }
    setIsUpdating(!isUpdating);
  };

  const updateProduct = useMutation(updateProductById, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products", id]);
    },
  });

  const onHandleDeleteBtn = () => {
    if (window.confirm("Delete this product")) {
      deleteProduct.mutate(id + "");
    }
  };

  const deleteProduct = useMutation(deleteProductById, {
    onSuccess: () => {
      navigate("/");
    },
  });

  if (isLoading) return <LoaderComponent />;

  if (error) return <div>error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-2xl font-light mt-8">Show product {id}</h1>

      <hr className="my-6 w-12 border-2 border-green-600" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-500 font-light text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="border-[1px] border-gray-400 rounded px-4 py-2"
            disabled={!isUpdating}
            value={isUpdating ? name : data.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-gray-500 font-light text-sm"
            htmlFor="contents"
          >
            Content
          </label>
          <textarea
            className="border-[1px] border-gray-400 rounded px-4 py-2"
            cols={30}
            rows={10}
            disabled={!isUpdating}
            value={isUpdating ? contents : data.contents}
            onChange={(e) => setContents(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-6">
          <button
            className="text-green-600 text-lg"
            onClick={onHandleUpdateBtn}
          >
            {isUpdating ? "Save" : "Edit"}
          </button>
          <button className="text-red-600 text-lg" onClick={onHandleDeleteBtn}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
