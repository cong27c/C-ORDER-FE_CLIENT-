import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-zinc-500">
        {items?.map((item, idx) => {
          const isLast = idx === items?.length - 1;

          return (
            <li key={idx} className="flex items-center gap-1">
              {!isLast && item?.href ? (
                <Link href={item?.href} className="hover:text-black">
                  {item?.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-black font-medium">
                  {item?.label}
                </span>
              )}
              {!isLast && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
