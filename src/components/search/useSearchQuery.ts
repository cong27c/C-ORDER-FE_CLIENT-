// useSearchQuery.ts
import { useQuery } from "@tanstack/react-query";

async function fetchSearch(keyword: string) {
  if (!keyword) return [];
  const res = await fetch(`/api/search?q=${keyword}`);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}

export function useSearchQuery(keyword: string) {
  return useQuery({
    queryKey: ["search", keyword],
    queryFn: () => fetchSearch(keyword),
    enabled: keyword.length > 1,
    staleTime: 30_000,
  });
}
