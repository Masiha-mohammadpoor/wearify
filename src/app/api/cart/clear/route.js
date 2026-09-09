import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { clearCart } from "@/lib/cart";

export async function DELETE() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    await clearCart(session.user.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error clearing cart:", error);
    return NextResponse.json({ error: "failed_to_clear_cart" }, { status: 500 });
  }
}