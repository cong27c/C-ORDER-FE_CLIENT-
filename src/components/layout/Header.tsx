"use client";

import { Menu, Heart, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useMobileMenu } from "../context/MobileMenuContext";
import { Gender } from "@/core/types/category";
import { SearchInput, SearchOverlay, useSearch } from "../search";

export function Header() {
  const { open, gender, setGender } = useMobileMenu();
  const { setOpen } = useSearch();

  return (
    <header className=" bg-[#111] text-white">
      <div className="flex h-14 lg:h-16 items-center px-4 lg:px-6">
        {/* Mobile menu */}
        <button onClick={open} className="lg:hidden mr-3">
          <Menu />
        </button>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          C-ORDER
        </Link>

        {/* Desktop Gender Switch */}
        <div className="hidden lg:flex ml-10 gap-6">
          {["men", "women"].map((g) => (
            <button
              key={g}
              onClick={() => setGender(g as Gender)}
              className={clsx(
                "uppercase text-sm",
                gender === g && "border-b-2 border-white"
              )}
            >
              {g === "men" ? "Nam" : "Nữ"}
            </button>
          ))}
        </div>

        {/* Search */}

        {/* Desktop */}
        <div className="hidden md:flex flex-1 mx-10">
          <SearchInput />
        </div>

        {/* Mobile */}

        {/* Icons */}
        <div className="ml-auto flex gap-4">
          <button className="md:hidden " onClick={() => setOpen(true)}>
            <Search />
          </button>
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}
