import type { Metadata } from "next";
import Logo from "@/components/shared/logo";
import BackNavigate from "@/components/shared/BackNavigate";

export const metadata: Metadata = {
  title: "404 – Không tìm thấy nội dung",
  description: "Trang bạn tìm kiếm không tồn tại",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-6 md:p-8">
        <Logo />
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-6 md:space-y-8">
          {/* 404 Title */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">404</h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto">
            Đường dẫn bạn truy cập không tồn tại.
          </p>

          {/* Back Button */}
          <div className="pt-4">
            <BackNavigate className="max-md:text-[17px] text-2xl">
              ← Quay lại
            </BackNavigate>
          </div>
        </div>
      </main>
    </div>
  );
}
