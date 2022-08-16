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

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>error: {error.message}</div>;

  return (
    <div>
      <h1>Show product {id}</h1>
      <div>
        <input
          disabled={!isUpdating}
          value={isUpdating ? name : data.name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          cols={30}
          rows={10}
          disabled={!isUpdating}
          value={isUpdating ? contents : data.contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onHandleUpdateBtn}>
          {isUpdating ? "Save" : "Update"}
        </button>
        <button onClick={onHandleDeleteBtn}>Delete</button>
      </div>
    </div>
  );
};

export default ShowProduct;
