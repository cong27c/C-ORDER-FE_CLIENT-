// SearchProvider.tsx
"use client";

import { createContext, useContext, useState } from "react";

interface SearchContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
  keyword: string;
  setKeyword: (v: string) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContext.Provider value={{ open, setOpen, keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used inside SearchProvider");
  return ctx;
}
