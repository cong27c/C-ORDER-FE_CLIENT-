"use client";

import clsx from "clsx";
import { Header } from "./Header";
import DesktopCategoryNav from "./CategoryNav/desktop/DesktopCategoryNav";
import MobileMenuPanel from "./CategoryNav/mobile/MobileMenuPanel";
import { CATEGORIES_BY_GENDER } from "./CategoryNav/data/categories";
import { useMobileMenu } from "@/components/context/MobileMenuContext";
import { useHideOnScroll } from "@/core/hooks/useHideOnScroll";

export default function TopBar() {
  const hidden = useHideOnScroll();
  const { gender } = useMobileMenu();

  return (
    <>
      {/* FIXED HEADER */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ease-in-out",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <Header />

        {/* Desktop mega menu */}
        <div className="hidden lg:block border-b bg-gray-200">
          <DesktopCategoryNav categories={CATEGORIES_BY_GENDER[gender]} />
        </div>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenuPanel />
    </>
  );
}
