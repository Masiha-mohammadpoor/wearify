export async function fetchShippingRates({ recipient, items }) {
  const res = await fetch("https://api.printful.com/shipping/rates", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ recipient, items }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.result || `Failed to fetch shipping rates: ${res.status}`,
    );
  }

  return data.result || [];
}
