import React from "react";

function OrderPaymentSummery() {
  return (
    <div className="grid flex-grow grid-cols-2 grid-rows-[repeat(7,min-content)] justify-between prose p-4">
      <h2 className="col-span-2">Summary</h2>
      <div>Total item cost</div>
      <div className="text-right">SG$ 4.01</div>
      <div>Saved</div>
      <div className="text-right">SG$ 0.00</div>
      <div>Total shipping</div>
      <div className="text-right">Free</div>
      <div className="text-xl font-bold">Total</div>
      <div className="text-xl font-bold text-right">SG$ 3.93</div>
      <div className="flex items-center justify-center col-span-2">
        <button className="btn btn-wide mt-6">Pay now</button>
      </div>
    </div>
  );
}

export default OrderPaymentSummery;
