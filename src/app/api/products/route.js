import { NextResponse } from "next/server";

const API_KEY = process.env.PRINTFUL_API_KEY;

if (!API_KEY) {
  throw new Error("PRINTFUL_API_KEY is not defined");
}

// export const revalidate = 3600;

async function getCategoryName(categoryId) {
  if (!categoryId) return "general";

  try {
    const response = await fetch(
      `https://api.printful.com/v2/catalog-categories/${categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
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

    return categoryName;
  } catch (error) {
    console.error(`Error fetching category ${categoryId}:`, error.message);
    return "general";
  }
}

export async function GET() {
  try {
    console.log("Fetching products from Printful...");

    const productsRes = await fetch("https://api.printful.com/store/products", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!productsRes.ok) {
      const errorText = await productsRes.text();
      console.error("Products API error:", productsRes.status, errorText);
      throw new Error(`Failed to fetch products: ${productsRes.status}`);
    }

    const productsData = await productsRes.json();
    const products = productsData.result || [];
    console.log(`Found ${products.length} products`);

    const fullProducts = await Promise.all(
      products.map(async (item) => {
        try {
          const detailRes = await fetch(
            `https://api.printful.com/store/products/${item.id}`,
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
              },
              cache: "no-store",
            },
          );

          if (!detailRes.ok) {
            throw new Error(
              `Failed to fetch product ${item.id}: ${detailRes.status}`,
            );
          }

          const detailData = await detailRes.json();
          const result = detailData.result || {};
          const syncVariants = result.sync_variants || [];
          const syncProduct = result.sync_product || {};

          const firstVariant = syncVariants.length > 0 ? syncVariants[0] : {};

          const sizes = [
            ...new Set(syncVariants.map((v) => v.size).filter(Boolean)),
          ];
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

          return {
            id: item.id,
            name: item.name || syncProduct.name || "Untitled",
            price: firstVariant.retail_price || "0",
            category: category,
            sizes: sizes,
            colors: colors,
            image: image,
            description: "",
            currency: firstVariant.currency || "USD",
            variants: variants,
          };
        } catch (err) {
          console.error(`Error fetching product ${item.id}:`, err.message);
          return null;
        }
      }),
    );

    const validProducts = fullProducts.filter((p) => p !== null);

    console.log(`Successfully processed ${validProducts.length} products`);

    return NextResponse.json({
      success: true,
      count: validProducts.length,
      data: validProducts,
    });
  } catch (error) {
    console.error("Error in /api/products:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
