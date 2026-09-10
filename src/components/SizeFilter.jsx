"use client";

import { useState } from "react";

const SizeFilter = ({ 
  sizes = ["S", "M", "L", "XL", "XXL"], 
  multiple = false, 
  onChange 
}) => {
  const [selected, setSelected] = useState(multiple ? [] : null);

  const toggleSize = (size) => {
    let updated;

    if (multiple) {
      updated = selected.includes(size)
        ? selected.filter((s) => s !== size)
        : [...selected, size];
    } else {
      updated = selected === size ? null : size;
    }

    setSelected(updated);
    onChange?.(updated);
  };

  const isSelected = (size) => {
    if (multiple) {
      return selected.includes(size);
    } else {
      return selected === size;
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isActive = isSelected(size);
        return (
          <button
            key={size}
            type="button"
            onClick={() => toggleSize(size)}
            className={`min-w-10 px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-red-900 border-red-900 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};

export default SizeFilter;