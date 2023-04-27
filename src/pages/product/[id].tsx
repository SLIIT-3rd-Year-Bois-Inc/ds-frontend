import Layout from "@components/Layout/MainLayout";
import ProductPreview from "@components/Product/ProductPreview";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductDetails } from "../../api/Rest";
import { useRouter } from "next/router";
import Link from "next/link";
import Ratings from "@components/Product/Ratings";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ReviewContainer from "@components/Product/ReviewContainer";
import Quantity from "@components/Product/Quanitity";
import { number } from "yup";
import { getCart, saveCart } from "../../utils/cart";

function ProductPage() {
  const router = useRouter();
  let { id } = router.query;
  let pid = "";

  if (Array.isArray(id)) {
    pid = id[0];
  } else {
    pid = id || "";
  }

  const getProductQtyFromStorage = (id: string) => {
    let cart = getCart();
    return cart[id];
  };

  const productDetailsQuery = useQuery(["product-details"], getProductDetails);
  const product = productDetailsQuery.data?.product;
  const [qty, setQty] = useState(1);

  const addToCart = (pid: string) => {
    try {
      let cart = getCart();

      console.log(cart, typeof cart);
      cart[pid] = qty;
      saveCart(cart);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setQty(getProductQtyFromStorage(pid) || 1);
  }, [pid]);
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
                <div className="w-full flex justify-center items-center gap-4">
                  {/* Quantity */}
                  <Quantity quantity={qty} onQuantityChange={setQty} />
                  <button
                    className="btn btn-wide"
                    onClick={() => {
                      addToCart(pid);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-2">
                <button className="btn btn-wide">Buy now</button>
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
