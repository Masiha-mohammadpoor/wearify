import { NextResponse } from "next/server";

const API_KEY = process.env.PRINTFUL_API_KEY;

if (!API_KEY) {
  throw new Error("PRINTFUL_API_KEY is not defined");
}

const categoryCache = new Map();

async function getCategoryName(categoryId) {
  if (!categoryId) return "general";

  if (categoryCache.has(categoryId)) {
    return categoryCache.get(categoryId);
  }

  try {
    const response = await fetch(
      `https://api.printful.com/v2/catalog-categories/${categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch category ${categoryId}: ${response.status}`,
      );
      return "general";
    }

    const data = await response.json();
    const categoryName = data?.data?.title || "general";
    categoryCache.set(categoryId, categoryName);
    return categoryName;
  } catch (error) {
    console.error(`Error fetching category ${categoryId}:`, error.message);
    return "general";
  }
}

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const detailRes = await fetch(
      `https://api.printful.com/store/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!detailRes.ok) {
      if (detailRes.status === 404) {
        return NextResponse.json(
          { success: false, message: "Product not found" },
          { status: 404 },
        );
      }
      const errorText = await detailRes.text();
      console.error("Product detail API error:", detailRes.status, errorText);
      throw new Error(`Failed to fetch product ${id}: ${detailRes.status}`);
    }

    const detailData = await detailRes.json();
    const result = detailData.result || {};
    const syncVariants = result.sync_variants || [];
    const syncProduct = result.sync_product || {};

    const firstVariant = syncVariants.length > 0 ? syncVariants[0] : {};

    const sizes = [...new Set(syncVariants.map((v) => v.size).filter(Boolean))];
    const colors = [
      ...new Set(syncVariants.map((v) => v.color).filter(Boolean)),
    ];

    const variants = syncVariants.map((v) => ({
      id: v.id,
      size: v.size || null,
      color: v.color || null,
      retail_price: v.retail_price || null,
      currency: v.currency || null,
      sku: v.sku || null,
      variant_id: v.variant_id || null,
      availability_status: v.availability_status || null,
    }));

    let image = "";
    for (const variant of syncVariants) {
      if (variant.files) {
        const preview = variant.files.find((f) => f.type === "preview");
        if (preview?.preview_url) {
          image = preview.preview_url;
          break;
        }
      }
    }
    if (!image) {
      image = syncProduct.thumbnail_url || "";
    }

    let category = "general";
    const mainCategoryId = firstVariant.main_category_id || null;

    if (mainCategoryId) {
      category = await getCategoryName(mainCategoryId);
    }

    const product = {
      id: syncProduct.id,
      name: syncProduct.name || "Untitled",
      price: firstVariant.retail_price || "0",
      category,
      sizes,
      colors,
      image,
      description: "",
      currency: firstVariant.currency || "USD",
      variants,
    };

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error(`Error in /api/products/${id}:`, error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
