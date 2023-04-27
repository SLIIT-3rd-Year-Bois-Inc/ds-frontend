import { Portal } from "@components/Portal/Portal";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import ProductEditor from "./ProductEditor";
import { IProduct } from "../../model/types";

interface IProductRowProps {
  onPressEdit?: (id: string) => void;
  onPressDelete?: (id: string) => void;
  product?: IProduct;
}

function ProductRow({ onPressEdit, product, onPressDelete }: IProductRowProps) {
  return (
    <tr>
      <td>{product?.name}</td>
      <td>{product?.price}</td>
      <td className="truncate">{truncate(product?.description ?? "", 20)}</td>
      <td className="flex gap-2 justify-end">
        <label
          onClick={() => {
            onPressEdit && onPressEdit(product?._id || "");
          }}
          className="btn btn-md gap-2"
        >
          Edit
          <AiOutlineEdit size={18} />
        </label>
        <button
          onClick={() => {
            onPressDelete && onPressDelete(product?._id || "");
          }}
          className="btn btn-error gap-2"
        >
          Delete
          <AiOutlineEdit size={18} />
        </button>
      </td>
    </tr>
  );
}

function truncate(str: string, max: number) {
  return str.length > max ? str.substr(0, max - 1) + "…" : str;
}

export default ProductRow;
