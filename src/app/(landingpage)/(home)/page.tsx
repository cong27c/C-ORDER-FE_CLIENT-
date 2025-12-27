import React from "react";
import { HeroCarousel } from "./sections/hero-carousel";
import ProductSlider from "@/components/product/product-slider";
import CategoriesSection from "@/app/(landingpage)/(home)/sections/categories-section";
import CTAButton from "@/components/shared/CtaButton";

const products = [
  {
    id: 1,
    name: "Oversized zip up shacket",
    price: 103,
    originalPrice: 129.99,
    image: "/images/z7337809174546_fd77f14940b7a585398bbc7e9797268c.jpg",
    href: "#",
  },
  {
    id: 2,
    name: "Knitted quarter zip jumper",
    price: 103,
    originalPrice: 129.99,
    href: "#",
    image: "/images/z7337809173070_064b725ed5988d765dc8bac1b4b5f62e.jpg",
  },
  {
    id: 3,
    name: "Essentials long sleeve polo",
    price: 27,
    originalPrice: 129.99,
    href: "#",
    image: "/images/z7337809186371_8f557d80d87c8d7e15483db22892de0a.jpg",
  },
  {
    id: 4,
    name: "Knitted quarter zip jumper",
    price: 403,
    originalPrice: 129.99,
    href: "#",
    image: "/images/z7337809173070_064b725ed5988d765dc8bac1b4b5f62e.jpg",
  },
  {
    id: 5,
    name: "Oversized zip up shacket",
    price: 103,
    originalPrice: 129.99,
    image: "/images/z7337809174546_fd77f14940b7a585398bbc7e9797268c.jpg",
    href: "#",
  },
  {
    id: 6,
    name: "Knitted quarter zip jumper",
    price: 103,
    originalPrice: 129.99,
    href: "#",
    image: "/images/z7337809173070_064b725ed5988d765dc8bac1b4b5f62e.jpg",
  },
  {
    id: 7,
    name: "Essentials long sleeve polo",
    price: 27,
    originalPrice: 129.99,
    href: "#",
    image: "/images/z7337809186371_8f557d80d87c8d7e15483db22892de0a.jpg",
  },
  {
    id: 8,
    name: "Knitted quarter zip jumper",
    price: 403,
    originalPrice: 129.99,
    href: "#",
    image: "/images/z7337809173070_064b725ed5988d765dc8bac1b4b5f62e.jpg",
  },
];

const categories = [
  {
    id: 1,
    imageUrl: "/images/z7337809186371_8f557d80d87c8d7e15483db22892de0a.jpg",
    categoryName: "Men",
  },
  {
    id: 2,
    imageUrl: "/images/z7337809173070_064b725ed5988d765dc8bac1b4b5f62e.jpg",
    categoryName: "Women",
  },
  {
    id: 3,
    imageUrl: "/images/z7337809173070_064b725ed5988d765dc8bac1b4b5f62e.jpg",
    categoryName: "Kids",
  },
  {
    id: 4,
    imageUrl: "/images/z7337809174546_fd77f14940b7a585398bbc7e9797268c.jpg",
    categoryName: "Accessories",
  },
];

function Home() {
  return (
    <main>
      <HeroCarousel />
      <div className="flex flex-col gap-4 my-12">
        <ProductSlider products={products} />
        <CategoriesSection title={"Categories"} categories={categories} />
        <CTAButton label="Shop now" />
      </div>
    </main>
  );
}

export default Home;
