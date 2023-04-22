import CartProduct from "@components/Order/CartProduct";
import OrderPaymentSummery from "@components/Order/OrderSummery";
import ShippingAddress from "@components/Order/ShippingAddress";
import React from "react";

function ConfirmOrder() {
  return (
    <div className="flex flex-row px-4 pt-8 gap-4">
      <div className="flex-[0.6]">
        <ShippingAddress className="mb-4" />
        
        <div className="grid gap-2">
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
      </div>
      <div className="flex-[0.4]">
      <OrderPaymentSummery />
      </div>
    </div>
  );
}

export default ConfirmOrder;
