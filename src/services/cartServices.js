import { http } from "./httpService";

export const getCartData = () => {
  return http.get(`/cart`).then((res) => res.data);
};

export const addToCart = (data) => {
  return http.post("/cart/add", data).then((res) => res.data);
};

export const removeProductFromCart = (data) => {
  return http.delete("/cart/remove", data).then((res) => res.data);
};

export const updateProductQuantity = (data) => {
  return http.put("/cart/update", data).then((res) => res.data);
};

