"use client";

import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];

const SizeFilter = ({ onChange }) => {
  const [selected, setSelected] = useState([]);

  const toggleSize = (size) => {
    const updated = selected.includes(size)
      ? selected.filter((s) => s !== size)
      : [...selected, size];

    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isActive = selected.includes(size);
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
