import { Header } from "@/components/layout/Header";
import React from "react";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} overflow-x-hidden`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default layout;
