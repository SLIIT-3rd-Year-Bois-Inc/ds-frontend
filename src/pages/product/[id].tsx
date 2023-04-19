import Layout from "@components/Layout";
import ProductPreview from "@components/Product/ProductPreview";
import React from "react";
import { useQuery } from "react-query";
import { getProductDetails } from "../../api/Rest";
import { useRouter } from "next/router";
import Link from "next/link";
import Ratings from "@components/Product/Ratings";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ReviewContainer from "@components/Product/ReviewContainer";

function ProductPage() {
  const router = useRouter();
  const pid = router.query;

  const productDetailsQuery = useQuery(["product-details"], getProductDetails);
  const product = productDetailsQuery.data?.product;

  console.log("PID " + pid);
  return (
    <Layout>
      <main>
        <div className="flex justify-evenly items-center flex-col">
          <div className="grid grid-cols-2 max-w-7xl">
            {/* Product Preview */}
            <ProductPreview product={product} />
            {/* Product functions  */}
            <div className="grid grid-rows-6">
              <div className="row-span-5">
                <div className="prose py-4 px-2">
                  <h4>{product?.name}</h4>
                  <div className="text-sm">
                    Brought to you by{" "}
                    <Link href={"/"}>{"Sketchy health brand"}</Link>
                  </div>
                  <div className="flex flex-row items-center">
                    <Ratings />
                    <div className="text-sm pt-1 pl-1">{54645} Reviews</div>
                  </div>
                </div>
              </div>
              <div className="flex items-end">
                <div className="w-full flex justify-center items-center">
                  <div className="form-control pr-2">
                    <label className="input-group-sm flex items-center justify-center">
                      <button className="btn btn-sm btn-circle rounded-r-lg">
                        <AiOutlinePlus />
                      </button>
                      <input
                        type="text"
                        placeholder="10"
                        size={2}
                        className="input-sm input-bordered"
                      />
                      <button className="btn btn-sm btn-circle rounded-l-lg">
                        <AiOutlineMinus />
                      </button>
                    </label>
                  </div>
                  <button className="btn btn-wide">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          {/* Product reviews / etc  */}
          <div className="w-full max-w-7xl p-4">
            <div className="tabs">
              <a className="tab tab-bordered">About this product</a>
              <a className="tab tab-bordered tab-active">Customer Reviews</a>
            </div>
            <div>
              <ReviewContainer />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ProductPage;
