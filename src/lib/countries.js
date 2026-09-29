import { unstable_cache } from "next/cache";

export const getCachedCountries = unstable_cache(
  async () => {
    const res = await fetch("https://api.printful.com/countries", {
      headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}` },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch countries: ${res.status}`);
    }

    const data = await res.json();
    return data.result || [];
  },
  ["printful-countries"],
  { revalidate: 60 * 60 * 24 * 30 }, // 1 month
);
