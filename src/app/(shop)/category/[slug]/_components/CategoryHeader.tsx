// CategoryHeader.tsx
export default function CategoryHeader({ title }: { title: string }) {
  return (
    <h1 className="text-2xl font-semibold tracking-tight mb-4">{title}</h1>
  );
}
