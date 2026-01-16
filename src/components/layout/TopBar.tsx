"use client";

import clsx from "clsx";
import { Header } from "./Header";
import DesktopCategoryNav from "./CategoryNav/desktop/DesktopCategoryNav";
import MobileMenuPanel from "./CategoryNav/mobile/MobileMenuPanel";
import { CATEGORIES_BY_GENDER } from "./CategoryNav/data/categories";
import { useMobileMenu } from "@/components/context/MobileMenuContext";
import { useHideOnScroll } from "@/core/hooks/useHideOnScroll";
import { SearchOverlay } from "../search";

export default function TopBar() {
  const hidden = useHideOnScroll(112);
  const { gender } = useMobileMenu();

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ease-out",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <Header />

        <div className="hidden lg:block border-b bg-gray-200">
          <DesktopCategoryNav categories={CATEGORIES_BY_GENDER[gender]} />
        </div>
      </div>
      <SearchOverlay />
      <MobileMenuPanel />
    </>
  );
}
