import * as React from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { BookingForm } from "./components/BookingForm";
import { ContactButtons } from "./components/ContactButtons";
import { FloatingContacts } from "./components/FloatingContacts";
import { PopularRoutes } from "./components/PopularRoutes";
import { ServiceSection } from "./components/ServiceSection";
import { Footer } from "./components/Footer";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { AboutPage } from "./pages/AboutPage";
import { BookingPolicyPage } from "./pages/BookingPolicyPage";
import { SchedulePage } from "./pages/SchedulePage";
import { CookiePolicyPage, PrivacyPolicyPage, TermsOfServicePage } from "./pages/PolicyPages";

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function SeoHead() {
  const { language } = useLanguage();
  const location = useLocation();

  const meta = React.useMemo(() => {
    const baseMeta =
      language === "vi"
        ? {
            title: "Xe Khách Thuận Thực",
            description:
              "Đặt vé xe Thuận Thực đi Hà Giang, Quảng Ninh, Móng Cái, Bắc Ninh, Bắc Giang, Lạng Sơn. Xe giường nằm, xe khách sạn, xe cung điện VIP. Gọi 0983.250.900.",
            schemaName: "Xe Khách Thuận Thực",
          }
        : {
            title: "Thuận Thực Coachlines",
            description:
              "Book Thuận Thực coaches for routes Ha Giang – Quang Ninh, Mong Cai, Bac Ninh, Bac Giang, Lang Son. Premium sleeper buses and VIP limousines. Call 0983.250.900.",
            schemaName: "Thuận Thực Coachlines",
          };

    const policyMetaVi = {
      "/privacy-policy": {
        title: "Chính sách bảo mật – Nhà xe Thuận Thực",
        description:
          "Tìm hiểu cách Nhà xe Thuận Thực xử lý thông tin khách hàng khi đặt vé qua tổng đài và quyền riêng tư của bạn.",
      },
      "/terms-of-service": {
        title: "Điều khoản dịch vụ – Nhà xe Thuận Thực",
        description:
          "Điều khoản sử dụng dịch vụ và trách nhiệm của Nhà xe Thuận Thực đối với hành khách khi đặt vé và sử dụng dịch vụ.",
      },
      "/cookie-policy": {
        title: "Chính sách cookie – Nhà xe Thuận Thực",
        description:
          "Giải thích cách Nhà xe Thuận Thực sử dụng cookie để cải thiện trải nghiệm và quản lý dữ liệu truy cập của bạn.",
      },
    } as const;

    const policyMetaEn = {
      "/privacy-policy": {
        title: "Privacy Policy – Thuận Thực Coachlines",
        description:
          "Learn how Thuận Thực Coachlines handles customer information when booking via hotline and your privacy rights.",
      },
      "/terms-of-service": {
        title: "Terms of Service – Thuận Thực Coachlines",
        description:
          "Understand the service terms and responsibilities when booking with Thuận Thực Coachlines.",
      },
      "/cookie-policy": {
        title: "Cookie Policy – Thuận Thực Coachlines",
        description:
          "How Thuận Thực Coachlines uses cookies to improve your browsing experience and manage analytics data.",
      },
    } as const;

    const policyMeta = language === "vi" ? policyMetaVi : policyMetaEn;
    return policyMeta[location.pathname as keyof typeof policyMeta] ?? baseMeta;
  }, [language, location.pathname]);

  React.useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const placeholderTitle = "www.xehagiang.me";
    const targetTitle = meta.title;

    document.title = placeholderTitle;
    document.documentElement.setAttribute("lang", language === "vi" ? "vi" : "en");

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", meta.description);

    const scriptId = "structured-data-bus";
    let jsonLdScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.type = "application/ld+json";
      jsonLdScript.id = scriptId;
      document.head.appendChild(jsonLdScript);
    }

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BusOrCoach",
      name: language === "vi" ? "Nhà xe Thuận Thực" : "Thuận Thực Coachlines",
      url: origin,
      telephone: "+84983250900",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Số 18 Nguyễn Trãi, TP Hà Giang",
        addressLocality: "Hà Giang",
        addressCountry: "VN",
      },
      areaServed: ["Hà Giang", "Quảng Ninh", "Móng Cái", "Bắc Ninh", "Bắc Giang", "Lạng Sơn"],
      sameAs: ["https://www.facebook.com/nhaxethuanthuc"],
    };

    jsonLdScript.textContent = JSON.stringify(jsonLd);

    const timer = window.setTimeout(() => {
      document.title = targetTitle;
    }, 1200);

    return () => {
      window.clearTimeout(timer);
      document.title = targetTitle;
    };
  }, [language, meta]);

  return null;
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const target = location.state?.scrollTo as string | undefined;
    if (!target) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      navigate(location.pathname, { replace: true, state: undefined });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [location, navigate]);

  return (
    <>
      <HeroSection />
      <BookingForm />
      <ContactButtons />
      <PopularRoutes />
      <ServiceSection />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <SeoHead />
        <ScrollToTop />
        <Navbar />
        <FloatingContacts />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/lich-trinh" element={<SchedulePage />} />
            <Route path="/chinh-sach-dat-ve" element={<BookingPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}