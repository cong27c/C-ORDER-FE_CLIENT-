"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/lib/utils"; // helper classNames

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = (
  props: React.ComponentProps<typeof ToastPrimitive.Viewport>
) => (
  <ToastPrimitive.Viewport
    className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[390px] max-w-full z-[9999] outline-none"
    {...props}
  />
);

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentProps<typeof ToastPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn("p-4 rounded-md shadow-md border", className)}
    {...props}
  />
));
Toast.displayName = ToastPrimitive.Root.displayName;

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentProps<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("font-semibold text-sm text-gray-900", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentProps<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-700 mt-1", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;
