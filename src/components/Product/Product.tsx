import React from "react";

function ProductCard() {
  return (
    <div className=" card-normal w-64 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01403/v/62.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          California Gold Nutrition, Lutein with Zeaxanthin, 20 mg, 120 Veggie
          Softgels
        </h2>
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
          <div className="pl-2">44334</div>
        </div>
        <div className="card-actions justify-end items-center">
          <div>$8.86</div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
