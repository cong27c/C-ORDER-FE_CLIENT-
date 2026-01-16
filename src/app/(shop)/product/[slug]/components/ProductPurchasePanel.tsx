"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductPurchasePanelProps {
  product: any;
  selectedColor: any;
  selectedSize: string;
  quantity: number;
  onColorChange: (color: any) => void;
  onSizeChange: (size: string) => void;
  onQuantityChange: (qty: number) => void;
  onAddToCart: () => void;
  isInCart: boolean;

  /** A/B testing */
  variant?: "A" | "B";
}

export default function ProductPurchasePanel({
  product,
  selectedColor,
  selectedSize,
  quantity,
  onColorChange,
  onSizeChange,
  onQuantityChange,
  onAddToCart,
  isInCart,
  variant = "A",
}: ProductPurchasePanelProps) {
  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

  const isOutOfStock = selectedSize && product.stock[selectedSize] === 0;

  return (
    <div className="flex flex-col gap-6 px-4">
      {/* Header */}
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Fashion Collection
        </p>
        <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
          {product.name}
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">{product.rating}</span>
        <span className="text-muted-foreground">
          ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="space-y-1">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold">
            ${product.price.toFixed(2)}
          </span>

          {discount > 0 && (
            <>
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                -{discount}%
              </span>
            </>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          Free shipping • 30-day returns
        </p>
      </div>

      {/* Color */}
      <div className="space-y-3">
        <p className="text-sm font-medium">
          Color: <span>{selectedColor.name}</span>
        </p>
        <div className="flex gap-3">
          {product.colors.map((color: any) => (
            <motion.button
              key={color.hex}
              whileTap={{ scale: 0.9 }}
              onClick={() => onColorChange(color)}
              className={`h-10 w-10 rounded-full ring-offset-2 transition
                ${
                  selectedColor.hex === color.hex
                    ? "ring-2 ring-foreground"
                    : "hover:ring-2 hover:ring-muted-foreground"
                }
              `}
              style={{ backgroundColor: color.hex }}
              aria-pressed={selectedColor.hex === color.hex}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Size</p>
          <button className="text-xs text-accent hover:underline">
            Size guide
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {product.sizes.map((size: string) => {
            const out = product.stock[size] === 0;
            const selected = selectedSize === size;

            return (
              <motion.button
                key={size}
                whileTap={{ scale: 0.92 }}
                onClick={() => !out && onSizeChange(size)}
                disabled={out}
                className={`rounded-lg border py-2 text-sm font-medium transition
                  ${
                    selected
                      ? "border-foreground bg-foreground text-background"
                      : out
                      ? "cursor-not-allowed border-border bg-muted text-muted-foreground opacity-50"
                      : "border-border hover:border-foreground"
                  }
                `}
                aria-pressed={selected}
              >
                {size}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {!selectedSize && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-muted-foreground"
            >
              Please select a size to continue
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Quantity</span>
        <div className="flex items-center rounded-lg border">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="h-9 w-9 hover:bg-muted"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-medium">
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="h-9 w-9 hover:bg-muted"
          >
            +
          </button>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        animate={isInCart ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <Button
          onClick={onAddToCart}
          disabled={!selectedSize || isOutOfStock}
          className={`h-12 w-full text-base font-semibold transition
            ${
              isInCart
                ? "bg-green-600 hover:bg-green-700"
                : variant === "B"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-green-600 hover:bg-green-700"
            }
          `}
        >
          {isInCart
            ? "✓ Added to cart"
            : !selectedSize
            ? "Select size to add"
            : "Add to cart"}
        </Button>

        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border hover:bg-muted">
          <Heart className="h-5 w-5" />
          Save to wishlist
        </button>
      </motion.div>

      {/* Stock */}
      {selectedSize && (
        <p className="text-xs text-muted-foreground">
          {isOutOfStock
            ? "Out of stock"
            : `Only ${product.stock[selectedSize]} left`}
        </p>
      )}
    </div>
  );
}
