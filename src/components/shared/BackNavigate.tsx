"use client";
import { cn } from "@/core/utils/utils";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  as?: "div" | "span";
  className?: string;
  children: string | ReactNode;
};

const BackNavigate = ({ as: Tag = "span", children, className }: Props) => {
  const { back } = useRouter();
  console.log("back", back);
  return (
    <Tag
      onClick={back}
      className={cn(`cursor-pointer font-semibold text-sm`, className)}
    >
      {children}
    </Tag>
  );
};

export default BackNavigate;
