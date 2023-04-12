import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Carousel from "@components/Home/Carousel";
import ProductCard from "@components/Product/Product";
import { useQuery } from "react-query";
import { getProducts } from "../api/Rest";
import { ProductsResponse } from "../model/types";
import Layout from "@components/Layout";

export default function Home() {
  const productsQuery = useQuery<ProductsResponse>(["products"], getProducts);

  return (
    <Layout>
      <main>
        <Carousel />
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          {productsQuery.data?.products.map((p) => {
            return <ProductCard {...p} />;
          })}
        </div>
      </main>
    </Layout>
  );
}
