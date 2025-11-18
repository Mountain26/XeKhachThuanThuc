import * as React from "react";
import { Clock, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";

import "./PopularRoutes.css";

const routes = [
  { id: 1, from: "Hà Giang", to: "Móng Cái", time: "9 giờ 30 phút", price: "450.000 đ" },
  { id: 2, from: "Hà Giang", to: "Quảng Ninh", time: "8 giờ", price: "350.000 đ" },
  { id: 3, from: "Hà Giang", to: "Bắc Ninh", time: "5 giờ 30 phút", price: "250.000 đ" },
  { id: 4, from: "Hà Giang", to: "Bắc Giang", time: "5 giờ 45 phút", price: "250.000 đ" },
  { id: 5, from: "Hà Giang", to: "Lạng Sơn", time: "6 giờ 30 phút", price: "350.000 đ" },
  { id: 6, from: "Hà Giang", to: "Sao Đỏ", time: "6 giờ", price: "300.000 đ" },
  { id: 7, from: "Hà Giang", to: "Thái Nguyên", time: "4 giờ 30 phút", price: "200.000 đ" },
];

export function PopularRoutes() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleRoutes = showAll ? routes : routes.slice(0, 6);
  const hasMoreRoutes = routes.length > 6;

  return (
    <section className="routes-section">
      <div className="routes-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="routes-header"
        >
          <h2 className="routes-title">Tuyến xe nổi bật</h2>
          <p className="routes-description">
            Các tuyến xe Thuận Thực đang phục vụ cố định, giá vé niêm yết rõ ràng và lên đường mỗi ngày
          </p>
        </motion.div>

        {/* Routes grid */}
        <motion.div layout className="routes-grid">
          <AnimatePresence initial={false}>
            {visibleRoutes.map((route) => (
              <motion.div
                layout
                key={route.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="route-card"
              >
              {/* Image placeholder */}
              <div className="route-media">
                <div className="route-media-placeholder">
                  <img
                    src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/539355485_1198959562040848_9198228117422014222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaPuFAwxFnGFbth200kBevhaETSgzlmUuFoRNKDOWZS9CEdNf5ohUbzEqip2RmBI1mb_v-8fUJV_ua_FA51P_M&_nc_ohc=C1RX9YdBMCkQ7kNvwF77e2G&_nc_oc=AdkwKUPgrdk4RmBXAy1ptmMSh7Psm-yZ60iiydosIujM0aABbFZtd8v2iQ-pkSP0lJY&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8IX1S-8s95y0v1yussgM3g&oh=00_Afj7HG-4KpGzUkVXcNn_eAxxRW507e_hWuqV-xyOQJPHPg&oe=69221869"
                    alt="Hình ảnh xe Thuận Thực"
                  />
                </div>
                <div className="route-media-overlay" />

                {/* Price badge */}
                <div className="route-price">
                  {route.price}
                </div>
              </div>

              {/* Card content */}
              <div className="route-body">
                <div className="route-path">
                  <div className="route-point">
                    <div className="route-point__dot" />
                    <span>{route.from}</span>
                  </div>
                  <div className="route-connector">
                    <ArrowDown />
                  </div>
                  <div className="route-point">
                    <div className="route-point__dot route-point__dot--destination" />
                    <span>{route.to}</span>
                  </div>
                </div>

                <div className="route-time">
                  <Clock />
                  <span>{route.time}</span>
                </div>

                <Button className="route-button">
                  Đặt vé tuyến này
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
              {showAll ? "Thu gọn" : "Xem toàn bộ tuyến"}
              {showAll ? <ArrowUp /> : <ArrowDown />}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
