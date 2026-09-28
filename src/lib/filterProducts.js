export function getFilterOptions(products) {
  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];
  const sizes = [...new Set(products.flatMap((p) => p.sizes || []))];
  const colors = [...new Set(products.flatMap((p) => p.colors || []))];
  const prices = products.map((p) => Number(p.price) || 0);

  return {
    categories,
    sizes,
    colors,
    minPrice: prices.length ? Math.min(...prices) : 0,
    maxPrice: prices.length ? Math.max(...prices) : 0,
  };
}

export function applyFilters(products, searchParams) {
  const categoryFilter =
    searchParams.category?.split(",").filter(Boolean) || [];
  const sizeFilter = searchParams.size?.split(",").filter(Boolean) || [];
  const colorFilter = searchParams.color?.split(",").filter(Boolean) || [];
  const minPrice = searchParams.minPrice ? Number(searchParams.minPrice) : null;
  const maxPrice = searchParams.maxPrice ? Number(searchParams.maxPrice) : null;
  const sort = searchParams.sort;

  let result = products.filter((product) => {
    if (categoryFilter.length && !categoryFilter.includes(product.category)) {
      return false;
    }
    if (
      sizeFilter.length &&
      !product.sizes?.some((s) => sizeFilter.includes(s))
    ) {
      return false;
    }
    if (
      colorFilter.length &&
      !product.colors?.some((c) => colorFilter.includes(c))
    ) {
      return false;
    }
    const price = Number(product.price) || 0;
    if (minPrice !== null && price < minPrice) return false;
    if (maxPrice !== null && price > maxPrice) return false;
    return true;
  });

  if (sort === "price_asc") {
    result = [...result].sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sort === "price_desc") {
    result = [...result].sort((a, b) => Number(b.price) - Number(a.price));
  }

  return result;
}
