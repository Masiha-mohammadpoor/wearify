import ProductCard from "@/components/ProductCard";

const Products = () => {
    return (
        <main className="grid grid-cols-12 px-4 gap-4">
            <section className="col-span-3 bg-red-300">filter</section>
            <section className="col-span-9 grid grid-cols-12 gap-3 ">
                <h3 className="col-span-12 text-2xl">Products</h3>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </section>
        </main>
    );
}
 
export default Products;