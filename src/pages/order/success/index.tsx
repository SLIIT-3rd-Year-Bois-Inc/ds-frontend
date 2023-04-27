import React from "react";

function PaymentSuccess() {
  return (
    <div className="mt-[calc(10vh+5em)]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-9xl text-green-500">🎉</div>
        <div className="text-4xl font-bold mt-6">Payment Successful</div>
        <div className="text-xl mt-2">Thank you for your purchase!</div>

        <div className="mt-8">
          <button className="btn btn-wide mr-2">Continue Shopping</button>
          <button className="btn btn-wide btn-secondary">View Order</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
