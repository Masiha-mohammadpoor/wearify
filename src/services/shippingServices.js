import { http } from "./httpService";

export const getShippingOptions = (data) => {
  return http.post("/shipping/rates", data).then((res) => res.data);
};
