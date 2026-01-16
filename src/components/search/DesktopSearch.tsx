// DesktopSearch.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useSearch } from "./SearchProvider";
import { SearchResults } from "./SearchResults";

export function DesktopSearch() {
  const { open } = useSearch();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden z-40"
        >
          <SearchResults />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
