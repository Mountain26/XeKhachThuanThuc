import * as React from "react";
import { ArrowDown, ArrowUp, BusFront } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";

import "./PopularRoutes.css";

const routes = [
  {
    id: 1,
    from: "Hà Giang",
    to: "Móng Cái",
    time: "9 giờ 30 phút",
    price: "450.000 đ",
    distance: "530 km",
    image:
      "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/539355485_1198959562040848_9198228117422014222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaPuFAwxFnGFbth200kBevhaETSgzlmUuFoRNKDOWZS9CEdNf5ohUbzEqip2RmBI1mb_v-8fUJV_ua_FA51P_M&_nc_ohc=C1RX9YdBMCkQ7kNvwF77e2G&_nc_oc=AdkwKUPgrdk4RmBXAy1ptmMSh7Psm-yZ60iiydosIujM0aABbFZtd8v2iQ-pkSP0lJY&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8IX1S-8s95y0v1yussgM3g&oh=00_Afj7HG-4KpGzUkVXcNn_eAxxRW507e_hWuqV-xyOQJPHPg&oe=69221869",
  },
  {
    id: 2,
    from: "Hà Giang",
    to: "Quảng Ninh",
    time: "8 giờ",
    price: "350.000 đ",
    distance: "470 km",
    image:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/546107152_1208961634373974_7912001924818000482_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGME48F9NO9nIZ3bE3FCoXDiHUjDMG-UqCIdSMMwb5SoI6xURU7rdl4RPNe-SzKpYPMVrJgEZ4OM6JgWgu8385h&_nc_ohc=COGFwSD5sx0Q7kNvwEhauyu&_nc_oc=AdnxlDaZyFFb8jVSYoz_ewkJPQAuXEkRB9FNW_1aIsmr8S5A4sxr6qk9qxSBDARTg1k&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=FhOZfBw7WWAIJKOvSh5JrQ&oh=00_AfgACLPX0EN7tvQdCMHbzxqAfrXB7yCslDEKL8PRxfa6og&oe=69224A10",
  },
  {
    id: 3,
    from: "Hà Giang",
    to: "Bắc Ninh",
    time: "5 giờ 30 phút",
    price: "250.000 đ",
    distance: "320 km",
    image:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/528152085_1181214270482044_2082145697686854411_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUg8SqAnj1cod-PnXz8_2xOxHZ3aUbfT47EdndpRt9Put2zBRKwd96EtdkvLHVOKtYDhbO-FBD6S71vwLsqjo6&_nc_ohc=Hvuk4vOYc1AQ7kNvwGHOi9C&_nc_oc=AdlwY84VyfZggJX06LlpECyRLlB7xoZ5DJZvX3wjZDKJPPkbiySXhoQXWKEriTXwgOE&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Jdi9_FaNbFhLv1FZPjOeWA&oh=00_Afj4vrea6jFcwEfyPNFktOxdzbYdP5P_XjCkc9C02TQX7A&oe=69225B5E",
  },
  {
    id: 4,
    from: "Hà Giang",
    to: "Bắc Giang",
    time: "5 giờ 45 phút",
    price: "250.000 đ",
    distance: "310 km",
    image:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/528152085_1181214270482044_2082145697686854411_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUg8SqAnj1cod-PnXz8_2xOxHZ3aUbfT47EdndpRt9Put2zBRKwd96EtdkvLHVOKtYDhbO-FBD6S71vwLsqjo6&_nc_ohc=Hvuk4vOYc1AQ7kNvwGHOi9C&_nc_oc=AdlwY84VyfZggJX06LlpECyRLlB7xoZ5DJZvX3wjZDKJPPkbiySXhoQXWKEriTXwgOE&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Jdi9_FaNbFhLv1FZPjOeWA&oh=00_Afj4vrea6jFcwEfyPNFktOxdzbYdP5P_XjCkc9C02TQX7A&oe=69225B5E",
  },
  {
    id: 5,
    from: "Hà Giang",
    to: "Lạng Sơn",
    time: "6 giờ 30 phút",
    price: "350.000 đ",
    distance: "420 km",
    image:
      "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/539355485_1198959562040848_9198228117422014222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaPuFAwxFnGFbth200kBevhaETSgzlmUuFoRNKDOWZS9CEdNf5ohUbzEqip2RmBI1mb_v-8fUJV_ua_FA51P_M&_nc_ohc=C1RX9YdBMCkQ7kNvwF77e2G&_nc_oc=AdkwKUPgrdk4RmBXAy1ptmMSh7Psm-yZ60iiydosIujM0aABbFZtd8v2iQ-pkSP0lJY&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8IX1S-8s95y0v1yussgM3g&oh=00_Afj7HG-4KpGzUkVXcNn_eAxxRW507e_hWuqV-xyOQJPHPg&oe=69221869",
  },
  {
    id: 6,
    from: "Hà Giang",
    to: "Sao Đỏ",
    time: "6 giờ",
    price: "300.000 đ",
    distance: "380 km",
    image:
      "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/539355485_1198959562040848_9198228117422014222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaPuFAwxFnGFbth200kBevhaETSgzlmUuFoRNKDOWZS9CEdNf5ohUbzEqip2RmBI1mb_v-8fUJV_ua_FA51P_M&_nc_ohc=C1RX9YdBMCkQ7kNvwF77e2G&_nc_oc=AdkwKUPgrdk4RmBXAy1ptmMSh7Psm-yZ60iiydosIujM0aABbFZtd8v2iQ-pkSP0lJY&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8IX1S-8s95y0v1yussgM3g&oh=00_Afj7HG-4KpGzUkVXcNn_eAxxRW507e_hWuqV-xyOQJPHPg&oe=69221869",
  },
  {
    id: 7,
    from: "Hà Giang",
    to: "Thái Nguyên",
    time: "4 giờ 30 phút",
    price: "200.000 đ",
    distance: "270 km",
    image:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/546107152_1208961634373974_7912001924818000482_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGME48F9NO9nIZ3bE3FCoXDiHUjDMG-UqCIdSMMwb5SoI6xURU7rdl4RPNe-SzKpYPMVrJgEZ4OM6JgWgu8385h&_nc_ohc=COGFwSD5sx0Q7kNvwEhauyu&_nc_oc=AdnxlDaZyFFb8jVSYoz_ewkJPQAuXEkRB9FNW_1aIsmr8S5A4sxr6qk9qxSBDARTg1k&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=FhOZfBw7WWAIJKOvSh5JrQ&oh=00_AfgACLPX0EN7tvQdCMHbzxqAfrXB7yCslDEKL8PRxfa6og&oe=69224A10",
  },
];

export function PopularRoutes() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleRoutes = showAll ? routes : routes.slice(0, 3);
  const hasMoreRoutes = routes.length > 3;

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
                    <img src={route.image} alt={route.to} />
                  </div>
                  <div className="route-media-overlay" />

                  <div className="route-price">{route.price}</div>
                </div>

              {/* Card content */}
              <div className="route-body">
                <div className="route-meta">
                  <BusFront />
                  <span>Limousine 24 phòng VIP</span>
                </div>

                <div className="route-path">
                  <div className="route-points">
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
                  <div className="route-fare">
                    <span className="route-fare-value">{route.price}</span>
                  </div>
                </div>

                <div className="route-info">
                  <div className="route-info-row">
                    <span className="route-info-label">Thời gian:</span>
                    <span>{route.time}</span>
                  </div>
                  <div className="route-info-row">
                    <span className="route-info-label">Khoảng cách:</span>
                    <span>{route.distance}</span>
                  </div>
                </div>

                <Button className="route-button" asChild>
                  <a href="tel:0983250900">
                    Đặt vé
                  </a>
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
