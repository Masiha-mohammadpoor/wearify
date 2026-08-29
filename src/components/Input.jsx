"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      dir="rtl"
      className="flex items-center gap-x-2 cursor-pointer select-none group"
    >
      <span className="text-gray-700 text-base">{label}</span>
      <span
        onClick={() => setChecked((c) => !c)}
        className={`w-4 h-4 rounded-md border-2 flex items-center justify-center transition-all duration-200 ease-out
          ${
            checked
              ? "bg-red-900 border-red-900 scale-105"
              : "bg-white border-gray-300 group-hover:border-gray-400"
          }`}
      >
        <Check
          size={16}
          strokeWidth={3}
          className={`text-white transition-all duration-300 ${
            checked ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </span>
    </label>
  );
};
export default Checkbox;
