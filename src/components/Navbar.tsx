import { Phone, Menu } from "lucide-react";
import { Button } from "./ui/button";

import "./Navbar.css";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-row">
          {/* Logo placeholder */}
          <div className="navbar-brand">
            <img className="logoBB" src="./src/components/assets/THUẬN THỰC HÀ GIANG.png" alt="" />
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <button type="button" className="navbar-link" onClick={() => scrollToSection("hero")}>
              Trang chủ
            </button>
            <button type="button" className="navbar-link" onClick={() => scrollToSection("tuyen-xe")}>
              Tuyến xe
            </button>
            <a className="navbar-link" href="tel:0983250900">
              Đặt vé
            </a>
            <button type="button" className="navbar-link" onClick={() => scrollToSection("lien-he")}>
              Liên hệ
            </button>
            <Button
              size="sm"
              className="navbar-hotline-button"
              asChild
            >
              <a href="tel:0983250900">
                <Phone />
                Gọi hotline
              </a>
            </Button>
            </div>
          {/* Mobile menu button */}
          <button className="navbar-menu-button">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}