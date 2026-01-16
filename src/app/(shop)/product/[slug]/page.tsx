import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetail";
// import { generateProductSchema } from "@/lib/schema";
function generateProductSchema(product: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: "Fashion Store",
    },
    offers: {
      "@type": "Offer",
      url: `https://example.com/products/${product.slug}`,
      priceCurrency: "USD",
      price: product.price.toString(),
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Fashion Store",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
    },
  };
}

// Mock data - replace with database query
const products: Record<string, any> = {
  "minimalist-black-jacket": {
    id: "1",
    slug: "minimalist-black-jacket",
    name: "Minimalist Black Jacket",
    price: 189.0,
    originalPrice: 249.0,
    rating: 4.8,
    reviewCount: 127,
    badge: "Best Seller",
    description:
      "Crafted from premium Italian wool, this timeless black jacket combines elegance with versatility.",
    images: [
      "/images/category-v1.jpg",
      "/images/category-v2.jpg",
      "/images/category-v3.jpg",
      "/images/category-v4.jpg",
    ],
    colors: [
      { name: "Black", value: "#1a1a1a", hex: "#1a1a1a" },
      { name: "Charcoal", value: "#3a3a3a", hex: "#3a3a3a" },
      { name: "Navy", value: "#1a2a4a", hex: "#1a2a4a" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: { XS: 5, S: 8, M: 12, L: 10, XL: 6, XXL: 3 },
    material: "100% Italian Wool",
    fit: "Regular fit with tapered waist",
    care: "Dry clean only. Lay flat to dry.",
    highlights: [
      "Premium Italian wool blend",
      "Hand-finished details",
      "Peak lapels with silk trim",
      "Internal chest pocket",
      "Adjustable sleeve length",
    ],
    testimonials: [
      {
        author: "Sarah M.",
        rating: 5,
        text: "Perfect fit and exceptional quality. Worth every penny.",
      },
      {
        author: "James P.",
        rating: 5,
        text: "The craftsmanship is incredible. Feels like a luxury piece.",
      },
    ],
    salesCount: 342,
    viewersCount: 1203,
    related: [
      {
        id: "2",
        name: "Tailored Trousers",
        price: 129.0,
        image: "/images/category-v5.jpg",
      },
      {
        id: "3",
        name: "Silk Tie Collection",
        price: 49.0,
        image: "/images/category-v6.jpg",
      },
      {
        id: "4",
        name: "Premium Dress Shirt",
        price: 89.0,
        image: "/images/category-v1.jpg",
      },
      {
        id: "5",
        name: "Leather Belt",
        price: 79.0,
        image: "/images/category-v2.jpg",
      },
      {
        id: "7",
        name: "Tailored Trousers",
        price: 129.0,
        image: "/images/category-v3.jpg",
      },
      {
        id: "8",
        name: "Silk Tie Collection",
        price: 49.0,
        image: "/images/category-v4.jpg",
      },
      {
        id: "9",
        name: "Premium Dress Shirt",
        price: 89.0,
        image: "/images/category-v5.jpg",
      },
      {
        id: "10",
        name: "Leather Belt",
        price: 79.0,
        image: "/images/category-v6.jpg",
      },
      {
        id: "11",
        name: "Tailored Trousers",
        price: 129.0,
        image: "/images/category-v1.jpg",
      },
      {
        id: "12",
        name: "Silk Tie Collection",
        price: 49.0,
        image: "/images/category-v2.jpg",
      },
      {
        id: "1",
        name: "Premium Dress Shirt",
        price: 89.0,
        image: "/images/category-v3.jpg",
      },
      {
        id: "13",
        name: "Leather Belt",
        price: 79.0,
        image: "/images/category-v4.jpg",
      },
    ],
  },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const product = products[params.slug];

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Fashion Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
      type: "product",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    notFound();
  }

  const schema = generateProductSchema(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb for SEO and navigation */}
        <nav className="mx-auto max-w-7xl px-4 py-4 text-sm text-muted-foreground md:py-6">
          <ol className="flex items-center gap-2">
            <li>
              <a href="/" className="hover:text-foreground transition-colors">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a
                href="/products"
                className="hover:text-foreground transition-colors"
              >
                Products
              </a>
            </li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <ProductDetail product={product} />
      </main>
    </>
  );
}
