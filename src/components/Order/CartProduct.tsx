import Quantity from "@components/Product/Quanitity";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";

interface ICartProductProps {
  id?: string;
  name?: string;
  seller?: string;
  price?: number;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

function CartProduct({ id, name, seller, price, quantity }: ICartProductProps) {
  return (
    <div className="grid grid-rows-4 grid-cols-[min-content_minmax(0,_1fr)_min-content;] bg-base-100 shadow-md p-4">
      <div className="flex items-center col-span-4">
        <button className="btn btn-sm btn-ghost mr-1">
          <AiOutlineShop />
        </button>
        <div>{seller}</div>
      </div>
      <div className="row-span-3">
        <div className="pr-4 w-36">
          <img
            src="https://ae04.alicdn.com/kf/A9131b4c087744d0bb58014306d548d8fP.jpg"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="col-span-3 text-sm text-ellipsis truncate">
        {name}
      </div>
      <div className="text-sm">{price}</div>
      <Quantity quantity={quantity}/>
    </div>
  );
}

export default CartProduct;
