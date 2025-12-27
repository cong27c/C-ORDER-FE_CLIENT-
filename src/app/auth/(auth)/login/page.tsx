"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthForm } from "@/components/auth/auth-form";
import { SocialLogin } from "@/components/auth/social-login";
import { AuthSidebar } from "@/components/auth/auth-sidebar";

export default function SignInPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Column - Form */}
      <div className="flex flex-col justify-center px-6 sm:px-12 py-12 bg-white">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-black mb-2">Sign in</h1>
        </div>

        {/* Form */}
        <AuthForm type="sign-in" />

        {/* Remember me */}
        <div className="flex items-center gap-2 mb-6">
          <Checkbox id="remember" className="w-4 h-4 border-gray-300" />
          <label
            htmlFor="remember"
            className="text-sm text-gray-700 cursor-pointer"
          >
            Remember me
          </label>
        </div>

        {/* Sign in Button */}
        <Button className="w-full h-12 bg-black text-white hover:bg-gray-900 mb-6 rounded-lg font-medium">
          Sign in
        </Button>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-1 text-sm mb-8 text-center sm:text-left">
          <span className="text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="text-black font-semibold hover:underline"
            >
              Sign up
            </Link>
          </span>
          <span className="hidden sm:inline text-gray-400">•</span>
          <Link
            href="/auth/forgot-password"
            className="text-gray-700 hover:underline"
          >
            Forgot Password
          </Link>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <SocialLogin />
      </div>

      {/* Right Column - Sidebar (hidden on mobile) */}
      <AuthSidebar />
    </div>
  );
}
