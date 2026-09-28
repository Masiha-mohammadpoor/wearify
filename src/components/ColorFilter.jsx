"use client";

const ColorFilter = ({
  colors = [],
  value = [],
  multiple = true,
  onChange,
}) => {
  const toggleColor = (color) => {
    let updated;
    if (multiple) {
      updated = value.includes(color)
        ? value.filter((c) => c !== color)
        : [...value, color];
    } else {
      updated = value === color ? null : color;
    }
    onChange?.(updated);
  };

  const isSelected = (color) =>
    multiple ? value.includes(color) : value === color;

  if (colors.length === 0) {
    return <p className="text-sm text-gray-400">No colors available</p>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => {
        const isActive = isSelected(color);
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
