"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import {
  removeProductFromCart,
  updateProductQuantity,
} from "@/services/cartServices";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiDollar } from "react-icons/bi";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";

const CartClient = ({ cartItems }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [updatingKey, setUpdatingKey] = useState(null);

  const removeProductHandler = async (data) => {
    if (!session) {
      router.push("/login");
      return;
    }

    try {
      const res = await removeProductFromCart({ data });
      router.refresh();
      console.log(res);
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  const updateQuantityHandler = async (item, newQuantity) => {
    if (!session) {
      router.push("/login");
      return;
    }

    if (newQuantity < 1) return;

    const itemKey = `${item.productId}-${item.variantId}`;
    setUpdatingKey(itemKey);

    try {
      await updateProductQuantity({
        productId: item.productId,
        variantId: item.variantId,
        quantity: newQuantity,
      });
      router.refresh();
    } catch (err) {
      console.log(err.response?.data?.message);
    } finally {
      setUpdatingKey(null);
    }
  };

  return (
    <main className="grid grid-cols-12 gap-8 mt-10 mx-20 ">
      <h3 className="col-span-12 text-xl font-semibold">
        My Cart ( <span className="text-red-900">{cartItems.length}</span> item
        )
      </h3>
      <section className="col-span-8 flex flex-col gap-5">
        {cartItems.map((item) => {
          const itemKey = `${item.productId}-${item.variantId}`;
          const isUpdating = updatingKey === itemKey;

          return (
            <article
              key={itemKey}
              className="w-full rounded-2xl bg-[#f4ece4] p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-x-5">
                <div className="w-30 h-30 rounded-2xl relative bg-red-300 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} image`}
                    fill
                    className="object-fill absolute"
                  />
                </div>
                <div className="flex flex-col justify-between h-30 py-2">
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <span className="font-semibold flex items-center gap-x-0.5">
                    <BiDollar className="text-red-900 mb-1.5" /> {item.price}
                  </span>
                  <div className="flex items-center gap-x-3">
                    <div className="flex items-center gap-x-1">
                      size :
                      <span className="text-red-900 text-lg">{item.size}</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                      color :
                      <span className="text-red-900 text-lg flex items-center gap-x-1">
                        {item.color?.toLowerCase()}
                        <span
                          className="block w-7 h-7 rounded-full shadow-2xs"
                          style={{ backgroundColor: item.color?.toLowerCase() }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="h-8 flex overflow-hidden rounded-xl">
                  <button
                    onClick={() =>
                      updateQuantityHandler(item, item.quantity - 1)
                    }
                    disabled={isUpdating || item.quantity <= 1}
                    className="w-8 flex justify-center items-center bg-red-800 hover:bg-red-900 transition duration-300 text-white text-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaMinus />
                  </button>

                  <input
                    type="number"
                    min={1}
                    disabled={isUpdating}
                    onChange={(e) => {
                      const val =
                        e.target.value === "" ? 1 : Number(e.target.value);
                      updateQuantityHandler(item, Math.max(1, val));
                    }}
                    value={item.quantity}
                    className="outline-none border-2 border-red-800 w-12 text-center text-lg text-red-900 font-semibold"
                  />
                  <button
                    onClick={() =>
                      updateQuantityHandler(item, item.quantity + 1)
                    }
                    disabled={isUpdating}
                    className="w-8 flex justify-center items-center bg-red-800 hover:bg-red-900 transition duration-300 text-white text-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  onClick={() =>
                    removeProductHandler({
                      productId: item.productId,
                      variantId: item.variantId,
                    })
                  }
                  className="text-xl px-5 cursor-pointer"
                >
                  <FaTrashCan className="text-red-500 hover:text-red-800 transition duration-150" />
                </button>
              </div>
            </article>
          );
        })}
      </section>
      <section className="col-span-4 bg-blue-300">d</section>
    </main>
  );
};

export default CartClient;
