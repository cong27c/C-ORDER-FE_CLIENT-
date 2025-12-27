"use client";

interface Category {
  id: string | number;
  imageUrl: string;
  categoryName: string;
}

interface CategoriesSectionProps {
  categories: Category[];
  title?: string; // Prop title tùy chọn
}

export default function CategoriesSection({
  categories,
  title,
}: CategoriesSectionProps) {
  return (
    <section className="w-full">
      {/* Title section - căn giữa và có margin hợp lý */}
      {title && (
        <div className="text-center  md:mb-4 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          {/* Optional decorative line */}
          <div className="mt-4 md:mt-6 flex justify-center">
            <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
          </div>
        </div>
      )}

      {/* Categories grid */}
      <div className="grid grid-cols-2 gap-2 md:flex md:gap-0 md:overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative gap-1 h-64 md:h-96 md:flex-1 md:min-w-0 overflow-hidden bg-gray-100 group cursor-pointer transition-all duration-300 "
          >
            <img
              src={category.imageUrl || "/placeholder.svg"}
              alt={category.categoryName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

            {/* Category name */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-white text-lg md:text-xl font-bold text-balance">
                {category.categoryName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
