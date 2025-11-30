import { Phone, Facebook } from "lucide-react";

import "./FloatingContacts.css";

export function FloatingContacts() {
  return (
    <div className="floating-contacts" aria-label="Kênh liên hệ nhanh">
      <a
        className="floating-contacts__item floating-contacts__item--zalo"
        href="https://zalo.me/nhaxethuanthuc23"
        target="_blank"
        rel="noreferrer"
        aria-label="Liên hệ Zalo"
      >
        <span className="floating-contacts__icon floating-contacts__icon--zalo" aria-hidden="true">
          <span className="floating-contacts__icon-text">Zalo</span>
        </span>
      </a>
      <a
        className="floating-contacts__item floating-contacts__item--hotline"
        href="tel:0983250900"
        aria-label="Gọi tổng đài"
      >
        <span className="floating-contacts__icon" aria-hidden="true">
          <Phone />
        </span>
      </a>
      <a
        className="floating-contacts__item floating-contacts__item--facebook"
        href="https://www.facebook.com/nhaxethuanthuc"
        target="_blank"
        rel="noreferrer"
        aria-label="Theo dõi Facebook"
      >
        <span className="floating-contacts__icon" aria-hidden="true">
          <Facebook />
        </span>
      </a>
    </div>
  );
}
