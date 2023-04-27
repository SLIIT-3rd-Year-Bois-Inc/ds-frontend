import { Portal } from "@components/Portal/Portal";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IProduct } from "../../model/types";

interface IOrderRowProps {
  onPressEdit?: (id: string) => void;
  onPressDelete?: (id: string) => void;
  order?: IProduct;
}

function OrderRow({ onPressEdit, order, onPressDelete }: IOrderRowProps) {
  return (
    <tr>
      <td>{order?.name}</td>
      <td>{order?.price}</td>
      <td className="truncate"></td>
      <td className="flex gap-2 justify-end">
        <label
          onClick={() => {
            onPressEdit && onPressEdit(order?._id || "");
          }}
          className="btn btn-md gap-2"
        >
          Edit
          <AiOutlineEdit size={18} />
        </label>
        <button
          onClick={() => {
            onPressDelete && onPressDelete(order?._id || "");
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

export default OrderRow;
