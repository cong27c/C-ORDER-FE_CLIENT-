// SearchResults.tsx
import { useSearch } from "./SearchProvider";
import { useSearchQuery } from "./useSearchQuery";

export function SearchResults() {
  const { keyword } = useSearch();
  const { data, isLoading } = useSearchQuery(keyword);

  if (!keyword) {
    return <p className="p-4 text-sm text-gray-500">Start typing to search</p>;
  }

  if (isLoading) {
    return <p className="p-4 text-sm">Loading...</p>;
  }

  if (!data?.length) {
    return <p className="p-4 text-sm">No results found</p>;
  }

  return (
    <ul className="divide-y">
      {data?.map((item: any) => (
        <li
          key={item.id}
          className="p-4 bg-gray-100 hover:bg-gray-100 cursor-pointer"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
