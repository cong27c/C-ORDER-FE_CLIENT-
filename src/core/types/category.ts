// components/layout/CategoryNav/types.ts

export type Gender = "men" | "women";

/* =====================
   Base
===================== */
export type BaseCategory = {
  id: string;
  label: string;
  image?: string;
};

/* =====================
   Leaf (navigate)
===================== */
export type CategoryLink = BaseCategory & {
  type: "link";
  slug: string;
};

/* =====================
   Group (drill-down)
===================== */
export type CategoryGroup = BaseCategory & {
  type: "group";
  children: CategoryLink[];
};

/* =====================
   Union
===================== */
export type Category = CategoryLink | CategoryGroup;
