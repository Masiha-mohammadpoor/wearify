"use client";
import { VscFilter } from "react-icons/vsc";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbCut } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Input from "./Input";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import PriceRangeSlider from "./PriceRangeSlider";

const Filters = () => {
  return (
    <article>
      <h2 className="flex items-center gap-x-2 text-xl font-semibold">
        Filters <VscFilter className="text-red-900" />
      </h2>
      <span className="block w-[95%] h-px bg-red-900 my-3 mx-auto"></span>
      <div className="flex flex-col gap-y-5 mt-4">
        {/* category */}
        <div>
          <h3 className="text-xl fnt-semibold flex items-center gap-x-2 mb-2">
            <BiSolidCategoryAlt className="text-red-900" /> Category
          </h3>
          <div>
            <div className="flex flex-col justify-center  items-start">
              <Input type="checkbox" label="T-Shirt" />
              <Input type="checkbox" label="T-Shirt" />
              <Input type="checkbox" label="T-Shirt" />
            </div>
          </div>
        </div>
        {/* size */}
        <div>
          <h3 className="text-xl fnt-semibold flex items-center gap-x-2 mb-2">
            <TbCut className="text-red-900" /> Size
          </h3>
          <div>
            <SizeFilter multiple/>
          </div>
        </div>
        {/* color */}
        <div>
          <h3 className="text-xl fnt-semibold flex items-center gap-x-2 mb-2">
            <IoIosColorPalette className="text-red-900" /> Color
          </h3>
          <div>
            <ColorFilter multiple />
          </div>
        </div>
        {/* price */}
        <div>
          <h3 className="text-xl fnt-semibold flex items-center gap-x-2 mb-2">
            <RiMoneyDollarCircleFill className="text-red-900" /> Price Range
          </h3>
          <div>
            <PriceRangeSlider />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Filters;
