import { useEffect, useState } from "react";

export function useHideOnScroll(threshold = 112) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // CHUẨN ASOS: ở đầu trang luôn hiện
      if (y <= threshold) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return hidden;
}
