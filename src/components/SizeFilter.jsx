"use client";

const SizeFilter = ({ sizes = [], value = [], multiple = true, onChange }) => {
  const toggleSize = (size) => {
    let updated;
    if (multiple) {
      updated = value.includes(size)
        ? value.filter((s) => s !== size)
        : [...value, size];
    } else {
      updated = value === size ? null : size;
    }
    onChange?.(updated);
  };

  const isSelected = (size) =>
    multiple ? value.includes(size) : value === size;

  if (sizes.length === 0) {
    return <p className="text-sm text-gray-400">No sizes available</p>;
  }

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
