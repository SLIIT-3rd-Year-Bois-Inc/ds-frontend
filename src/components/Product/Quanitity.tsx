import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface IQuantityProps {
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

function Quantity({ quantity = 0, onQuantityChange }: IQuantityProps) {
  return (
    <div className="form-control">
      <label className="input-group-sm flex items-center justify-center">
        <button
          onClick={() => {
            onQuantityChange && onQuantityChange(quantity + 1);
          }}
          className="btn btn-sm btn-circle rounded-r-lg"
        >
          <AiOutlinePlus />
        </button>
        <input
          type="text"
          placeholder="Qty"
          size={2}
          className="input-sm input-bordered"
          value={quantity}
          onInput={(e) => {
            onQuantityChange && onQuantityChange(Number(e.currentTarget.value));
          }}
        />
        <button
          onClick={() => {
            onQuantityChange && onQuantityChange(quantity - 1);
          }}
          className="btn btn-sm btn-circle rounded-l-lg"
        >
          <AiOutlineMinus />
        </button>
      </label>
    </div>
  );
}

export default Quantity;
