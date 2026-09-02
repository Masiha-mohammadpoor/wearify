import { unstable_cache } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const getCachedProducts = unstable_cache(
  async () => {
    const response = await fetch(`${BASE_URL}/api/products`, {
      // disable cache
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data.data || [];
  },
  ["all-products"],
  {
    revalidate: 3600,
    tags: ["products"],
  },
);

export const getProductById = unstable_cache(
  async (id) => {
    const response = await fetch(`${BASE_URL}/api/products/${id}`, {
      // disable cache
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Product not found");
    }

    const data = await response.json();
    return data.data || null;
  },
  ["product-details"],
  {
    revalidate: 3600,
  },
);
