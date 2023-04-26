import CartProduct from "@components/Order/CartProduct";
import OrderPaymentSummery from "@components/Order/OrderSummery";
import ShippingAddress from "@components/Order/ShippingAddress";
import React, { useEffect, useState } from "react";
import { getCart } from "../../../utils/cart";
import OrderPaymentMethod from "@components/Order/PaymentMethod";
import ShippingPaymentMethod from "@components/Order/ShippingMethod";

function ConfirmOrder() {
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);

  useEffect(() => {
    let s = getCart();
    setCart(Object.keys(s).map((key) => ({ id: key, qty: s[key] })));
  }, []);

  return (
    <div className="grid grid-cols-2 px-8 pt-8 gap-4 justify-evenly">
      <div className="flex flex-col gap-3">
        <ShippingAddress className="mb-4" />
        <OrderPaymentMethod />
        <ShippingPaymentMethod />
        <div className="grid gap-2">
          {cart.map((product) => (
            <CartProduct
              seller="SinoVoip Co.,Limited Banana PI"
              name="Banana Pi BPI-M2 Berry Allwinner A40i Quad-core"
              price={32.99}
              quantity={product.qty}
            />
          ))}
        </div>
      </div>
      <div className="ml-4">
        <OrderPaymentSummery />
      </div>
    </div>
  );
}

export default ConfirmOrder;
