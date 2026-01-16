"use client";

import { useState, useCallback } from "react";
import ProductGallery from "./components/ProductGallery";
import ProductPurchasePanel from "./components/ProductPurchasePanel";
import ProductDescription from "./components/ProductDescription";
import ProductReviews from "./components/ProductReviews";
import ProductRecommendations from "./components/ProductRecommendations";
import StickyAddToCart from "./components/StickyAddToCart";

export default function ProductDetail({ product }: { product: any }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = useCallback(() => {
    if (!selectedSize) return;
    setIsInCart(true);
    setTimeout(() => setIsInCart(false), 2000);
  }, [selectedSize]);

  return (
    <div className="mx-auto max-w-6xl md:px-4 lg:px-24">
      {/* HERO: Gallery + Purchase panel */}
      <section>
        <div
          className="
            grid gap-6
            md:grid-cols-[6fr_4fr]
            lg:grid-cols-[6.5fr_3.5fr]
            lg:gap-10
          "
        >
          <ProductGallery images={product.images} productName={product.name} />

          <ProductPurchasePanel
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            onColorChange={setSelectedColor}
            onSizeChange={setSelectedSize}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
            isInCart={isInCart}
          />
        </div>
      </section>

      <div className="px-4">
        {/* Description */}
        <section className="py-10 md:py-14">
          <ProductDescription
            description={product.description}
            highlights={product.highlights}
            material={product.material}
            fit={product.fit}
            care={product.care}
          />
        </section>

        {/* Reviews */}
        <section className="py-10 md:py-14">
          <ProductReviews
            rating={product.rating}
            reviewCount={product.reviewCount}
            testimonials={product.testimonials}
            salesCount={product.salesCount}
            viewersCount={product.viewersCount}
          />
        </section>

        {/* Recommendations */}
        <section className="py-10 md:py-14">
          <ProductRecommendations
            products={product.related}
            title="Complete the Look"
          />
        </section>
      </div>
      {/* Sticky CTA – mobile backup */}
      <StickyAddToCart
        selectedSize={selectedSize}
        onAddToCart={handleAddToCart}
        isInCart={isInCart}
      />
    </div>
  );
}
