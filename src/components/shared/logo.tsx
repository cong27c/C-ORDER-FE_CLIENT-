import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-white text-lg font-bold hover:opacity-80 transition-opacity"
    >
      C-ORDER
    </Link>
  );
}
