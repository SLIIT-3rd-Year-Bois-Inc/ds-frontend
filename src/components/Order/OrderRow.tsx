import { Portal } from "@components/Portal/Portal";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IProduct } from "../../model/types";

interface IProductRowProps {
  onPressEdit?: (id: string) => void;
  product?: IProduct;
}

function ProductRow({ onPressEdit, product }: IProductRowProps) {
  return (
    <tr>
      <td>{product?.name}</td>
      <td>{product?.price}</td>
      <td className="truncate"></td>
      <td className="flex gap-2">
        <label
          onClick={() => {
            onPressEdit && onPressEdit(product?.id || "");
          }}
          className="btn btn-md gap-2"
        >
          Edit
          <AiOutlineEdit size={18} />
        </label>
        <button className="btn btn-error gap-2">
          Delete
          <AiOutlineEdit size={18} />
        </button>
        <select className="select select-bordered">
          <option>Placed</option>
          <option>Greedo</option>
        </select>
      </td>
    </tr>
  );
}

export default ProductRow;
