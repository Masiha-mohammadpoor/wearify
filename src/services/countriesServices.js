import { http } from "./httpService";

export const getCountries = () => {
  return http.get(`/countries`).then((res) => res.data);
};
