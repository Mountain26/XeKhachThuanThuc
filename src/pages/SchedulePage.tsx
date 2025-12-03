import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./PolicyPage.css";

type LegCopy = {
  direction: string;
  times: string[];
};

type RouteCopy = {
  route: string;
  legs: LegCopy[];
};

const copy = {
  vi: {
    title: "Lịch trình tuyến xe Thuận Thực",
    updated: "Cập nhật tháng 12/2025",
    introduction: [
      "Danh sách dưới đây tổng hợp các khung giờ khởi hành hiện có của Nhà xe Thuận Thực.",
      "Thông tin mang tính tham khảo và có thể điều chỉnh theo tình hình thực tế. Vui lòng liên hệ tổng đài để xác nhận trước khi đặt vé.",
    ],
    routes: [
      {
        route: "Tuyến Hà Giang ⇄ Lạng Sơn",
        legs: [
          { direction: "Hà Giang → Lạng Sơn", times: ["07:30", "18:30"] },
          { direction: "Lạng Sơn → Hà Giang", times: ["06:30", "17:30"] },
        ],
      },
      {
        route: "Tuyến Hà Giang ⇄ Bắc Ninh",
        legs: [
          { direction: "Hà Giang → Bắc Ninh", times: ["07:30", "11:00", "20:00"] },
          { direction: "Bắc Ninh → Hà Giang", times: ["09:00", "11:00", "20:30", "21:30"] },
        ],
      },
      {
        route: "Tuyến Hà Giang ⇄ Móng Cái",
        legs: [
          { direction: "Hà Giang → Móng Cái", times: ["20:00"] },
          { direction: "Móng Cái → Hà Giang", times: ["14:30"] },
        ],
      },
      {
        route: "Tuyến Hà Giang ⇄ Quảng Ninh",
        legs: [
          { direction: "Hà Giang → Quảng Ninh", times: ["11:00", "18:00", "20:00"] },
          { direction: "Quảng Ninh → Hà Giang", times: ["07:00", "16:20", "17:30"] },
        ],
      },
      {
        route: "Tuyến Hà Giang ⇄ Thái Nguyên",
        legs: [
          { direction: "Hà Giang → Thái Nguyên", times: ["07:30", "18:00", "18:30", "20:00"] },
          { direction: "Thái Nguyên → Hà Giang", times: ["10:00", "21:30", "22:15"] },
        ],
      },
      {
        route: "Tuyến Hà Giang ⇄ Chí Linh",
        legs: [
          { direction: "Hà Giang → Chí Linh", times: ["11:00", "18:00", "20:00"] },
          { direction: "Chí Linh → Hà Giang", times: ["10:30", "19:30", "20:30"] },
        ],
      },
      {
        route: "Tuyến Hà Giang ⇄ Bắc Giang",
        legs: [
          { direction: "Hà Giang → Bắc Giang", times: ["07:30", "11:00", "18:30", "20:00"] },
          { direction: "Bắc Giang → Hà Giang", times: ["08:00", "11:00", "20:00", "21:30"] },
        ],
      },
    ] satisfies RouteCopy[],
    noteTitle: "Lưu ý",
    notes: [
      "Giờ khởi hành có thể thay đổi khi cao điểm hoặc điều kiện thời tiết bất lợi.",
      "Vui lòng đến bến trước giờ xuất phát tối thiểu 15 phút để làm thủ tục và sắp xếp hành lý.",
    ],
    back: "Quay về trang chủ",
  },
  en: {
    title: "Thuận Thực Timetable",
    updated: "Updated December 2025",
    introduction: [
      "The following list summarises current departure windows operated by Thuận Thực Coachlines.",
      "Schedules are indicative and may be adjusted based on real-world conditions. Please contact our hotline to reconfirm before travelling.",
    ],
    routes: [
      {
        route: "Route Ha Giang ⇄ Lang Son",
        legs: [
          { direction: "Ha Giang → Lang Son", times: ["07:30", "18:30"] },
          { direction: "Lang Son → Ha Giang", times: ["06:30", "17:30"] },
        ],
      },
      {
        route: "Route Ha Giang ⇄ Bac Ninh",
        legs: [
          { direction: "Ha Giang → Bac Ninh", times: ["07:30", "11:00", "20:00"] },
          { direction: "Bac Ninh → Ha Giang", times: ["09:00", "11:00", "20:30", "21:30"] },
        ],
      },
      {
        route: "Route Ha Giang ⇄ Mong Cai",
        legs: [
          { direction: "Ha Giang → Mong Cai", times: ["20:00"] },
          { direction: "Mong Cai → Ha Giang", times: ["14:30"] },
        ],
      },
      {
        route: "Route Ha Giang ⇄ Quang Ninh",
        legs: [
          { direction: "Ha Giang → Quang Ninh", times: ["11:00", "18:00", "20:00"] },
          { direction: "Quang Ninh → Ha Giang", times: ["07:00", "16:20", "17:30"] },
        ],
      },
      {
        route: "Route Ha Giang ⇄ Thai Nguyen",
        legs: [
          { direction: "Ha Giang → Thai Nguyen", times: ["07:30", "18:00", "18:30", "20:00"] },
          { direction: "Thai Nguyen → Ha Giang", times: ["10:00", "21:30", "22:15"] },
        ],
      },
      {
        route: "Route Ha Giang ⇄ Chi Linh",
        legs: [
          { direction: "Ha Giang → Chi Linh", times: ["11:00", "18:00", "20:00"] },
          { direction: "Chi Linh → Ha Giang", times: ["10:30", "19:30", "20:30"] },
        ],
      },
      {
        route: "Route Ha Giang ⇄ Bac Giang",
        legs: [
          { direction: "Ha Giang → Bac Giang", times: ["07:30", "11:00", "18:30", "20:00"] },
          { direction: "Bac Giang → Ha Giang", times: ["08:00", "11:00", "20:00", "21:30"] },
        ],
      },
    ] satisfies RouteCopy[],
    noteTitle: "Notes",
    notes: [
      "Departure times may shift during peak seasons or adverse weather conditions.",
      "Please arrive at least 15 minutes before departure for check-in and luggage arrangements.",
    ],
    back: "Back to home",
  },
};

export function SchedulePage() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="policy-page">
      <header className="policy-page__header">
        <h1 className="policy-page__title">{content.title}</h1>
        <span className="policy-page__updated">{content.updated}</span>
        <div className="policy-page__introduction">
          {content.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      {content.routes.map((route) => (
        <section key={route.route} className="policy-page__section">
          <h2 className="policy-page__section-title">{route.route}</h2>
          <div className="policy-page__section-content">
            {route.legs.map((leg) => (
              <div key={leg.direction}>
                <p className="policy-page__subheading">{leg.direction}</p>
                <p>{leg.times.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="policy-page__section">
        <h2 className="policy-page__section-title">{content.noteTitle}</h2>
        <ul className="policy-page__list">
          {content.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <footer className="policy-page__footer">
        <Link to="/" className="policy-page__back-link">
          {content.back}
        </Link>
      </footer>
    </div>
  );
}
