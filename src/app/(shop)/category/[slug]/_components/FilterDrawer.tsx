"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function FilterDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* CUSTOM OVERLAY */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] transition-opacity"
        />
      )}

      <Sheet open={open} onOpenChange={onClose} modal={false}>
        <SheetContent side="right" className="z-50 w-full sm:w-[420px]">
          <h3 className="mb-4 text-lg font-medium">Filters</h3>
          {/* Filter content */}
        </SheetContent>
      </Sheet>
    </>
  );
}
