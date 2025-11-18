import { Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

import "./HeroSection.css";

export function HeroSection() {
  const scrollToBooking = () => {
    const el = document.getElementById("dat-ve");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-section">
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
              <h1 className="hero-heading-primary">
                Dịch vụ xe giường nằm cao cấp
              </h1>
              <h2 className="hero-heading-secondary">
                Thuận Thực đồng hành cùng bạn trên mọi hành trình
              </h2>
            </div>

            {/* Subtitle */}
            <p className="hero-description">
              Đặt vé trực tuyến trong vài giây, lên xe đúng giờ, trải nghiệm tiện nghi hiện đại và đội ngũ tài xế tận tâm. Chúng tôi cam kết mang đến chuyến đi an toàn, êm ái và đúng lịch trình.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <Button size="lg" className="hero-cta-primary" asChild>
                <a href="tel:0983250900">
                  Đặt vé ngay
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
                Xem lịch trình
              </Button>
            </div>

            {/* Hotline */}
            <div className="hero-hotline">
              <div className="hero-hotline__icon">
                <Phone />
              </div>
              <div>
                <div className="hero-hotline__label">Tổng đài 24/7</div>
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
                <img src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/539355485_1198959562040848_9198228117422014222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaPuFAwxFnGFbth200kBevhaETSgzlmUuFoRNKDOWZS9CEdNf5ohUbzEqip2RmBI1mb_v-8fUJV_ua_FA51P_M&_nc_ohc=C1RX9YdBMCkQ7kNvwF77e2G&_nc_oc=AdkwKUPgrdk4RmBXAy1ptmMSh7Psm-yZ60iiydosIujM0aABbFZtd8v2iQ-pkSP0lJY&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8IX1S-8s95y0v1yussgM3g&oh=00_Afj7HG-4KpGzUkVXcNn_eAxxRW507e_hWuqV-xyOQJPHPg&oe=69221869" alt="" />
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
          className="hero-bus-wrapper"
        >
          <div className="hero-bus-highlight" />
          {/* Bus frame with perspective */}
          <div className="hero-bus-frame">
            <div className="hero-bus-placeholder">
              <div>
                <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/546107152_1208961634373974_7912001924818000482_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGME48F9NO9nIZ3bE3FCoXDiHUjDMG-UqCIdSMMwb5SoI6xURU7rdl4RPNe-SzKpYPMVrJgEZ4OM6JgWgu8385h&_nc_ohc=COGFwSD5sx0Q7kNvwEhauyu&_nc_oc=AdnxlDaZyFFb8jVSYoz_ewkJPQAuXEkRB9FNW_1aIsmr8S5A4sxr6qk9qxSBDARTg1k&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=FhOZfBw7WWAIJKOvSh5JrQ&oh=00_AfgACLPX0EN7tvQdCMHbzxqAfrXB7yCslDEKL8PRxfa6og&oe=69224A10" alt="Hình ảnh xe Thuận Thực" />
              </div>
            </div>
            <div className="hero-bus-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}