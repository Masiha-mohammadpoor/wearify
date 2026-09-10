import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import SortProducts from "@/components/SortProducts";
import { getCachedProducts } from "@/lib/products";

const Products = async () => {
  const products = await getCachedProducts();

  return (
    <main className="grid grid-cols-12 px-4 gap-4 my-10">
      {/* sort */}
      <SortProducts />
      {/* filters */}
      <section className="col-span-3 bg-[#f4ece4] h-fit self-start sticky top-18 p-4 rounded-xl">
        <Filters />
      </section>
      {/* products */}
      <section className="col-span-9 grid grid-cols-12 gap-3 ">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product}/>;
          })}
      </section>
    </main>
  );
};
export default Products;
