import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getCart } from "@/lib/cart";
import { getCachedProducts } from "@/lib/products";

export async function GET() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const cart = await getCart(session.user.id);
    const allProducts = await getCachedProducts();

    const cartItems = cart.items.map((item) => {
      const product = allProducts.find((p) => p.id === item.productId);
      const variant = product?.variants?.find((v) => v.id === item.variantId);

      return {
        ...item,
        product: product || null,
        variant: variant || null,
        price: variant?.retail_price || product?.price || "0",
        name: product?.name || "Unknown product",
        image: product?.image || "",
        size: variant?.size || null,
        color: variant?.color || null,
      };
    });

    const totalPrice = cartItems.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0,
    );

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return NextResponse.json({
      success: true,
      data: { items: cartItems, totalItems, totalPrice },
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json(
      { error: "failed_to_fetch_cart" },
      { status: 500 },
    );
  }
}
