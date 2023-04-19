import { ProductsResponse } from "../model/types";

export const products: ProductsResponse = {
  products: new Array(10).fill({
    id: "944efs49grrr",
    name: "California Gold Nutrition, Lutein with Zeaxanthin, 20 mg, 120 Veggie Softgels",
    link: "https://stackoverflow.com/questions/74421327/nextrouter-was-not-mounted-next-js",
    price: "$8.89",
    ratings: 48899,
    stars: 4,
    images: new Array(5).fill("https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01403/v/62.jpg")
  }),
};
