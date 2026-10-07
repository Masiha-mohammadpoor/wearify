import Header from "@/components/Header";
import ProductPageOptions from "@/components/ProductPageOptions";
import { getProductById } from "@/lib/products";

const ProductPage = async ({ params }) => {
  const { productId } = await params;
  const product = await getProductById(productId);

  return (
    <>
      <Header />
      <ProductPageOptions product={product} />
    </>
  );
};

export default ProductPage;
