export type Cart = { [key: string]: number };

export const getCart = (): Cart => {
  let s = sessionStorage.getItem("cart");

  if (s) {
    return JSON.parse(s);
  }
  sessionStorage.setItem("cart", JSON.stringify({}));
  return {};
};

export const saveCart = (c: Cart) => {
  sessionStorage.setItem("cart", JSON.stringify(c));
};
