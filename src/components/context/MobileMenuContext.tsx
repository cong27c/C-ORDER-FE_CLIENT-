"use client";

import { createContext, useContext, useState } from "react";

export type Gender = "men" | "women";

type MobileMenuContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  gender: Gender;
  setGender: (g: Gender) => void;
};

const MobileMenuContext = createContext<MobileMenuContextType | null>(null);

export function MobileMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState<Gender>("men");

  return (
    <MobileMenuContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        gender,
        setGender,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export const useMobileMenu = () => {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("useMobileMenu must be used within provider");
  return ctx;
};
