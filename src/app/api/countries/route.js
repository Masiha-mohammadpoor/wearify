import { NextResponse } from "next/server";
import { getCachedCountries } from "@/lib/countries";

export async function GET() {
  try {
    const countries = await getCachedCountries();
    return NextResponse.json({ success: true, data: countries });
  } catch (error) {
    console.error("Error fetching countries:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
