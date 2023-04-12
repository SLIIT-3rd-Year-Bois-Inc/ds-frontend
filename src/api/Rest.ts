import { ProductDetailsResponse, ProductsResponse } from "../model/types";
import { sleep } from "../utils/time";
import { products } from "./Mock";

export async function getProducts(): Promise<ProductsResponse> {
  await sleep(100);
  return products;
}


export async function getProductDetails(): Promise<ProductDetailsResponse> {
    await sleep(100);
    return {
        product: products.products[0]
    }
}