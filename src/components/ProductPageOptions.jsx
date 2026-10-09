"use client";
import Image from "next/image";
import { useState } from "react";
import { LuEuro } from "react-icons/lu";
import SizeSelector from "./SizeSelector";
import ColorSwatches from "./ColorSwatches";
import AddToCartButton from "./AddToCartButton";

const ProductPageOptions = ({ product }) => {
  console.log(product);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const selectedVariant =
    size && color
      ? product.variants.find((v) => v.color === color && v.size === size)
      : null;

  const variantId = selectedVariant?.id ?? null;

  const availableSizes = color
    ? new Set(
        product.variants
          .filter(
            (v) => v.color === color && v.availability_status === "active",
          )
          .map((v) => v.size),
      )
    : null;

  const unavailableSizes = availableSizes
    ? product.sizes.filter((s) => !availableSizes.has(s))
    : [];

  const handleColorSelect = (newColor) => {
    setColor(newColor);

    if (size) {
      const exists = product.variants.some(
        (v) =>
          v.color === newColor &&
          v.size === size &&
          v.availability_status === "active",
      );
      if (!exists) setSize(null);
    }
  };

  const displayPrice = selectedVariant?.retail_price ?? product.price;

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
          <p>
            <span className="text-red-500 mb-2 text-2xl">*</span>Select Size:
          </p>
          <SizeSelector
            sizes={product.sizes}
            selected={size}
            unavailable={unavailableSizes}
            onSelect={setSize}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p>
            <span className="text-red-500 mb-2 text-2xl">*</span>Select Color:
          </p>
          <ColorSwatches
            swatches={product.colorSwatches}
            selected={color}
            onSelect={handleColorSelect}
          />
        </div>
        <div className="font-semibold text-3xl flex items-start">
          <LuEuro className="text-red-900 text-3xl" /> {displayPrice}
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
