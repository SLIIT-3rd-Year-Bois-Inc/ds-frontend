import Header from "@components/Header";
import CartProduct from "@components/Order/CartProduct";
import React, { useEffect, useState } from "react";
import { getCart } from "../../utils/cart";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: ILayoutProps) {
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);
  const router = useRouter();
  
  useEffect(() => {
    let s = getCart();
    setCart(Object.keys(s).map((key) => ({ id: key, qty: s[key] })));
  }, []);

  const checkout = () => {
    router.push("/order/confirm");
  }

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w- bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div className="p-2 text-lg font-bold">Your Cart</div>
            <div>
              {cart.map((product) => (
                <CartProduct
                  seller="SinoVoip Co.,Limited Banana PI"
                  name="Banana Pi BPI-M2 Berry Allwinner A40i Quad-core"
                  price={32.99}
                  quantity={product.qty}
                />
              ))}
            </div>
            <div className="flex-grow"></div>
            <div className="flex justify-center p-8">
              <button className="btn btn-wide" onClick={checkout}>Checkout</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Layout;
