import * as React from "react";
import { ArrowDown, ArrowUp, BusFront } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import routeImageA from "./assets/xett.jpg";
import routeImageB from "./assets/xett2.jpg";
import routeImageC from "./assets/Bus1.jpg";

import "./PopularRoutes.css";

const routes = [
  {
    id: 1,
    from: { vi: "Hà Giang", en: "Ha Giang" },
    to: { vi: "Móng Cái", en: "Mong Cai" },
    time: { vi: "9 giờ 30 phút", en: "9h 30m" },
    price: "450.000 đ",
    distance: { vi: "530 km", en: "530 km" },
    image: routeImageA,
  },
  {
    id: 2,
    from: { vi: "Hà Giang", en: "Ha Giang" },
    to: { vi: "Quảng Ninh", en: "Quang Ninh" },
    time: { vi: "8 giờ", en: "8h" },
    price: "350.000 đ",
    distance: { vi: "470 km", en: "470 km" },
    image: routeImageB,
  },
  {
    id: 3,
    from: { vi: "Hà Giang", en: "Ha Giang" },
    to: { vi: "Bắc Ninh", en: "Bac Ninh" },
    time: { vi: "5 giờ 30 phút", en: "5h 30m" },
    price: "250.000 đ",
    distance: { vi: "320 km", en: "320 km" },
    image: routeImageC,
  },
  {
    id: 4,
    from: { vi: "Hà Giang", en: "Ha Giang" },
    to: { vi: "Bắc Giang", en: "Bac Giang" },
    time: { vi: "5 giờ 45 phút", en: "5h 45m" },
    price: "250.000 đ",
    distance: { vi: "310 km", en: "310 km" },
    image: routeImageC,
  },
  {
    id: 5,
    from: { vi: "Hà Giang", en: "Ha Giang" },
    to: { vi: "Lạng Sơn", en: "Lang Son" },
    time: { vi: "6 giờ 30 phút", en: "6h 30m" },
    price: "350.000 đ",
    distance: { vi: "420 km", en: "420 km" },
    image: routeImageA,
  },
  {
    id: 6,
    from: { vi: "Hà Giang", en: "Ha Giang" },
    to: { vi: "Sao Đỏ", en: "Sao Do" },
    time: { vi: "6 giờ", en: "6h" },
    price: "300.000 đ",
    distance: { vi: "380 km", en: "380 km" },
    image: routeImageC,
  },
  {
    id: 7,
    from: { vi: "Hà Giang", en: "Ha Giang" },
    to: { vi: "Thái Nguyên", en: "Thai Nguyen" },
    time: { vi: "4 giờ 30 phút", en: "4h 30m" },
    price: "200.000 đ",
    distance: { vi: "270 km", en: "270 km" },
    image: routeImageB,
  },
];

const copy = {
  vi: {
    heading: "Tuyến xe nổi bật",
    description:
      "Các tuyến xe Thuận Thực đang phục vụ cố định, giá vé niêm yết rõ ràng và lên đường mỗi ngày",
    vehicleTag: "Limousine 24 phòng VIP",
    timeLabel: "Thời gian:",
    distanceLabel: "Khoảng cách:",
    bookNow: "Đặt vé ngay",
    viewAll: "Xem toàn bộ tuyến",
    collapse: "Thu gọn",
  },
  en: {
    heading: "Popular routes",
    description: "Fixed Thuận Thực services with transparent fares and daily departures",
    vehicleTag: "24-suite VIP limousine",
    timeLabel: "Duration:",
    distanceLabel: "Distance:",
    bookNow: "Book now",
    viewAll: "View all routes",
    collapse: "Show less",
  },
} as const;

export function PopularRoutes() {
  const { language } = useLanguage();
  const labels = copy[language];
  const [showAll, setShowAll] = React.useState(false);
  const visibleRoutes = showAll ? routes : routes.slice(0, 3);
  const hasMoreRoutes = routes.length > 3;
  const gridVariants: Variants = {
    collapsed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    expanded: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.86,
      rotateX: -18,
      filter: "blur(12px)",
      transformOrigin: "top center",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 280,
        mass: 0.82,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateX: 12,
      filter: "blur(6px)",
      transition: {
        duration: 0.26,
        ease: [0.45, 0.05, 0.2, 1],
      },
    },
  };

  return (
    <section className="routes-section" id="tuyen-xe">
      <div className="routes-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="routes-header"
        >
          <h2 className="routes-title">{labels.heading}</h2>
          <p className="routes-description">{labels.description}</p>
        </motion.div>

        {/* Routes grid */}
        <motion.div
          layout
          className="routes-grid"
          variants={gridVariants}
          initial={false}
          animate={showAll ? "expanded" : "collapsed"}
          transition={{ layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleRoutes.map((route) => (
              <motion.div
                layout
                key={route.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                style={{ transformPerspective: "900px" }}
                className="route-card"
              >
              {/* Image placeholder */}
                <div className="route-media">
                  <div className="route-media-placeholder">
                    <img
                      src={route.image}
                      alt={`Xe Thuận Thực tuyến ${route.from[language]} - ${route.to[language]}`}
                    />
                  </div>
                  <div className="route-media-overlay" />

                  <div className="route-price">{route.price}</div>
                </div>

              {/* Card content */}
              <div className="route-body">
                <div className="route-meta">
                  <BusFront />
                  <span>{labels.vehicleTag}</span>
                </div>

                <div className="route-path">
                  <div className="route-points">
                    <div className="route-point">
                      <div className="route-point__dot" />
                      <span>{route.from[language]}</span>
                    </div>
                    <div className="route-connector">
                      <ArrowDown />
                    </div>
                    <div className="route-point">
                      <div className="route-point__dot route-point__dot--destination" />
                      <span>{route.to[language]}</span>
                    </div>
                  </div>
                  <div className="route-fare">
                    <span className="route-fare-value">{route.price}</span>
                  </div>
                </div>

                <div className="route-info">
                  <div className="route-info-row">
                    <span className="route-info-label">Thời gian:</span>
                    <span>{route.time[language]}</span>
                  </div>
                  <div className="route-info-row">
                    <span className="route-info-label">Khoảng cách:</span>
                    <span>{route.distance[language]}</span>
                  </div>
                </div>

                <Button className="route-button" asChild>
                  <a href="tel:0983250900">{labels.bookNow}</a>
                </Button>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        {hasMoreRoutes && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="routes-toggle"
          >
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="routes-toggle-button"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? labels.collapse : labels.viewAll}
              {showAll ? <ArrowUp /> : <ArrowDown />}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
