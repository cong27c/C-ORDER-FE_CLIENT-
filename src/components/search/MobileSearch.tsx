// MobileSearch.tsx
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useSearch } from "./SearchProvider";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export function MobileSearch() {
  const { open, setOpen } = useSearch();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex items-center p-4 border-b">
            <SearchInput autoFocus />
            <button onClick={() => setOpen(false)} className="ml-2">
              <X />
            </button>
          </div>

          <SearchResults />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
