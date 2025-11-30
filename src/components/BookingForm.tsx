import * as React from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { AnimatePresence, motion } from "motion/react";

import "./BookingForm.css";

const serviceLocations = [
  { value: "ha-giang", label: "Hà Giang" },
  { value: "mong-cai", label: "Móng Cái" },
  { value: "quang-ninh", label: "Quảng Ninh" },
  { value: "bac-ninh", label: "Bắc Ninh" },
  { value: "bac-giang", label: "Bắc Giang" },
  { value: "lang-son", label: "Lạng Sơn" },
  { value: "sao-do", label: "Sao Đỏ" },
  { value: "thai-nguyen", label: "Thái Nguyên" },
];

const coachRoutes = [
  {
    id: 1,
    origin: "ha-giang",
    destination: "mong-cai",
    fromLabel: "Hà Giang",
    toLabel: "Móng Cái",
    departure: "08:00 | 20:00",
    duration: "9 giờ 30 phút",
    hotline: "0983 250 900",
    note: "Xe giường nằm 34 phòng, trung chuyển nội thành Hà Giang",
  },
  {
    id: 2,
    origin: "ha-giang",
    destination: "quang-ninh",
    fromLabel: "Hà Giang",
    toLabel: "Quảng Ninh",
    departure: "07:30 | 21:30",
    duration: "8 giờ",
    hotline: "0983 250 900",
    note: "Chạy thẳng Bãi Cháy - Hòn Gai, đón trả tận nơi",
  },
  {
    id: 3,
    origin: "ha-giang",
    destination: "bac-ninh",
    fromLabel: "Hà Giang",
    toLabel: "Bắc Ninh",
    departure: "06:00 | 19:00",
    duration: "5 giờ 30 phút",
    hotline: "0835 227 228",
    note: "Ghế massage, nước uống miễn phí",
  },
  {
    id: 4,
    origin: "ha-giang",
    destination: "bac-giang",
    fromLabel: "Hà Giang",
    toLabel: "Bắc Giang",
    departure: "06:30 | 19:30",
    duration: "5 giờ 45 phút",
    hotline: "0835 227 228",
    note: "Đón tại BX Bắc Giang, trả tận cửa hàng Thuận Thực",
  },
  {
    id: 5,
    origin: "ha-giang",
    destination: "lang-son",
    fromLabel: "Hà Giang",
    toLabel: "Lạng Sơn",
    departure: "07:00 | 18:30",
    duration: "6 giờ 30 phút",
    hotline: "0983 250 900",
    note: "Kết nối Cao Bằng - Đồng Đăng, ký gửi nhanh",
  },
  {
    id: 6,
    origin: "ha-giang",
    destination: "sao-do",
    fromLabel: "Hà Giang",
    toLabel: "Sao Đỏ",
    departure: "07:30 | 20:00",
    duration: "6 giờ",
    hotline: "0983 250 900",
    note: "Dừng nghỉ Hải Dương, hỗ trợ giao nhận hàng",
  },
  {
    id: 7,
    origin: "ha-giang",
    destination: "thai-nguyen",
    fromLabel: "Hà Giang",
    toLabel: "Thái Nguyên",
    departure: "05:30 | 17:30",
    duration: "4 giờ 30 phút",
    hotline: "0983 250 900",
    note: "Có trung chuyển tới khu công nghiệp",
  },
  {
    id: 8,
    origin: "mong-cai",
    destination: "ha-giang",
    fromLabel: "Móng Cái",
    toLabel: "Hà Giang",
    departure: "06:30 | 18:30",
    duration: "9 giờ 45 phút",
    hotline: "0983 250 900",
    note: "Đón trả tại TT Trà Cổ, hỗ trợ khách du lịch",
  },
  {
    id: 9,
    origin: "quang-ninh",
    destination: "ha-giang",
    fromLabel: "Quảng Ninh",
    toLabel: "Hà Giang",
    departure: "07:00 | 19:00",
    duration: "8 giờ",
    hotline: "0983 250 900",
    note: "Đón tại Cẩm Phả - Hạ Long",
  },
];

export function BookingForm() {
  const [origin, setOrigin] = React.useState<string>("ha-giang");
  const [destination, setDestination] = React.useState<string>("mong-cai");
  const [results, setResults] = React.useState<typeof coachRoutes>([]);
  const [hasSearched, setHasSearched] = React.useState(false);

  const handleSearch = () => {
    const filtered = coachRoutes.filter((route) => {
      const matchForward = route.origin === origin && route.destination === destination;
      const matchReverse = route.origin === destination && route.destination === origin;
      return matchForward || matchReverse;
    });

    setResults(filtered);
    setHasSearched(true);
  };

  return (
    <section className="booking-form-section">
      <div className="booking-form-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="booking-form-card"
        >
          {/* Form title */}
          <div className="booking-form-header">
            <h3 className="booking-form-title">Đặt vé trực tuyến</h3>
            <p className="booking-form-description">Nhập thông tin hành trình để xem chuyến phù hợp</p>
          </div>

          {/* Booking form grid */}
          <div className="booking-form-grid">
            {/* Origin input */}
            <div className="booking-field">
              <label className="booking-label">Điểm khởi hành</label>
              <div className="booking-input-wrapper">
                <span className="booking-icon">
                  <MapPin />
                </span>
                <Select value={origin} onValueChange={setOrigin}>
                  <SelectTrigger className="booking-select-trigger">
                    <SelectValue placeholder="Chọn điểm khởi hành" className="booking-select-value" />
                  </SelectTrigger>
                  <SelectContent className="booking-select-content">
                    {serviceLocations.map((location) => (
                      <SelectItem key={location.value} value={location.value}>
                        {location.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Destination input */}
            <div className="booking-field">
              <label className="booking-label">Điểm đến</label>
              <div className="booking-input-wrapper">
                <span className="booking-icon">
                  <MapPin />
                </span>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="booking-select-trigger">
                    <SelectValue placeholder="Chọn điểm đến" className="booking-select-value" />
                  </SelectTrigger>
                  <SelectContent className="booking-select-content">
                    {serviceLocations.map((location) => (
                      <SelectItem key={location.value} value={location.value}>
                        {location.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search button */}
            <div className="booking-field">
              <label className="booking-label booking-helper-label">&nbsp;</label>
              <Button className="booking-search-button" type="button" onClick={handleSearch}>
                <Search />
                Tìm chuyến
              </Button>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {(hasSearched || results.length > 0) && (
              <motion.div
                key={results.map((route) => route.id).join("-") || "empty"}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="booking-results"
              >
                {results.length > 0 ? (
                  <div className="booking-results-grid">
                    {results.map((route) => (
                      <motion.article
                        key={route.id}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="booking-result-card"
                      >
                        <div className="booking-result-route">
                          <div>
                            <div className="booking-result-label">Tuyến</div>
                            <div className="booking-result-path">{route.fromLabel} -&gt; {route.toLabel}</div>
                          </div>
                          <div className="booking-result-departure">
                            <span className="booking-result-label">Giờ chạy</span>
                            <span>{route.departure}</span>
                          </div>
                        </div>
                        <div className="booking-result-info">
                          <div>
                            <span className="booking-result-label">Thời gian hành trình</span>
                            <span>{route.duration}</span>
                          </div>
                          <div>
                            <span className="booking-result-label">Hotline</span>
                            <a href={`tel:${route.hotline.replace(/\s/g, "")}`}>{route.hotline}</a>
                          </div>
                        </div>
                        <p className="booking-result-note">{route.note}</p>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className="booking-results-empty">
                    Không tìm thấy tuyến phù hợp, vui lòng chọn điểm đi và điểm đến khác.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}