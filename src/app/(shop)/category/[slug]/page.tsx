// app/(shop)/category/[slug]/page.tsx
import CategoryHeader from "./_components/CategoryHeader";
import SubCategorySlider from "./_components/SubCategorySlider";
import SortFilterBar from "./_components/SortFilterBar";
import ProductGrid from "./_components/ProductGrid";
import Breadcrumb from "@/components/shared/Breadcrumb";
// /images/category-v1.jpg
const mockProducts: Product[] = [
  {
    id: "1",
    name: "ASOS DESIGN crew neck mini dress with wide cuff",
    image: "/images/category-v1.jpg",
    price: 47.97,
    salePrice: 18.95,
  },
  {
    id: "2",
    name: "Topshop knitted mixed pattern patchwork jumper",
    image: "/images/category-v2.jpg",
    price: 100.96,
    salePrice: 92.17,
  },
  {
    id: "3",
    name: "ASOS DESIGN denim look button down jersey waistcoat",
    image: "/images/category-v3.jpg",
    price: 47.97,
    salePrice: 11.76,
  },
  {
    id: "4",
    name: "adidas Originals Disco Samba OG trainers in silver",
    image: "/images/category-v4.jpg",
    price: 132.24,
    salePrice: 93.17,
  },
  {
    id: "5",
    name: "Oversized striped knit sweater",
    image: "/images/category-v5.jpg",
    price: 65.0,
  },
  {
    id: "6",
    name: "One shoulder evening dress",
    image: "/images/category-v6.jpg",
    price: 120.0,
    salePrice: 89.0,
  },
  {
    id: "7",
    name: "High waist straight jeans",
    image: "/images/category-v1.jpg",
    price: 79.99,
  },
  {
    id: "8",
    name: "Leather mini crossbody bag",
    image: "/images/category-v2.jpg",
    price: 55.0,
    salePrice: 39.0,
  },
  {
    id: "9",
    name: "Relaxed fit cotton shirt",
    image: "/images/category-v3.jpg",
    price: 45.0,
  },
  {
    id: "10",
    name: "Tailored wide leg trousers",
    image: "/images/category-v4.jpg",
    price: 89.99,
    salePrice: 69.99,
  },
  {
    id: "11",
    name: "Sleeveless ribbed tank top",
    image: "/images/category-v5.jpg",
    price: 29.99,
  },
  {
    id: "12",
    name: "Chunky sole loafers",
    image: "/images/category-v6.jpg",
    price: 99.0,
    salePrice: 79.0,
  },
  {
    id: "13",
    name: "Oversized denim jacket",
    image: "/images/category-v1.jpg",
    price: 110.0,
  },
  {
    id: "14",
    name: "Printed satin midi skirt",
    image: "/images/category-v2.jpg",
    price: 75.0,
    salePrice: 49.0,
  },
  {
    id: "15",
    name: "Basic cotton t-shirt",
    image: "/images/category-v3.jpg",
    price: 19.99,
  },
  {
    id: "16",
    name: "Statement gold hoop earrings",
    image: "/images/category-v4.jpg",
    price: 25.0,
    salePrice: 15.0,
  },
  {
    id: "17",
    name: "Wrap front blazer",
    image: "/images/category-v5.jpg",
    price: 135.0,
  },
  {
    id: "18",
    name: "Pleated chiffon maxi dress",
    image: "/images/category-v6.jpg",
    price: 150.0,
    salePrice: 110.0,
  },
  {
    id: "19",
    name: "Classic ankle boots",
    image: "/images/category-v1.jpg",
    price: 140.0,
  },
  {
    id: "20",
    name: "Soft knit cardigan",
    image: "/images/category-v2.jpg",
    price: 69.99,
    salePrice: 49.99,
  },
];

export const BREADCRUMB_CATEGORY = [
  { label: "Home", href: "/" },
  { label: "Women", href: "/women" },
  { label: "Shoes", href: "/women/shoes" },
  { label: "Sneakers", href: "/women/shoes/sneakers" },
];
export default function CategoryPage() {
  return (
    <div className="px-4 py-8 md:px-6 lg:px-10 ">
      <Breadcrumb items={BREADCRUMB_CATEGORY} />
      <CategoryHeader title="Use code: MORE" />

      <SubCategorySlider
        items={["Dresses", "Shoes", "Tops", "Sale", "Accessories"]}
      />

      <SortFilterBar />

      <ProductGrid products={mockProducts} />
    </div>
  );
}
