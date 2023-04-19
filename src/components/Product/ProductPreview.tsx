import React from "react";
import { IProduct } from "../../model/types";
import Link from "next/link";
import Ratings from "./Ratings";

interface IProductPreview {
  product?: IProduct;
}

function ProductPreview({ product }: IProductPreview) {
  return (
    <div className="grid grid-rows-[repeat(6,_minmax(0,_1fr))] h-[60vh] justify-center">
      <div className="row-span-5 space-x-4 mb-3">
        <img
          src={
            product?.images && product.images.length ? product.images[0] : ""
          }
          alt="product preview"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="carousel carousel-center justify-center space-x-4">
        {product?.images?.map((i) => {
          return (
            <div className="carousel-item" key={i}>
              <img
                src={i}
                alt="product preview"
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPreview;
