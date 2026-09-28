import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import SortProducts from "@/components/SortProducts";
import { getCachedProducts } from "@/lib/products";
import { getFilterOptions, applyFilters } from "@/lib/filterProducts";

const Products = async ({ searchParams }) => {
  const params = (await searchParams) || {};

  let allProducts = [];
  try {
    allProducts = (await getCachedProducts()) || [];
  } catch (error) {
    console.error("Failed to load products:", error.message);
  }

  const filterOptions = getFilterOptions(allProducts);
  const filteredProducts = applyFilters(allProducts, params);

  return (
    <main className="grid grid-cols-12 px-4 gap-4 my-10">
      {/* sort */}
      <SortProducts />
      {/* filters */}
      <section className="col-span-3 bg-[#f4ece4] h-fit self-start sticky top-18 p-4 rounded-xl pb-8">
        <Filters options={filterOptions} activeFilters={params} />
      </section>
      {/* products */}
      <section className="col-span-9 grid grid-cols-12 gap-3">
        {filteredProducts.length === 0 ? (
          <p className="col-span-12 text-center py-10">
            {allProducts.length === 0
              ? "Unable to load products right now."
              : "No products match the selected filters."}
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </section>
    </main>
  );
};

export default Products;
