"use client";

import { Menu, Search, User, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-[#111111] text-white shadow-md">
      <div className="mx-auto flex h-14 items-center justify-between px-4 lg:h-16 lg:px-6">
        {/* Mobile Layout (default to md) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="text-xl font-bold tracking-wider">C-ORDER</div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          <div className="text-2xl font-bold tracking-wider">C-ORDER</div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="text-2xl font-bold tracking-wider">C-ORDER</div>

          <nav className="flex items-center gap-6">
            <button className="px-6 py-2 text-sm font-medium uppercase tracking-wide hover:bg-white/10 transition-colors rounded">
              Nữ
            </button>
            <button className="px-6 py-2 text-sm font-medium uppercase tracking-wide hover:bg-white/10 transition-colors rounded">
              Nam
            </button>
          </nav>
        </div>

        {/* Desktop Search Bar (lg+) */}
        <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for items and brands"
              className="w-full rounded-full bg-white px-5 py-2.5 pr-12 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity">
              <Search className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Right Icons (all screen sizes) */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search icon for mobile/tablet only */}
          <button
            className="lg:hidden hover:opacity-70 transition-opacity"
            aria-label="Search"
          >
            <Search className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            className="hover:opacity-70 transition-opacity"
            aria-label="Profile"
          >
            <User className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            className="hover:opacity-70 transition-opacity"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            className="hover:opacity-70 transition-opacity"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#111111]">
          <nav className="flex flex-col p-4">
            <button className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wide hover:bg-white/10 transition-colors rounded">
              Nữ
            </button>
            <button className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wide hover:bg-white/10 transition-colors rounded">
              Nam
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
