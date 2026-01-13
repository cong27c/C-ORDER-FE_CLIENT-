import { motion } from "framer-motion";
import { Category, CategoryGroup } from "@/core/types/category";

type Props = {
  category: Category;
  onGroupClick: (cat: CategoryGroup) => void;
};

export default function CategoryCard({ category, onGroupClick }: Props) {
  const isGroup = category.type === "group";

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      whileHover="hover"
      className="relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
      onClick={() => {
        if (isGroup) onGroupClick(category);
      }}
    >
      {/* Image */}
      <motion.img
        src={category.image}
        alt={category.label}
        className="h-32 w-full object-cover"
        variants={{
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Label */}
      <div className="absolute bottom-2 left-2 right-2 rounded bg-white/90 px-2 py-1 text-sm font-medium">
        {category.label}
      </div>

      {/* Link overlay */}
      {!isGroup && (
        <a href={`/${category.slug}`} className="absolute inset-0" />
      )}
    </motion.div>
  );
}
