import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  href: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link
      href={product.href}
      className="group block h-full"
      aria-label={`View ${product.name}`}
    >
      <div className="flex flex-col h-full bg-card  overflow-hidden transition-all duration-200 hover:shadow-lg">
        {/* Product Image */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Sale Badge */}
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
            -{discountPercent}%
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 flex flex-col flex-grow">
          <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 leading-relaxed">
            {product.name}
          </h3>

          <div className="mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-base font-bold text-red-600">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
