import React from "react";
import { FaCcVisa } from "react-icons/fa";

function PaymentMethod() {
  return (
    <div className="flex flex-col p-4 bg-base-100 shadow-md">
      Select Payment Method
      <div className="flex gap-2">
        {new Array(4).fill(0).map((_, i) => (
          <div className="w-[6em] p-2 border-accent border-2 rounded-lg">
            <FaCcVisa/>
            <div className="text-sm">Ending with **23</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;
