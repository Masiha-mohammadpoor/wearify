"use client";
import ProductCard from "@/components/ProductCard";
import { selectStyles } from "@/constants/selectStyles";
import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import dynamic from "next/dynamic";
import Filters from "@/components/Filters";
const Select = dynamic(() => import("react-select"), { ssr: false });
const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "lth", label: "Low To Hight 💵" },
  { value: "htl", label: "Hight To Low 💵" },
];
const Products = () => {
  const [sort, setSort] = useState(null);
  return (
    <main className="grid grid-cols-12 px-4 gap-4 my-10">
      {/* sort */}
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
      {/* filters */}
      <section className="col-span-3 bg-[#f4ece4] h-fit self-start sticky top-18 p-4 rounded-xl">
        <Filters />
      </section>
      {/* products */}
      <section className="col-span-9 grid grid-cols-12 gap-3 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
};
export default Products;
