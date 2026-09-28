"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { VscFilter } from "react-icons/vsc";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbCut } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Checkbox from "./Input";
import SizeFilter from "./SizeFilter";
import PriceRangeSlider from "./PriceRangeSlider";

const Filters = ({ options, activeFilters = {} }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategories =
    activeFilters.category?.split(",").filter(Boolean) || [];
  const activeSizes = activeFilters.size?.split(",").filter(Boolean) || [];

  const updateParams = (updates) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, val]) => {
      if (!val || (Array.isArray(val) && val.length === 0)) {
        params.delete(key);
      } else {
        params.set(key, Array.isArray(val) ? val.join(",") : val);
      }
    });
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const toggleCategory = (category) => {
    const next = activeCategories.includes(category)
      ? activeCategories.filter((c) => c !== category)
      : [...activeCategories, category];
    updateParams({ category: next });
  };

  return (
    <article>
      <h2 className="flex items-center gap-x-2 text-xl font-semibold">
        Filters <VscFilter className="text-red-900" />
      </h2>
      <span className="block w-[95%] h-px bg-red-900 my-3 mx-auto"></span>
      <div className="flex flex-col gap-y-5 mt-4">
        {/* category */}
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-x-2 mb-2">
            <BiSolidCategoryAlt className="text-red-900" /> Category
          </h3>
          <div className="flex flex-col justify-center items-start">
            {options.categories.length === 0 ? (
              <p className="text-sm text-gray-400">No categories available</p>
            ) : (
              options.categories.map((category) => (
                <Checkbox
                  key={category}
                  label={category}
                  checked={activeCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
              ))
            )}
          </div>
        </div>
        {/* size */}
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-x-2 mb-2">
            <TbCut className="text-red-900" /> Size
          </h3>
          <SizeFilter
            multiple
            sizes={options.sizes}
            value={activeSizes}
            onChange={(sizes) => updateParams({ size: sizes })}
          />
        </div>
        {/* price */}
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-x-2 mb-2">
            <RiMoneyDollarCircleFill className="text-red-900" /> Price Range
          </h3>
          <PriceRangeSlider
            key={`${options.minPrice}-${options.maxPrice}`}
            min={options.minPrice}
            max={options.maxPrice}
            value={[
              activeFilters.minPrice
                ? Number(activeFilters.minPrice)
                : options.minPrice,
              activeFilters.maxPrice
                ? Number(activeFilters.maxPrice)
                : options.maxPrice,
            ]}
            onChange={([min, max]) =>
              updateParams({ minPrice: min, maxPrice: max })
            }
          />
        </div>
      </div>
    </article>
  );
};

export default Filters;
