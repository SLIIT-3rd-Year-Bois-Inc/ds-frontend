import { Portal } from "@components/Portal/Portal";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import SellerEditor from "./SupplierEditor";
import { ISeller } from "../../model/types";

interface ISellerRowProps {
  onPressEdit?: (id: string) => void;
  onPressDelete?: (id: string) => void;
  product?: ISeller;
}

function SellerRow({ onPressEdit, product, onPressDelete }: ISellerRowProps) {
  return (
    <tr>
      <td>{product?.name}</td>
      <td>{product?.store_name}</td>
      <td className="truncate"></td>
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

export default SellerRow;
