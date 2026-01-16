"use client";

import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/core/types/product";

interface ProductRecommendationsProps {
  products: Product[];
  title: string;
  limit?: number;
}

export default function ProductRecommendations({
  products,
  title,
  limit = 4,
}: ProductRecommendationsProps) {
  if (!products?.length) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

      <div
        className="
          grid grid-cols-2
          md:grid-cols-4
          gap-3 md:gap-4
        "
      >
        {products.slice(0, limit).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
