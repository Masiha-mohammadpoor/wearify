import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { addToCart } from "@/lib/cart";
import { getCachedProducts } from "@/lib/products";

export async function POST(request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const { productId, variantId, quantity = 1 } = await request.json();

    if (!productId || !variantId) {
      return NextResponse.json(
        { error: "productId and variantId are required" },
        { status: 400 }
      );
    }

    const products = await getCachedProducts();
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json({ error: "product_not_found" }, { status: 404 });
    }

    const cart = await addToCart(session.user.id, productId, variantId, quantity);

    return NextResponse.json({ success: true, data: cart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json({ error: "failed_to_add_to_cart" }, { status: 500 });
  }
}