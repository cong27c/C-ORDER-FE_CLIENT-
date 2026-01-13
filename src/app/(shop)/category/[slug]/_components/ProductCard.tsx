"use client";

import { Product } from "@/core/types/product";
import { Heart } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setIsAnimating(true);

    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="group cursor-pointer">
      {/* IMAGE WRAPPER */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* OVERLAY SHADOW */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-opacity duration-300 group-hover:bg-black/20" />

        {/* LIKE BUTTON */}
        <button
          onClick={handleLike}
          className={clsx(
            "absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200",
            isAnimating && liked
              ? "animate-[pulse_0.6s_ease-out] scale-125"
              : liked
              ? "shadow-red-200/50"
              : "opacity-85 hover:scale-110 hover:shadow-xl"
          )}
        >
          <Heart
            className={clsx(
              "h-5 w-5 transition-all duration-300",
              liked
                ? "fill-red-500 stroke-red-500 drop-shadow-md"
                : "stroke-zinc-600 group-hover:stroke-red-400"
            )}
          />
        </button>
      </div>

      {/* INFO */}
      <div className="mt-3 text-sm">
        <p className="line-clamp-2 text-zinc-800">{product.name}</p>

        <div className="mt-1 flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="font-semibold text-red-600">
                ${product.salePrice}
              </span>
              <span className="text-zinc-400 line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="font-medium">${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}
