"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface StickyAddToCartProps {
  selectedSize: string;
  onAddToCart: () => void;
  isInCart: boolean;
}

export default function StickyAddToCart({
  selectedSize,
  onAddToCart,
  isInCart,
}: StickyAddToCartProps) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 500px
      setShowSticky(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <div className="sticky-cta animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Ready to purchase?</span>
          <span className="text-xs text-muted-foreground">
            {selectedSize
              ? `Size ${selectedSize} selected`
              : "Please select a size"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={onAddToCart}
            disabled={!selectedSize}
            className={`font-semibold transition-all duration-300 ${
              isInCart
                ? "bg-green-600 hover:bg-green-700"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {isInCart ? "✓ Added" : "Add to Cart"}
          </Button>
          <button
            onClick={() => setShowSticky(false)}
            className="rounded-lg p-2 hover:bg-muted transition-colors"
            aria-label="Close sticky cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
