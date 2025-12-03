import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import footerLogo from "./assets/footer-logo.png";
import { FacebookPageEmbed } from "./FacebookPageEmbed";
import "./Footer.css";

const copy = {
  vi: {
    brandText: "Nhà xe Thuận Thực",
    description:
      "Nhà xe Thuận Thực chuyên các tuyến Hà Giang – Quảng Ninh, Móng Cái, Bắc Ninh, Bắc Giang, Lạng Sơn với dòng xe giường nằm và limousine cao cấp, an toàn, đúng giờ.",
    quickLinks: "Liên kết nhanh",
    about: "Giới thiệu",
    schedule: "Lịch trình",
    bookingPolicy: "Chính sách đặt vé",
    terms: "Điều khoản sử dụng",
    privacy: "Chính sách bảo mật",
    contact: "Liên hệ",
    address: "Số 18 Nguyễn Trãi, TP Hà Giang",
    hotline: "0983 250 900",
    email: "Congtytnhhvtthuanthuc@gmail.com",
    facebookLabel: "Facebook",
    facebookDescription: "Nhà xe Thuận Thực",
    facebookWidgetHeading: "Fanpage Facebook",
    facebookWidgetTitle: "Nhà xe Thuận Thực trên Facebook",
    copyright: "© 2025 Nhà xe Thuận Thực. Đã đăng ký bản quyền.",
    bottomPrivacy: "Chính sách bảo mật",
    bottomTerms: "Điều khoản dịch vụ",
    bottomCookie: "Chính sách cookie",
    socialsLabel: "Kết nối mạng xã hội",
  },
  en: {
    brandText: "Thuận Thực Coachlines",
    description:
      "Thuận Thực Coachlines connects Ha Giang with Quang Ninh, Mong Cai, Bac Ninh, Bac Giang, and Lang Son via premium sleeper coaches and limousine suites, prioritising safety and punctuality.",
    quickLinks: "Quick links",
    about: "About",
    schedule: "Timetable",
    bookingPolicy: "Ticket policy",
    terms: "Terms of use",
    privacy: "Privacy policy",
    contact: "Contact",
    address: "18 Nguyen Trai, Ha Giang City",
    hotline: "0983 250 900",
    email: "Congtytnhhvtthuanthuc@gmail.com",
    facebookLabel: "Facebook",
    facebookDescription: "Thuận Thực Coachlines",
    facebookWidgetHeading: "Facebook fanpage",
    facebookWidgetTitle: "Thuận Thực Coachlines on Facebook",
    copyright: "© 2025 Thuận Thực Coachlines. All rights reserved.",
    bottomPrivacy: "Privacy policy",
    bottomTerms: "Terms of service",
    bottomCookie: "Cookie policy",
    socialsLabel: "Connect on social media",
  },
} as const;

const FACEBOOK_URL = "https://www.facebook.com/nhaxethuanthuc";
const ZALO_URL = "https://zalo.me/nhaxethuanthuc23";
const MAILTO_URL = "mailto:Congtytnhhvtthuanthuc@gmail.com";

export function Footer() {
  const { language } = useLanguage();
  const labels = copy[language];
  const hotlineHref = labels.hotline.replace(/\D/g, "");
  const logoAlt = language === "vi" ? "Logo Nhà xe Thuận Thực" : "Thuận Thực Coachlines logo";

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="footer-logo">
                <img className="logoTT" src={footerLogo} alt={logoAlt} />
              </div>
              <span className="footer-text">{labels.brandText}</span>
            </div>
            <p className="footer-description">{labels.description}</p>
            <div className="footer-socials">
              <span className="footer-socials-heading">{labels.socialsLabel}</span>
              <div className="footer-social-list">
                <a
                  className="footer-social-button footer-social-button--facebook"
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  className="footer-social-button footer-social-button--zalo"
                  href={ZALO_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Zalo"
                >
                  <span className="footer-social-zalo">Zalo</span>
                </a>
                <a
                  className="footer-social-button footer-social-button--mail"
                  href={MAILTO_URL}
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{labels.quickLinks}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/gioi-thieu" className="footer-link">
                  {labels.about}
                </Link>
              </li>
              <li>
                <Link to="/lich-trinh" className="footer-link">
                  {labels.schedule}
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-dat-ve" className="footer-link">
                  {labels.bookingPolicy}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="footer-link">
                  {labels.terms}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  {labels.privacy}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="footer-link">
                  {labels.bottomCookie}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">{labels.contact}</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin />
                <span>{labels.address}</span>
              </li>
              <li className="footer-contact-item">
                <Phone />
                <a href={`tel:${hotlineHref}`} className="footer-contact-link">
                  {labels.hotline}
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail />
                <a href={`mailto:${labels.email}`} className="footer-contact-link">
                  {labels.email}
                </a>
              </li>
              <li className="footer-contact-item">
                <Facebook />
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link"
                >
                  {labels.facebookLabel}: {labels.facebookDescription}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">{labels.facebookWidgetHeading}</h4>
            <FacebookPageEmbed pageUrl={FACEBOOK_URL} title={labels.facebookWidgetTitle} />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{labels.copyright}</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">{labels.bottomPrivacy}</Link>
            <Link to="/terms-of-service">{labels.bottomTerms}</Link>
            <Link to="/cookie-policy">{labels.bottomCookie}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}