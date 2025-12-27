// ProfileDropdown.tsx
"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuArrow,
} from "@/components/ui/dropdown-menu";

import { User } from "lucide-react";
import { useState } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="hover:opacity-70 transition-opacity cursor-pointer outline-none focus:outline-none focus:ring-0"
          aria-label="Profile"
        >
          <User className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={12}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-72 "
      >
        <DropdownMenuArrow className="fill-popover" />
        <DropdownMenuLabel className="mb-3 text-sm font-semibold">
          Welcome to <span className="font-bold">C-ORDER</span>
        </DropdownMenuLabel>

        <div className="flex gap-2 mb-3">
          <button className="flex-1 border border-border px-3 py-2 text-sm font-semibold hover:bg-accent">
            ĐĂNG NHẬP
          </button>
          <button className="flex-1 border border-border px-3 py-2 text-sm font-semibold hover:bg-accent">
            ĐĂNG KÝ
          </button>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem> Tài khoản của tôi </DropdownMenuItem>
        <DropdownMenuItem> Đơn hàng của tôi </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
