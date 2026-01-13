"use client";
import { CategoryGroup } from "@/core/types/category";

export default function MegaMenu({
  category,
  onMouseEnter,
  onMouseLeave,
}: {
  category: CategoryGroup;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="
        absolute top-full left-0 w-full
        bg-gray-200 text-black
        shadow-xl border-t
        animate-fade
        z-30
      "
    >
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="grid grid-cols-4 gap-8">
          {category.children.map((c) => (
            <a
              key={c.id}
              href={`/${c.slug}`}
              className="text-sm hover:underline"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
