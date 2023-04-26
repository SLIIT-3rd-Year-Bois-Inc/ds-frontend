import CartProduct from "@components/Order/CartProduct";
import OrderPaymentSummery from "@components/Order/OrderSummery";
import ShippingAddress from "@components/Order/ShippingAddress";
import React, { useEffect, useState } from "react";
import { getCart } from "../../../utils/cart";

function ConfirmOrder() {
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);

  useEffect(() => {
    let s = getCart();
    setCart(Object.keys(s).map((key) => ({ id: key, qty: s[key] })));
  }, []);

  return (
    <div className="flex flex-row px-4 pt-8 gap-4">
      <div className="flex-[0.6]">
        <ShippingAddress className="mb-4" />

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
      <div className="flex-[0.4]">
        <OrderPaymentSummery />
      </div>
    </div>
  );
}

export default ConfirmOrder;
