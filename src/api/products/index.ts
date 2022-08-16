import { ENDPOINST } from "../endpoints";
import instance from "../instance";
import { IProduct, IProductPayload } from "./Product";

export async function createProduct(productPayload: IProductPayload) {
  const { data } = await instance.post(ENDPOINST.PRODUCTS, productPayload);
  console.log(data);
  return data;
}

export async function getProducts() {
  const { data } = await instance.get<IProduct[]>(ENDPOINST.PRODUCTS);
  console.log(data);
  return data;
}

export async function getProductById(id: string) {
  const { data } = await instance.get<IProduct>(ENDPOINST.PRODUCTS + `/${id}`);
  console.log(data);
  return data;
}

export async function deleteProductById(id: string) {
  const { data } = await instance.delete(ENDPOINST.PRODUCTS + `/${id}`);
  console.log(data);
  return data;
}

export async function updateProductById(product: IProduct) {
  const { data } = await instance.put(
    ENDPOINST.PRODUCTS + `/${product.id}`,
    product
  );
  console.log(data);
  return data;
}
