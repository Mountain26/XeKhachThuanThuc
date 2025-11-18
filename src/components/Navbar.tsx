import { Phone, Menu } from "lucide-react";
import { Button } from "./ui/button";

import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-row">
          {/* Logo placeholder */}
          <div className="navbar-brand">
            <div className="navbar-logo">
              <img className="logoTT" src="https://www.messenger.com/751ed73c-e301-4a4a-b0ee-398cafe74911"/>
            </div>
            <span>Nhà xe Thuận Thực</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <a href="#" className="navbar-link">
              Trang chủ
            </a>
            <a href="#" className="navbar-link">
              Tuyến xe
            </a>
            <a href="#" className="navbar-link">
              Đặt vé
            </a>
            <a href="#" className="navbar-link">
              Liên hệ
            </a>
            <Button size="sm" className="navbar-hotline-button">
              <Phone />
              Gọi hotline
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