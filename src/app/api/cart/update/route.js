import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { updateCartItem } from "@/lib/cart";

export async function PUT(request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const { productId, variantId, quantity } = await request.json();

    if (!productId || !variantId || quantity === undefined) {
      return NextResponse.json(
        { error: "productId, variantId and quantity are required" },
        { status: 400 }
      );
    }

    const cart = await updateCartItem(session.user.id, productId, variantId, quantity);

    return NextResponse.json({ success: true, data: cart });
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json({ error: "failed_to_update_cart" }, { status: 500 });
  }
}