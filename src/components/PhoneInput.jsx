"use client";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toSafeDefaultCountry } from "@/lib/validPhoneCountries";
import "@/styles/phone-input.css";

const PhoneNumberInput = ({ value, onChange,onBlur, defaultCountry, label , error}) => {
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
        onBlur={onBlur}
        className="phone-input-custom"
      />
      {error ? (
        <p className="text-xs text-red-500 mt-1.5 ml-1">{error}</p>
      ) : (
        <p className="text-xs text-transparent mt-1.5 ml-1">.</p>
      )}
    </div>
  );
};

export default PhoneNumberInput;
