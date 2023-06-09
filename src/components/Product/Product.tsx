"use client";
import React from "react";
import { IProduct } from "../../model/types";
import { useRouter } from "next/navigation";
import { BsCartPlus } from "react-icons/bs";
import { useMutation } from "react-query";
import axios from "axios";
import { Config } from "../../config/endpoints";

function ProductCard({ name, price, link, ratings, _id: id, stars }: IProduct) {
  const router = useRouter();
  const buyNowMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await axios.post(`${Config.apiEndpoint}/orders/orders/`);
      return res;
    },
  });

  return (
    <div className="carousel-item flex flex-col w-64 bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01403/v/62.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="p-[1em]">
        <h1>{name}</h1>
        <div className="flex flex-row items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="pl-2">{ratings}</div>
        </div>
        <div className="card-actions justify-end items-center">
          <div>{price}</div>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              router.push("/product/" + id);
            }}
          >
            Buy Now
          </button>
          <button className="btn btn-accent btn-circle">
            <BsCartPlus size={20} className="fill-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
