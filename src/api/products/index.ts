import { ENDPOINST } from "../endpoints";
import instance from "../instance";
import { IProduct, IProductPayload } from "./Product";

export async function createProduct(data: IProductPayload) {
  const response = await instance.post(ENDPOINST.PRODUCTS, data);
  console.log(response);
}

export async function getProducts() {
  const response = await instance.get<IProduct[]>(ENDPOINST.PRODUCTS);
  console.log(response);
  return response.data;
}
