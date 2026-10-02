"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { selectStyles } from "@/constants/selectStyles";
import { FaSortAmountDown } from "react-icons/fa";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });

const options = [
  { value: "price_asc", label: "Low To High 💵" },
  { value: "price_desc", label: "High To Low 💵" },
];

const SortProducts = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort");
  const selectedOption = options.find((o) => o.value === currentSort) || null;

  const handleChange = (option) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!option) {
      params.delete("sort");
    } else {
      params.set("sort", option.value);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="col-span-12 flex justify-end items-center gap-3 px-5 mb-3">
      <div className="flex items-center gap-x-3">
        <span className="flex items-center gap-x-2">
          <FaSortAmountDown className="text-red-900" /> Sort:
        </span>
        <Select
          options={options}
          isSearchable={false}
          onChange={handleChange}
          value={selectedOption}
          isClearable
          menuPlacement="auto"
          placeholder="select..."
          styles={selectStyles}
          className="w-44"
        />
      </div>
    </section>
  );
};

export default SortProducts;
