import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D62828] to-[#B01F1F] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">TT</span>
              </div>
              <span className="text-white">Nhà xe Thuận Thực</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Hơn 10 năm phục vụ tuyến Hà Nội - Hà Giang với phương châm an toàn, đúng giờ và tận tâm.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/10 hover:bg-[#D62828] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-[#D62828] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-[#D62828] rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Lịch trình
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Chính sách đặt vé
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Đặt vé online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Thông tin tuyến xe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Hỗ trợ khách hàng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Ưu đãi - khuyến mãi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Dịch vụ doanh nghiệp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">
              Liên hệ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D62828] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  123 Nguyễn Trãi, phường Trung Văn, quận Nam Từ Liêm, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D62828] flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  1900 63 63 71
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D62828] flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  hotro@thuanthuc.vn
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Nhà xe Thuận Thực. Đã đăng ký bản quyền.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-[#D62828] text-sm transition-colors"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#D62828] text-sm transition-colors"
              >
                Điều khoản dịch vụ
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#D62828] text-sm transition-colors"
              >
                Chính sách cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}