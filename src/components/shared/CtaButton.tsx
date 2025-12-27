"use client";

import Link from "next/link";

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function CTAButton({
  label,
  onClick,
  href,
  className = "",
}: CTAButtonProps) {
  const baseStyles = `
    bg-[#111111] text-white font-semibold
    flex justify-center items-center
    w-full sm:w-auto md:min-w-[240px]
    px-12 py-3 my-8 mx-auto
    transition-all duration-300 ease-out
    hover:bg-gradient-to-r hover:from-gray-700 hover:to-black cursor-pointer
  `;

  const combinedClassName = `${baseStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {label}
    </button>
  );
}
