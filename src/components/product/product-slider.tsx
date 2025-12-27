"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import ProductCard from "./product-card";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  href: string;
}

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative product-slider  px-4 sm:px-10 lg:px-12">
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={12}
        slidesPerView={2.5}
        freeMode={{
          enabled: true,
          momentum: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          641: {
            slidesPerView: 3,
            spaceBetween: 5,
            freeMode: {
              enabled: false,
            },
            slidesPerGroup: 3,
            loop: true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            freeMode: {
              enabled: false,
            },
            slidesPerGroup: 4,
            loop: true,
          },
        }}
        className="pb-12 md:pb-14"
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="
    
    absolute -left-6 top-1/2 -translate-y-1/2
    z-10 hidden sm:flex
    swiper-button-prev-custom
  "
        aria-label="Previous products"
      >
        <ChevronLeft className="w-12 h-12 md:w-12 md:h-12" />
      </button>

      <button
        className="
    swiper-button-next-custom
    absolute -right-6 top-1/2 -translate-y-1/2
    z-10 hidden sm:flex
  "
        aria-label="Next products"
      >
        <ChevronRight className="w-12 h-12 md:w-12 md:h-12" />
      </button>
    </div>
  );
}
