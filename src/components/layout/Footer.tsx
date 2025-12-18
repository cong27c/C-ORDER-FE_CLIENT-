import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Fashion Store</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Thời trang hiện đại, phong cách trẻ trung. Mang đến cho bạn những
              sản phẩm chất lượng cao với giá tốt nhất.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/san-pham"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="/danh-muc"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Danh mục
                </Link>
              </li>
              <li>
                <Link
                  href="/khuyen-mai"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Khuyến mãi
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hỗ Trợ Khách Hàng</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chinh-sach-doi-tra"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link
                  href="/chinh-sach-van-chuyen"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Chính sách vận chuyển
                </Link>
              </li>
              <li>
                <Link
                  href="/dieu-khoan"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  Điều khoản & bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@fashionstore.com"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  contact@fashionstore.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+84123456789"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  (+84) 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm">
                  123 Đường ABC, Quận 1, TP.HCM
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="max-w-md mx-auto sm:max-w-none">
            <h4 className="text-lg font-semibold mb-4">Đăng Ký Nhận Tin</h4>
            <p className="text-text-secondary text-sm mb-4">
              Nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 bg-transparent border border-border rounded-md text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-text-secondary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-transparent border border-border rounded-md text-text-primary hover:bg-text-primary hover:text-bg-primary transition-colors font-medium"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-secondary text-sm">
            © 2025 Fashion Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
