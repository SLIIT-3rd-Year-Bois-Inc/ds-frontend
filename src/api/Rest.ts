import axios from "axios";
import { ProductDetailsResponse, ProductsResponse } from "../model/types";
import { sleep } from "../utils/time";
import { products } from "./Mock";
import { Config } from "../config/endpoints";

export async function getProducts(): Promise<ProductsResponse> {
  console.log("res.data", "Dfadfaf");
  let res = await axios.get(`${Config.apiEndpoint}/items`);
  return {
    products: res.data
  };
}


export async function getProductDetails(): Promise<ProductDetailsResponse> {
    await sleep(100);
    return {
        product: products.products[0]
    }
}