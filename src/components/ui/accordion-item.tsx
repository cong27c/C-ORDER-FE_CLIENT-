import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function AccordionItem({
  label,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) {
  return (
    <div className="rounded-lg border border-border">
      {/* Header */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-4 text-left hover:bg-muted transition"
      >
        <span className="font-medium">{label}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-muted/30 p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
