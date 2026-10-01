import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { fetchShippingRates } from "@/lib/shippingRates";

export async function POST(request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const { recipient, items } = await request.json();

    if (!recipient?.country_code || !items?.length) {
      return NextResponse.json(
        { error: "recipient.country_code and items are required" },
        { status: 400 },
      );
    }

    const rates = await fetchShippingRates({ recipient, items });

    return NextResponse.json({ success: true, data: rates });
  } catch (error) {
    console.error("Error fetching shipping rates:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
