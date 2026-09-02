"use client";

import { useState } from "react";
import { selectStyles } from "@/constants/selectStyles";
import { FaSortAmountDown } from "react-icons/fa";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });

const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "lth", label: "Low To Hight 💵" },
  { value: "htl", label: "Hight To Low 💵" },
];

const SortProducts = () => {
  const [sort, setSort] = useState(null);

  return (
    <section className="col-span-12 flex justify-end items-center gap-3 px-5 mb-3">
      <div className="flex items-center gap-x-3">
        <span className="flex items-center gap-x-2">
          <FaSortAmountDown className="text-red-900" /> Sort:
        </span>
        <Select
          options={options}
          onChange={setSort}
          defaultValue={sort}
          value={sort}
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
