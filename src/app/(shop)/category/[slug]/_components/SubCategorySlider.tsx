// SubCategorySlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SubCategorySlider({ items }: { items: string[] }) {
  return (
    <div className="mb-6">
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        navigation
        modules={[Navigation]}
        className="!px-1"
      >
        {items.map((item) => (
          <SwiperSlide key={item} className="!w-auto">
            <button className="px-4 py-2 border rounded-full text-sm hover:bg-zinc-100">
              {item}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
