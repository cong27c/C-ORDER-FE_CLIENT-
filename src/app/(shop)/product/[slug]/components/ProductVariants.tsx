"use client";

interface ProductVariantsProps {
  colors: Array<{ name: string; value: string; hex: string }>;
  sizes: string[];
  stock: Record<string, number>;
  selectedColor: any;
  selectedSize: string;
  onColorChange: (color: any) => void;
  onSizeChange: (size: string) => void;
}

export default function ProductVariants({
  colors,
  sizes,
  stock,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}: ProductVariantsProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Choose Color</h3>
          <span className="text-sm text-muted-foreground">
            {selectedColor.name}
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.hex}
              onClick={() => onColorChange(color)}
              className={`group relative h-12 w-12 rounded-full transition-all duration-200 ${
                selectedColor.hex === color.hex
                  ? "ring-2 ring-foreground ring-offset-2"
                  : "hover:ring-2 hover:ring-muted-foreground hover:ring-offset-2"
              }`}
              title={color.name}
              aria-label={`Select ${color.name} color`}
              aria-pressed={selectedColor.hex === color.hex}
            >
              <div
                className="h-full w-full rounded-full border-2 border-background shadow-md"
                style={{ backgroundColor: color.hex }}
              />
              <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Select Size</h3>
          <button className="text-xs text-accent hover:underline">
            Size Guide
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {sizes.map((size) => {
            const isOutOfStock = stock[size] === 0;
            return (
              <button
                key={size}
                onClick={() => !isOutOfStock && onSizeChange(size)}
                disabled={isOutOfStock}
                className={`rounded-lg border-2 py-3 text-sm font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? "border-foreground bg-foreground text-background"
                    : isOutOfStock
                    ? "border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                    : "border-border hover:border-foreground"
                }`}
                aria-pressed={selectedSize === size}
                aria-disabled={isOutOfStock}
              >
                {size}
                {isOutOfStock && <span className="block text-xs">Out</span>}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground">
          Not sure which size? Check our detailed size guide or chat with our
          style experts.
        </p>
      </div>
    </div>
  );
}
