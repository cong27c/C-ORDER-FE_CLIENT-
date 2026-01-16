"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  productName: string;
}

const SWIPE_THRESHOLD = 80;

export default function ProductGallery({ images, productName }: Props) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => [
      (prev + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  return (
    <div className="grid gap-4 md:grid-cols-[50px_1fr] lg:grid-cols-[80px_1fr]">
      {/* THUMBNAILS – DESKTOP */}
      <div className="hidden md:flex flex-col gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`relative aspect-[3/4] w-full overflow-hidden border
              ${
                i === index
                  ? "border-foreground"
                  : "border-transparent hover:border-muted"
              }
            `}
          >
            <Image src={img} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div className="relative w-full overflow-hidden">
        <div className="relative aspect-[4/5] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 80 : -80,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (dir: number) => ({
                  x: dir > 0 ? -80 : 80,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > SWIPE_THRESHOLD) {
                  paginate(-1);
                } else if (info.offset.x < -SWIPE_THRESHOLD) {
                  paginate(1);
                }
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <Image
                src={images[index]}
                alt={`${productName} ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS – TABLET & DESKTOP */}
          <button
            onClick={() => paginate(-1)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => paginate(1)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* THUMBNAILS – MOBILE */}
      <div className="flex gap-2 overflow-x-auto md:hidden px-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`relative aspect-3/4 h-20 shrink-0 overflow-hidden  border
              ${i === index ? "border-foreground" : "border-transparent"}
            `}
          >
            <Image src={img} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
