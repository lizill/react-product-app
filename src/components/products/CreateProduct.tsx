import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../api/products";
import { IProductPayload } from "../../api/products/Product";

const CreateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      contents: { value: string };
    };

    const name = target.name.value;
    const contents = target.contents.value;

    if (!name.trim() || !contents.trim()) return;

    const newProduct: IProductPayload = {
      name,
      contents,
      timestamp: new Date(),
    };
    console.log(newProduct);
    mutation.mutate(newProduct);
  };

  return (
    <>
      <h1>create new product</h1>

      <div>
        <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="contents">Content</label>
            <textarea
              name="contents"
              id="contents"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
