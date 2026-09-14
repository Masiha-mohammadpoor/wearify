"use client";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { addToCart } from "@/services/cartServices";
import { PiSealWarning } from "react-icons/pi";

export default function AddToCartButton({
  productId,
  variantId,
  quantity,
  setQuantity,
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!session) {
      router.push("/login");
      return;
    }

    setLoading(true);

    try {
      const data = { productId, variantId, quantity };
      const response = await addToCart(data);
      if (!response.success) {
        throw new Error(response.data.error || "Failed to add to cart");
      }

      router.refresh();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center gap-x-3">
      {variantId && (
        <div className="h-11 flex overflow-hidden rounded-xl">
          <button
            onClick={decreaseQuantity}
            className="w-13 flex justify-center items-center bg-red-800 hover:bg-red-900 transition duration-300 text-white text-2xl cursor-pointer"
          >
            <FaMinus />
          </button>

          <input
            type="number"
            min={1}
            onChange={(e) => {
              const val = e.target.value === "" ? 1 : Number(e.target.value);
              setQuantity(Math.max(1, val));
            }}
            value={quantity}
            className="outline-none border-2 border-red-800 w-16 text-center text-2xl text-red-900 font-semibold"
          />
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="w-13 flex justify-center items-center bg-red-800 hover:bg-red-900 transition duration-300 text-white text-2xl cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      )}
      <div className="w-full flex items-center gap-x-2">
        <button
          onClick={handleAddToCart}
          disabled={loading || !variantId}
          className="w-1/2 bg-red-800 text-white h-11 flex justify-center items-center rounded-xl cursor-pointer hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
        >
          {loading ? "Adding..." : "Add to cart"}
        </button>
        {!variantId && (
          <p className="text-red-500 text-lg flex items-center gap-x-1">
            <PiSealWarning className="text-2xl" /> please select size & color
          </p>
        )}
      </div>
    </div>
  );
}
