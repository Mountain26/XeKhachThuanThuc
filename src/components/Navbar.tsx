import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";

import brandLogo from "./assets/THUẬN THỰC HÀ GIANG.png";
import flagVn from "./assets/flag-vi.svg";
import flagEn from "./assets/flag-en.svg";

import "./Navbar.css";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const labels = language === "vi"
    ? {
        home: "Trang chủ",
        search: "Tìm chuyến",
        routes: "Tuyến xe",
        contact: "Liên hệ",
        toggle: "EN",
        toggleAria: "Chuyển sang tiếng Anh",
        brand: "Về trang chủ",
      }
    : {
        home: "Home",
        search: "Find trips",
        routes: "Routes",
        contact: "Contact",
        toggle: "VI",
        toggleAria: "Switch to Vietnamese",
        brand: "Go to homepage",
      };

  const toggleText = labels.toggle;
  const toggleAria = labels.toggleAria;
  const targetFlag = language === "vi" ? flagEn : flagVn;
  const targetFlagAlt = language === "vi" ? "English flag" : "Vietnamese flag";

  const renderLanguageButton = (extraClassName?: string) => (
    <Button
      type="button"
      size="sm"
      className={`navbar-language-button${extraClassName ? ` ${extraClassName}` : ""}`}
      onClick={toggleLanguage}
      aria-label={toggleAria}
    >
      <span className="navbar-language-text">{toggleText}</span>
      <span className="navbar-language-flags">
        <img src={targetFlag} alt={targetFlagAlt} className="navbar-language-flag" />
      </span>
    </Button>
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    scrollToSection(id);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-row">
          {/* Logo placeholder */}
          <div className="navbar-brand">
            <button
              type="button"
              className="navbar-brand-button"
              onClick={() => handleNavigation("hero")}
              aria-label={labels.brand}
            >
              <img className="logoBB" src={brandLogo} alt="Thuận Thực" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <button type="button" className="navbar-link" onClick={() => handleNavigation("hero")}>
              {labels.home}
            </button>
            <button type="button" className="navbar-link" onClick={() => handleNavigation("tim-chuyen")}>
              {labels.search}
            </button>
            <button type="button" className="navbar-link" onClick={() => handleNavigation("tuyen-xe")}>
              {labels.routes}
            </button>
            <button type="button" className="navbar-link" onClick={() => handleNavigation("lien-he")}>
              {labels.contact}
            </button>
            {renderLanguageButton("navbar-language-button--desktop")}
          </div>
          <div className="navbar-actions">
            <div className="navbar-language-mobile">{renderLanguageButton("navbar-language-button--mobile")}</div>
            <button type="button" className="navbar-menu-button" aria-label={language === "vi" ? "Mở menu" : "Open menu"}>
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}