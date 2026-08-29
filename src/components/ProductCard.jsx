import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";

const ProductCard = () => {
  return (
    <article className="col-span-3 rounded-xl p-2 bg-[#f4ece4]">
      <div className="relative w-full h-44 rounded-xl overflow-hidden">
        <Image alt="product" src="/images.jpeg" fill className="object-cover" />
      </div>
      <div className="mt-3 px-2">
        <div className="w-ful flex justify-between items-center">
          <span className="text-white rounded-full px-2 py-0.5 text-xs bg-red-900">
            T-Shirt
          </span>
          <div className="text-xs flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <FaStar key={s} className="text-orange-600" />
            ))}
          </div>
        </div>
        <h3 className="mt-3 text-[16px]">Ferrari Design T-shirt</h3>
        <div className="mt-4 w-full flex justify-between items-center pb-1">
          <span className="font-semibold text-lg flex items-center gap-x-0.5">
            <BiDollar className="text-red-900" /> 25
          </span>
          <button className="bg-red-900 py-1 px-1.5 rounded-xl text-white text-sm cursor-pointer flex items-center justify-center gap-x-1">
            Add To Cart <BiCartAdd className="text-lg mb-0.75" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
