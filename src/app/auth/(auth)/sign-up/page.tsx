"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { SocialLogin } from "@/components/auth/social-login";
import { AuthSidebar } from "@/components/auth/auth-sidebar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUpPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Column - Form */}
      <div className="flex flex-col justify-center px-6 sm:px-12 py-12 bg-white">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-black mb-2">
            Create account
          </h1>
        </div>

        {/* Form */}
        <AuthForm type="sign-up" />

        {/* Terms checkbox */}
        <div className="flex items-start gap-2 mb-6">
          <Checkbox id="terms" className="w-4 h-4 border-gray-300 mt-1" />
          <label
            htmlFor="terms"
            className="text-sm text-gray-700 cursor-pointer leading-relaxed"
          >
            I agree to the{" "}
            <Link href="#" className="text-black font-semibold hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-black font-semibold hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Sign up Button */}
        <Button className="w-full h-12 bg-black text-white hover:bg-gray-900 mb-6 rounded-lg font-medium">
          Create account
        </Button>

        {/* Links */}
        <div className="text-sm text-center text-gray-700 mb-8">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="text-black font-semibold hover:underline"
          >
            Sign in
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
