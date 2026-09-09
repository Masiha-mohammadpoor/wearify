import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { removeFromCart } from "@/lib/cart";

export async function DELETE(request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const { productId, variantId } = await request.json();

    if (!productId || !variantId) {
      return NextResponse.json(
        { error: "productId and variantId are required" },
        { status: 400 }
      );
    }

    const cart = await removeFromCart(session.user.id, productId, variantId);

    return NextResponse.json({ success: true, data: cart });
  } catch (error) {
    console.error("Error removing from cart:", error);
    return NextResponse.json({ error: "failed_to_remove_item" }, { status: 500 });
  }
}