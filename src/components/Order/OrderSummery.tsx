import { useRouter } from "next/router";
import React from "react";

function OrderPaymentSummery() {
  const router = useRouter();

  const pay = () => {
    // TODO: pay
    router.push("/order/success");  
  };
  
  return (
    <div className="grid grid-cols-2 grid-rows-[repeat(7,min-content)] justify-between prose p-4 bg-base-100 shadow-md">
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
        <button className="btn btn-wide mt-6" onClick={pay}>Pay now</button>
      </div>
      <p className="text-center text-sm w-full col-span-2">
        Upon clicking &apos;Pay Now&apos;, I confirm I have read and acknowledged all
        terms and policies.
      </p>
      <div className="col-span-2">
        <div className=" font-bold">Herbal Haven</div>
        <div>Herbal Haven keep your payment safe</div>
      </div>
    </div>
  );
}

export default OrderPaymentSummery;
