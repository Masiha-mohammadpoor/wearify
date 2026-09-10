"use client";
import Image from "next/image";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import { BiDollar } from "react-icons/bi";
import AddToCartButton from "./AddToCartButton";
import { useEffect, useState } from "react";

const ProductPageOptions = ({ product }) => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("White");
  const [variantId, SetVariantId] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (size && color) {
      product.variants.map((variant) => {
        if (variant.color === color && variant.size === size) {
          SetVariantId(variant.id);
        }
      });
    }
  }, [size, color]);

  return (
    <main className="grid grid-cols-12 gap-4 mt-10 mx-20">
      <section className="col-span-5">
        <div className="relative w-110 h-110 rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={`${product.name} image`}
            fill
            className="absolute object-fill"
          />
        </div>
      </section>
      <section className="col-span-7 flex flex-col gap-7 py-2">
        <span className="w-fit text-white rounded-full px-2 py-0.5 text-sm bg-red-900 font-semibold">
          {product.category}
        </span>
        <h3 className="font-bold text-3xl">{product.name}</h3>
        <div className="flex flex-col gap-y-1">
          <p>Select Size:</p>
          <SizeFilter
            sizes={product.sizes}
            onChange={(value) => setSize(value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p>Select Color:</p>
          <ColorFilter />
        </div>
        <div className="font-semibold text-3xl flex items-start">
          <BiDollar className="text-red-900 text-3xl" /> {product.price}
        </div>
        <AddToCartButton
          variantId={variantId}
          productId={product.id}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </section>
    </main>
  );
};

export default ProductPageOptions;
