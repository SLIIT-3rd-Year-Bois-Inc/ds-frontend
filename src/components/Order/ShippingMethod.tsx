import React from "react";

function ShippingPaymentMethod() {
  return (
    <div className="flex flex-col p-4 bg-base-100 shadow-md">
      <div>
        <h3 className="text-lg font-semibold">Shipping Method</h3>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row items-center gap-2">
            <input type="radio" name="shipping" id="shipping1" />
            <label htmlFor="shipping1">DHL Shipping</label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input type="radio" name="shipping" id="shipping2" />
            <label htmlFor="shipping2">UPS Shipping</label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input type="radio" name="shipping" id="shipping3" />
            <label htmlFor="shipping3">FedEx Shipping</label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input type="radio" name="shipping" id="shipping4" />
            <label htmlFor="shipping4">DB Schenker Shipping</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingPaymentMethod;
