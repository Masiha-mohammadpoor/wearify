import Link from "next/link";
import { BiDollar } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaBox } from "react-icons/fa6";

const OrderHistory = () => {
  return (
    <main className="col-span-8 pt-10 px-12 flex flex-col gap-y-8 h-screen overflow-y-scroll">
      <h1 className="text-2xl font-semibold flex gap-4 items-center">
        Order History
      </h1>
      <section className="w-full flex flex-col gap-y-5">
        {/* order */}
        <article className="w-full mt-8 flex flex-col gap-y-3">
          <div className="relative mb-2">
            <h3 className="absolute -bottom-2 z-10 px-3 bg-[#FDF8F6] text-sm font-semibold">
              September 16 , 2026 ( 2 Items )
            </h3>
            <span className="absolute bottom-0 -z-10 inline-block bg-red-800 w-full h-px"></span>
          </div>
          {/* products */}
          <div className="w-full rounded-xl bg-[#f4ece4]">
            <div className="w-full p-5 flex justify-between items-center border-b border-b-[#ead2cc]">
              <div className="flex gap-4">
                <div>
                  <div className="relative w-35 h-35 rounded-xl overflow-hidden bg-white">
                    image
                  </div>
                </div>
                <div className="h-35 flex flex-col justify-between py-2">
                  <h3 className="text-lg font-semibold">
                    Classic Oversized T-shirt
                  </h3>
                  <p className="text-[#8e7973] flex items-center">
                    Color : Black
                    <span className="block w-5 h-5 rounded-full shadow-2xs bg-black mx-2"></span>
                    / Size : L
                  </p>
                  <p className="text-[#8e7973]">Quantity : 2</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="flex items-center text-xl">
                  <BiDollar className="text-red-900 mb-1.25" /> 35
                </p>
                <Link
                  href="/products"
                  className="flex items-center px-3 py-1 rounded-xl bg-red-900 text-white"
                >
                  View <IoIosArrowForward className="mb-px" />
                </Link>
              </div>
            </div>
            {/* total */}
            <div className="w-full flex items-center justify-between bg-[#eadfd7] p-4 rounded-b-xl">
              <h3 className="text-[#8e7973] flex items-center gap-x-2 text-lg">
                <FaBox className="mb-1" /> Delivered
              </h3>
              <p className="text-lg flex items-center font-semibold">
                Total : <BiDollar className="mb-1" /> 90
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default OrderHistory;
