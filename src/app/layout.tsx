import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { ToastRoot } from "@/core/hooks/useToast";
import { MobileMenuProvider } from "@/components/context/MobileMenuContext";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} overflow-x-hidden`}>
      <body>
        {/* UI layout state */}
        <MobileMenuProvider>
          <TopBar />
          <div className="h-(--topbar-height)" />

          <main>{children}</main>
        </MobileMenuProvider>

        {/* Global UI (outside menu context) */}
        <ToastRoot />
        <Footer />
      </body>
    </html>
  );
}
