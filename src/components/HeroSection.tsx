import { useEffect, useMemo, useRef, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import heroMainImage from "./assets/xett2.jpg";
import heroFrameAlternateImage from "./assets/xe.jpg";
import heroFrameThirdImage from "./assets/xett.jpg";
import heroBusImage from "./assets/hero-bus.png";

import "./HeroSection.css";

export function HeroSection() {
  const { language } = useLanguage();

  const copy = language === "vi"
    ? {
        title: "Dịch vụ xe giường nằm cao cấp",
        subtitle: "Thuận Thực đồng hành cùng bạn trên mọi hành trình",
        description:
          "Gọi điện đặt vé trực tuyến trong vài giây, lên xe đúng giờ, trải nghiệm tiện nghi hiện đại và đội ngũ tài xế tận tâm. Chúng tôi cam kết mang đến chuyến đi an toàn, êm ái và đúng lịch trình.",
        primaryCta: "Đặt vé ngay",
        secondaryCta: "Xem lịch trình",
        hotlineLabel: "Tổng đài 24/7",
        heroAlt: "Khoang xe Thuận Thực sang trọng",
        busAlt: "Hình ảnh xe Thuận Thực",
      }
    : {
        title: "Premium sleeper coach service",
        subtitle: "Thuận Thực accompanies you on every journey",
        description:
          "Book online in seconds, depart on time, and enjoy modern amenities with a caring driver team. We deliver safe, smooth trips that stay on schedule.",
        primaryCta: "Book now",
        secondaryCta: "View schedule",
        hotlineLabel: "24/7 hotline",
        heroAlt: "Thuận Thực luxury coach cabin",
        busAlt: "Thuận Thực coach exterior",
      };

  const heroFrameImages = useMemo(
    () => [heroMainImage, heroFrameAlternateImage, heroFrameThirdImage],
    [heroMainImage, heroFrameAlternateImage, heroFrameThirdImage],
  );
  const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroImageIndex((prevIndex) => (prevIndex + 1) % heroFrameImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [heroFrameImages]);

  useEffect(() => {
    hasMountedRef.current = true;
  }, []);

  const activeHeroImage = heroFrameImages[activeHeroImageIndex];

  const brandSource = "Thuận Thực";
  const brandDisplay = "THUẬN THỰC";
  const subtitleParts = copy.subtitle.split(brandSource);

  const subtitleContent = subtitleParts.length > 1
    ? (
        <>
          {subtitleParts[0]}
          <span className="hero-brand-highlight">{brandDisplay}</span>
          {subtitleParts.slice(1).join(brandSource)}
        </>
      )
    : copy.subtitle;

  const scrollToBooking = () => {
    const el = document.getElementById("tim-chuyen");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Decorative curved shapes */}
      <div className="hero-shape hero-shape--right">
        <div className="hero-bubble hero-bubble--right-primary" />
        <div className="hero-bubble hero-bubble--right-secondary" />
      </div>

      <div className="hero-shape hero-shape--left">
        <div className="hero-bubble hero-bubble--left-primary" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            {/* Large heading */}
            <div className="hero-heading-group">
              <h1 className="hero-heading-primary">{copy.title}</h1>
              <h2 className="hero-heading-secondary">{subtitleContent}</h2>
            </div>

            {/* Subtitle */}
            <p className="hero-description">{copy.description}</p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <Button size="lg" className="hero-cta-primary" asChild>
                <a href="tel:0983250900">
                  {copy.primaryCta}
                  <ArrowRight />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hero-cta-secondary"
                type="button"
                onClick={scrollToBooking}
              >
                {copy.secondaryCta}
              </Button>
            </div>

            {/* Hotline */}
            <div className="hero-hotline">
              <div className="hero-hotline__icon">
                <Phone />
              </div>
              <div>
                <div className="hero-hotline__label">{copy.hotlineLabel}</div>
                <div className="hero-hotline__value">0983.250.900</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Large background image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-media"
          >
            {/* Curved image frame for landscape */}
            <div className="hero-media-frame">
              <div className="hero-media-placeholder">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeHeroImage}
                    src={activeHeroImage}
                    alt={copy.heroAlt}
                    initial={hasMountedRef.current ? { opacity: 0, scale: 0.98 } : { opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </AnimatePresence>
              </div>
              {/* Decorative overlay */}
              <div className="hero-media-overlay" />
            </div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hero-floating hero-floating--primary"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hero-floating hero-floating--secondary"
            />
          </motion.div>
        </div>

        {/* Bus image placeholder - positioned in lower left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-bus-wrapper hero-bus-wrapper--full"
        >
          <div className="hero-bus-highlight" />
          {/* Bus frame with perspective */}
          <div className="hero-bus-frame">
            <div className="hero-bus-placeholder">
              <img src={heroBusImage} alt={copy.busAlt} />
            </div>
            <div className="hero-bus-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}