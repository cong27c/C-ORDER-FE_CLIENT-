"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useSearch } from "./SearchProvider";
import { useSearchQuery } from "./useSearchQuery";

export function SearchInput({ autoFocus }: { autoFocus?: boolean }) {
  const { keyword, setKeyword } = useSearch();
  const [value, setValue] = useState(keyword);

  const { isFetching } = useSearchQuery(keyword);

  useEffect(() => {
    const t = setTimeout(() => setKeyword(value), 300);
    return () => clearTimeout(t);
  }, [value, setKeyword]);

  const showClear = value.length > 0;
  const showLoading = isFetching;

  return (
    <div className="relative w-full">
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products..."
        className="
          w-full
          rounded-full
          bg-gray-100
          px-4
          pr-12
          py-2
          text-black
          outline-none
          focus:ring-2 focus:ring-black/10
        "
      />

      {/* Right icon area (PC & Tablet only) */}
      <div className="hidden lg:flex items-center absolute right-3 top-1/2 -translate-y-1/2 gap-2">
        {/* Loading spinner */}
        {showLoading && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"
            aria-label="Loading"
          />
        )}

        {/* Clear button */}
        {!showLoading && showClear && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              setKeyword("");
            }}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}

        {/* Search icon (default) */}
        {!showLoading && !showClear && (
          <Search size={18} className="text-gray-500" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
