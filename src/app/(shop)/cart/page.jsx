import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/cart";
import { getCachedProducts } from "@/lib/products";
import CartClient from "@/components/CartClient";

const Cart = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }

  const cart = await getCart(session.user.id);
  const allProducts = await getCachedProducts();

  const cartItems = cart.items.map((item) => {
    const product = allProducts.find((p) => p.id === item.productId);
    const variant = product?.variants?.find((v) => v.id === item.variantId);

    return {
      ...item,
      name: product?.name || "Unknown",
      image: product?.image || "",
      category: product?.category || "general",
      size: variant?.size || null,
      color: variant?.color || null,
      price: variant?.retail_price || "0",
    };
  });

  return <CartClient cartItems={cartItems} />;
};

export default Cart;
