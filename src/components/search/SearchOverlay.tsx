// SearchOverlay.tsx
import { DesktopSearch } from "./DesktopSearch";
import { MobileSearch } from "./MobileSearch";

export function SearchOverlay() {
  return (
    <>
      <div className="hidden lg:block relative">
        <DesktopSearch />
      </div>
      <div className="lg:hidden">
        <MobileSearch />
      </div>
    </>
  );
}
