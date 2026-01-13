"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMobileMenu } from "@/components/context/MobileMenuContext";
import { Gender } from "@/core/types/category";
import MobileCategoryStack from "./MobileCategoryStack";
import { CATEGORIES_BY_GENDER } from "../data/categories";

export default function MobileMenuPanel() {
  const { isOpen, close, gender, setGender } = useMobileMenu();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* PANEL */}
          <motion.div
            className="fixed inset-y-0 left-0 z-60 w-80 bg-white p-4 shadow-xl"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            {/* Gender switch */}
            <div className="mb-6 flex gap-6">
              {(["men", "women"] as Gender[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`text-sm font-medium ${
                    gender === g ? "text-black" : "text-gray-400"
                  }`}
                >
                  {g === "men" ? "Nam" : "Nữ"}
                </button>
              ))}
            </div>

            <MobileCategoryStack
              key={gender}
              categories={CATEGORIES_BY_GENDER[gender]}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
