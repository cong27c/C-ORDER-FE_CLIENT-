"use client";

import Link from "next/link";
import { AuthForm } from "@/modules/auth/authForm";
import { SocialLogin } from "@/modules/auth/components/social-login";
import { AuthSidebar } from "@/modules/auth/components/auth-sidebar";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 sm:px-12 py-12 bg-white">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-black">Tạo tài khoản</h1>
        </div>

        {/* Form (tự có nút submit) */}
        <AuthForm type="register" />

        {/* Links */}
        <div className="text-sm text-center mb-4 mt-4">
          Đã có tài khoản?{" "}
          <Link href="/auth/login" className="font-semibold">
            Đăng nhập
          </Link>
        </div>

        {/* Divider */}
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Hoặc tiếp tục với
            </span>
          </div>
        </div>

        <SocialLogin />
      </div>

      <AuthSidebar />
    </div>
  );
}
