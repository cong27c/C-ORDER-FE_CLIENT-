"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CategoryGroup } from "@/core/types/category";

type Props = {
  categories: CategoryGroup[];
};

export default function MobileCategoryList({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<CategoryGroup | null>(
    null
  );

  /* ======================
     LEVEL 1 – CATEGORY LIST
     ====================== */
  if (!activeCategory) {
    return (
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => {
                if (cat.children?.length) {
                  setActiveCategory(cat);
                }
              }}
              className="flex w-full items-center  justify-between px-2 py-3 text-left text-sm font-medium hover:bg-gray-100 rounded"
            >
              <span>{cat.label}</span>
              {cat.children?.length ? (
                <ChevronRight className="h-4 w-4 opacity-60" />
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  /* ======================
     LEVEL 2 – SUB CATEGORY
     ====================== */
  return (
    <div className="animate-slide-in">
      {/* Back */}
      <button
        onClick={() => setActiveCategory(null)}
        className="mb-4 flex items-center gap-2 text-sm font-medium"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </button>

      <h3 className="mb-3 text-base font-semibold">{activeCategory.label}</h3>

      <ul className="space-y-1">
        {activeCategory.children?.map((child) => (
          <li key={child.id}>
            <a
              href={`/${activeCategory.slug}/${child.slug}`}
              className="block px-2 py-3 text-sm hover:bg-gray-100 rounded"
            >
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
