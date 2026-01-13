import CategoryCard from "./CategoryCard";
import { Category, CategoryGroup } from "@/core/types/category";

type Props = {
  categories: Category[];
  onGroupClick: (cat: CategoryGroup) => void;
};

export default function CategoryGrid({ categories, onGroupClick }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 ">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} category={cat} onGroupClick={onGroupClick} />
      ))}
    </div>
  );
}
