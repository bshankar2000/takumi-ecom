import { ReactNode } from "react";

export async function generateStaticParams() {
  // Replace this array with your actual data fetching logic to get product IDs.
  // For example:
  // const products = await fetchProducts();
  // return products.map((product) => ({ product: product.id }));

  const productIds = [
    "1", // Hinoki Wood Serving Tray / Indigo Norugi Jacket
    "2", // Kuro Raku Teabowl / Kintsugi Matcha Set
    "3", // Modern Sake Set / Urushi Bento Box
    "4", // Hand-forged Santoku Knife / Sumi-e Calligraphy Brush
    "5", // Traditional 100-Prong Chasen
    "6", // Kyusu Celadon Teapot
    "7", // Ceremonial Matcha Set
    "8", // Cast Iron Hobnail Kettle
  ];

  return productIds.map((id) => ({
    product: id,
  }));
}

export default function ProductLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
