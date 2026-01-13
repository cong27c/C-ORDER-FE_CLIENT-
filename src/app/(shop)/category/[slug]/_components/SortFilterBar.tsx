// SortFilterBar.tsx
"use client";

import { useState } from "react";
import FilterDrawer from "./FilterDrawer";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

export default function SortFilterBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 border px-4 py-2 rounded-lg"
        >
          <ArrowUpDown size={16} /> Sort
        </button>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 border px-4 py-2 rounded-lg"
        >
          <SlidersHorizontal size={16} /> Filter
        </button>
      </div>

      <FilterDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
