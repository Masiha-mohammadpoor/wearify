"use client";

const SizeSelector = ({
  sizes = [],
  selected = null,
  unavailable = [],
  onSelect,
}) => {
  if (sizes.length === 0) {
    return <p className="text-sm text-gray-400">No sizes available</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isActive = selected === size;
        const isUnavailable = unavailable.includes(size);

        return (
          <button
            key={size}
            type="button"
            disabled={isUnavailable}
            onClick={() => onSelect?.(isActive ? null : size)}
            className={`min-w-10 px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-red-900 border-red-900 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
              }
              ${isUnavailable ? "opacity-40 line-through cursor-not-allowed hover:border-gray-300" : "cursor-pointer"}`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};

export default SizeSelector;