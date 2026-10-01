import { getCountries } from "react-phone-number-input";

const VALID_CODES = new Set(getCountries());

export function toSafeDefaultCountry(code) {
  return VALID_CODES.has(code) ? code : undefined;
}