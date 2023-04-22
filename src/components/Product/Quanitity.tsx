import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Quantity() {
  return (
    <div className="form-control">
      <label className="input-group-sm flex items-center justify-center">
        <button className="btn btn-sm btn-circle rounded-r-lg">
          <AiOutlinePlus />
        </button>
        <input
          type="text"
          placeholder="10"
          size={2}
          className="input-sm input-bordered"
        />
        <button className="btn btn-sm btn-circle rounded-l-lg">
          <AiOutlineMinus />
        </button>
      </label>
    </div>
  );
}

export default Quantity;
