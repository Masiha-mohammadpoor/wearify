"use client";

const ColorSwatches = ({ swatches = [], selected, onSelect }) => {
  if (swatches.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {swatches.map(({ name, hex }) => {
        const isActive = selected === name;
        return (
          <button
            key={name}
            type="button"
            title={name}
            aria-label={name}
            onClick={() => onSelect?.(name)}
            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-200
              ${isActive ? "border-red-900 scale-110" : "border-gray-200"}`}
          >
            <span
              className="w-7 h-7 rounded-full border border-black/10"
              style={{ backgroundColor: hex || "#9ca3af" }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default ColorSwatches;
