import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";

const ProductCard = ({ product: { name, price, category, image } }) => {
  console.log(name, price, category, image);
  return (
    <article className="col-span-3 rounded-xl p-2 bg-[#f4ece4] h-fit">
      <div className="relative w-full h-50 rounded-xl overflow-hidden">
        <Image
          alt="product"
          src={image}
          unoptimized={true}
          fill
          className="absolute object-fill"
        />
      </div>
      <div className="mt-3 px-1.5">
        <div className="w-ful flex justify-between items-center">
          <span className="text-white rounded-full px-2 py-0.5 text-xs bg-red-900">
            {category}
          </span>
          <div className="text-xs flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <FaStar key={s} className="text-orange-600" />
            ))}
          </div>
        </div>
        <h3 className="mt-3 text-[16px]">{name}</h3>
        <div className="mt-4 w-full flex justify-between items-end pb-1">
          <span className="font-semibold text-lg flex items-center gap-x-0.5">
            <BiDollar className="text-red-900" /> {price}
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
