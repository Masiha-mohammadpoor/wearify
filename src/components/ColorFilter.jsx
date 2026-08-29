"use client";

import { useState } from "react";

const colors = [
  "#000000",
  "#FFFFFF",
  "#EF4444",
  "#3B82F6",
  "#22C55E",
  "#EAB308",
  "#EC4899",
  "#6B7280",
];

const ColorFilter = ({ onChange }) => {
  const [selected, setSelected] = useState([]);

  const toggleColor = (hex) => {
    const updated = selected.includes(hex)
      ? selected.filter((c) => c !== hex)
      : [...selected, hex];

    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => {
        const isActive = selected.includes(color);
        return (
          <button
            key={color}
            type="button"
            onClick={() => toggleColor(color)}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center
              ${isActive ? "border-red-900 scale-110" : "border-gray-200"}`}
          >
            <span
              className="w-6 h-6 rounded-full border border-black/10"
              style={{ backgroundColor: color }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default ColorFilter;
