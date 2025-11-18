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
            <div className="navbar-logo">
              <img className="logoNB" src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/582234910_1363044145567577_688089787407289729_n.png?stp=dst-png_s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFy-DZDpxrjKfGOLgLrwe2bhABG-QPaklSEAEb5A9qSVCNKhw6-hrB-YjU5CzXUuTarHnAxmS_cRwBUhmlgqrD-&_nc_ohc=41uStWEz3C0Q7kNvwGEDgjo&_nc_oc=Adm6k8xhSFH7B6DkD4Z6Yal5l7Br1mRq9Zvcgu7piFP2QsvAKXpYw10f4SZisIKxqr4&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD3wFN7zVmDL4airhQ-8wUNW4zn9-4B-t-JJKrRb-FtrCXew&oe=6943F77B"/>
            </div>
            <span>Nhà xe Thuận Thực</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <button type="button" className="navbar-link" onClick={() => scrollToSection("hero")}>
              Trang chủ
            </button>
            <button type="button" className="navbar-link" onClick={() => scrollToSection("tuyen-xe")}>
              Tuyến xe
            </button>
            <button type="button" className="navbar-link" onClick={() => scrollToSection("dat-ve")}>
              Đặt vé
            </button>
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