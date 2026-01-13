"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import CategoryGrid from "./CategoryGrid";
import { Category } from "@/core/types/category";

type Props = {
  categories: Category[];
};

export default function MobileCategoryStack({ categories }: Props) {
  const [stack, setStack] = useState<Category[][]>([categories]);

  const current = stack[stack.length - 1];

  const push = (children: Category[]) => setStack((s) => [...s, children]);

  const pop = () => setStack((s) => s.slice(0, -1));

  return (
    <div className="relative overflow-hidden">
      {/* Back */}
      {stack.length > 1 && (
        <button
          onClick={pop}
          className="mb-4 flex items-center gap-2 text-sm font-medium"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={stack.length}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <CategoryGrid
            categories={current}
            onGroupClick={(group) => push(group.children)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
