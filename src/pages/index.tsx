import Carousel from "@components/Home/Carousel";
import ProductCard from "@components/Product/Product";
import { useQuery } from "react-query";
import { getProducts } from "../api/Rest";
import { ProductsResponse } from "../model/types";
import Layout from "@components/Layout/MainLayout";

export default function Home() {
  const productsQuery = useQuery<ProductsResponse>(["products"], getProducts);

  return (
    <Layout>
      <main>
        <Carousel />

        <div className="pl-4 pt-4 font-bold text-lg">Recommended for you</div>
        <div className="carousel carousel-center p-4 space-x-4">
          {productsQuery.data?.products.map((p) => {
            return <ProductCard key={p.id} {...p} />;
          })}
        </div>


      </main>
    </Layout>
  );
}
