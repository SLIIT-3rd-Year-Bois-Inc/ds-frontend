import { getProducts } from "@api/Rest";
import ProductCard from "@components/Product/Product";
import { ProductsResponse } from "@model/types";
import React from "react";
import { useQuery } from "react-query";

function CustomerProductView() {
  const productsQuery = useQuery<ProductsResponse>(["products"], getProducts);
  const categories: { [key: string]: number } = {
    "Minerals & Supplements": 13,
    "Vitamins & Supplements": 4,
    "Herbal Supplements": 5,
    "Sports Supplements": 5,
    "Weight Loss Supplements": 5,
    "Beauty Supplements": 6,
    "Health Supplements": 4,
    "Dietary Supplements": 6,
  };

  return (
    <div className="grid grid-cols-[calc(10%+11em)_auto] grid-rows-[auto_auto]">
      <div className="flex justify-center col-span-2 p-4">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              size={40}
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-8">
        {Object.keys(categories).map((c) => {
          return (
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>
                {c} ({categories[c]})
              </span>
            </div>
          );
        })}

        <div className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <label className="input-group input-xs">
              <span>Price</span>
              <input
                type="text"
                placeholder="10"
                size={4}
                className="input input-bordered input-xs"
              />
              <span>USD</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">To</span>
            </label>
            <label className="input-group input-xs">
              <span>Price</span>
              <input
                type="text"
                placeholder="10"
                size={4}
                className="input input-bordered input-xs"
              />
              <span>USD</span>
            </label>
            <div className="px-2 mt-3">
              <button className="btn btn-xs">apply</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {productsQuery.data?.products.map((p) => {
          return <ProductCard key={p._id} {...p} />;
        })}
      </div>
    </div>
  );
}

export default CustomerProductView;
