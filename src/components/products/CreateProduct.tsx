import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../api/products";
import { IProductPayload } from "../../api/products/Product";

const CreateProduct = () => {
  const navigate = useNavigate();

  const createNewProduct = useMutation(createProduct, {
    onSuccess: () => {
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
    createNewProduct.mutate(newProduct);
  };

  return (
    <div className="px-6">
      <h1 className="text-2xl font-light mt-8">Create new products</h1>

      <hr className="my-6 w-12 border-2 border-green-600" />

      <div>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e: FormEvent) => handleSubmit(e)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 font-light text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="border-[1px] border-gray-400 rounded px-4 py-2"
              type="text"
              name="name"
              id="name"
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
              name="contents"
              id="contents"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="text-green-600 text-lg">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
