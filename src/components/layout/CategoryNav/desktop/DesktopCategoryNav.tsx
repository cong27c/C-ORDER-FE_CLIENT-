"use client";

import { useRef, useState } from "react";
import MegaMenu from "./MegaMenu";
import { Category, CategoryGroup } from "@/core/types/category";

export default function DesktopCategoryNav({
  categories,
}: {
  categories: Category[];
}) {
  const [active, setActive] = useState<CategoryGroup | null>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (cat: Category) => {
    if (cat.type !== "group") return;

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setActive(cat);
    }, 120); // hover delay chuẩn
  };

  const closeMenu = () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setActive(null);
    }, 150);
  };

  return (
    <nav className="relative flex gap-8 px-6 " onMouseLeave={closeMenu}>
      {categories.map((cat) => (
        <div
          key={cat.id}
          onMouseEnter={() => openMenu(cat)}
          className="py-4 cursor-pointer select-none"
        >
          {cat.label}
        </div>
      ))}

      {active && (
        <MegaMenu
          category={active}
          onMouseEnter={() => setActive(active)}
          onMouseLeave={closeMenu}
        />
      )}
    </nav>
  );
}
