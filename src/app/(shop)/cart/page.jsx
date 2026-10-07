import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/cart";
import { getProductById } from "@/lib/products";
import CartClient from "@/components/CartClient";
import Header from "@/components/Header";

const Cart = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }

  const cart = await getCart(session.user.id);

  const productIds = [...new Set(cart.items.map((i) => i.productId))];
  const products = await Promise.all(
    productIds.map((id) => getProductById(id).catch(() => null)),
  );
  const productMap = new Map(productIds.map((id, i) => [id, products[i]]));

  const cartItems = cart.items.map((item) => {
    const product = productMap.get(item.productId);
    const variant = product?.variants?.find((v) => v.id === item.variantId);
    const color = variant?.color || null;

    return {
      ...item,
      name: product?.name || "Unknown",
      image: product?.image || "",
      category: product?.category || "general",
      size: variant?.size || null,
      color: color,
      colorHex:
        product?.colorSwatches?.find((s) => s.name === color)?.hex || null,
      price: variant?.retail_price || "0",
    };
  });

  return (
    <>
      <Header />
      <CartClient cartItems={cartItems} />
    </>
  );
};

export default Cart;
