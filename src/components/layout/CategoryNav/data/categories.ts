import { Category } from "@/core/types/category";

export const CATEGORIES_BY_GENDER: Record<"men" | "women", Category[]> = {
  men: [
    {
      id: "sale",
      label: "Sale",
      type: "group",
      image: "/images/category-v1.jpg",
      children: [
        {
          id: "fast",
          label: "Selling fast",
          type: "link",
          slug: "selling-fast",
        },
        {
          id: "new",
          label: "New in sale",
          type: "link",
          slug: "new-in",
        },
      ],
    },
    {
      id: "clothing",
      label: "Clothing",
      type: "group",
      image: "/images/category-v2.jpg",
      children: [
        {
          id: "tshirts",
          label: "T-Shirts",
          type: "link",
          slug: "t-shirts",
        },
        {
          id: "hoodies",
          label: "Hoodies",
          type: "link",
          slug: "hoodies",
        },
      ],
    },
    {
      id: "shoes",
      label: "Shoes",
      type: "group",
      image: "/images/category-v3.jpg",
      children: [
        {
          id: "sneakers",
          label: "Sneakers",
          type: "link",
          slug: "sneakers",
        },
      ],
    },
  ],
  women: [
    {
      id: "clothing",
      label: "Clothing",
      type: "group",
      image: "/images/category-v4.jpg",
      children: [
        {
          id: "dresses",
          label: "Dresses",
          type: "link",
          slug: "dresses",
        },
      ],
    },
  ],
};
