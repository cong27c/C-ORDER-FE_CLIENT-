import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { ToastRoot } from "@/core/hooks/useToast";
import { MobileMenuProvider } from "@/components/context/MobileMenuContext";
import TopBar from "@/components/layout/TopBar";
import { SearchProvider } from "@/components/search";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

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
        <ReactQueryProvider>
          <SearchProvider>
            <MobileMenuProvider>
              <TopBar />

              <main className="pt-14 lg:pt-(--topbar-height)">{children}</main>
            </MobileMenuProvider>
          </SearchProvider>
        </ReactQueryProvider>

        <ToastRoot />
        <Footer />
      </body>
    </html>
  );
}
