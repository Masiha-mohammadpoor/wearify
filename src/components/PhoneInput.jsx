"use client";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toSafeDefaultCountry } from "@/lib/validPhoneCountries";
import "@/styles/phone-input.css";

const PhoneNumberInput = ({ value, onChange, defaultCountry, label}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-sm font-semibold mb-2.5 pl-1">
        {label}
      </label>

      <PhoneInput
        international
        defaultCountry={toSafeDefaultCountry(defaultCountry)}
        value={value}
        onChange={onChange}
        className="phone-input-custom"
      />
    </div>
  );
};

export default PhoneNumberInput;
