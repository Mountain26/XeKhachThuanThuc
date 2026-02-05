import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import "./ContactButtons.css";

export function ContactButtons() {
  const { language } = useLanguage();

  const labels = language === "vi"
    ? {
        title: "Liên hệ với chúng tôi",
        subtitle: "Chọn kênh phù hợp để được hỗ trợ ngay",
        callMain: "Gọi tổng đài",
        callSecond: "Gọi Viettel",
        zalo: "Liên hệ Zalo",
      }
    : {
        title: "Contact us",
        subtitle: "Pick a channel to get instant support",
        callMain: "Call hotline",
        callSecond: "Call Viettel",
        zalo: "Message on Zalo",
      };

  return (
    <section className="contact-section" id="lien-he">
      <div className="contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-heading"
        >
          <h3 className="contact-title">{labels.title}</h3>
          <p className="contact-subtitle">{labels.subtitle}</p>
        </motion.div>

        <div className="contact-actions">
          {/* Gọi tổng đài */}
          <motion.a
            href="tel:0983250900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-button"
          >
            <div className="contact-button__icon">
              <Phone />
            </div>
            <span>{labels.callMain}</span>
          </motion.a>

          {/* Gọi Viettel */}
          <motion.a
            href="tel:0835227228"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-button"
          >
            <div className="contact-button__icon">
              <Phone />
            </div>
            <span>{labels.callSecond}</span>
          </motion.a>

          {/* Liên hệ Zalo */}
          <motion.a
            href="https://zalo.me/nhaxethuanthuc23"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-button"
          >
            <div className="contact-button__icon">
              <MessageCircle />
            </div>
            <span>{labels.zalo}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
