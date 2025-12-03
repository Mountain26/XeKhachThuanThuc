import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./PolicyPage.css";

const copy = {
  vi: {
    title: "Giới thiệu Nhà xe Thuận Thực",
    updated: "Cập nhật tháng 12/2025",
    intro: [
      "Nhà xe Thuận Thực là đơn vị vận tải hành khách hoạt động hơn 10 năm trên các tuyến trọng điểm khu vực miền Bắc và miền Trung.",
      "Chúng tôi hướng đến mô hình nhà xe hiện đại với triết lý vận hành:",
    ],
    motto: "“An toàn – Đúng giờ – Tận tâm.”",
    history:
      "Từ những chuyến xe đầu tiên xuất phát tại Hà Giang, Thuận Thực không ngừng mở rộng mạng lưới, nâng cấp chất lượng dịch vụ và xây dựng đội ngũ nhân sự giàu kinh nghiệm. Mỗi ngày, hàng trăm hành khách lựa chọn Thuận Thực bởi sự ổn định, chuyên nghiệp và tinh thần phục vụ tận tụy.",
    visionTitle: "Tầm nhìn & Sứ mệnh",
    visionList: [
      "Trở thành một trong những đơn vị vận tải uy tín tại miền Bắc.",
      "Mang đến trải nghiệm di chuyển tiện nghi, an toàn và dễ tiếp cận cho mọi hành khách.",
      "Không ngừng nâng cấp dịch vụ, tiếp thu phản hồi và ứng dụng công nghệ vào quản lý.",
    ],
    valuesTitle: "Giá trị cốt lõi",
    valuesList: [
      "An toàn: Tuân thủ quy trình kiểm tra phương tiện nghiêm ngặt trước mỗi chuyến.",
      "Đúng giờ: Cam kết khởi hành đúng lịch, hạn chế tối đa các phát sinh.",
      "Tận tâm: Hỗ trợ khách hàng từ khi đặt vé đến khi kết thúc hành trình.",
      "Minh bạch: Công khai thông tin chuyến đi, chính sách cọc và thanh toán rõ ràng.",
    ],
    routesTitle: "Hệ thống tuyến xe",
    routesIntro:
      "Thuận Thực hiện vận hành nhiều tuyến xe trọng yếu kết nối Hà Giang với các tỉnh, thành như:",
    routes: [
      "Lạng Sơn",
      "Bắc Ninh",
      "Bắc Giang",
      "Chí Linh",
      "Quảng Ninh",
      "Móng Cái",
      "Thái Nguyên",
    ],
    routesOutro:
      "Chúng tôi liên tục mở rộng thêm các tuyến mới để phục vụ nhu cầu đi lại ngày càng cao của khách hàng.",
    teamTitle: "Đội ngũ & phương tiện",
    teamCopy: [
      "Nhân sự tổng đài, lái xe và phụ xe của Thuận Thực đều được đào tạo bài bản, giàu kinh nghiệm và luôn giữ thái độ lịch sự, hỗ trợ khách tối đa.",
      "Mỗi phương tiện đều được kiểm tra định kỳ, vệ sinh kỹ lưỡng và bảo dưỡng đúng chuẩn để đảm bảo hành trình trọn vẹn.",
    ],
    commitmentTitle: "Cam kết của Thuận Thực",
    commitments: [
      "Không nhồi nhét khách",
      "Không tự ý tăng giá",
      "Không hủy chuyến vô cớ",
      "Luôn đặt sự an toàn của hành khách lên hàng đầu",
    ],
    closing: "Thuận Thực rất mong có cơ hội đồng hành cùng bạn trên mỗi hành trình.",
    back: "Quay về trang chủ",
  },
  en: {
    title: "About Thuận Thực Coachlines",
    updated: "Updated December 2025",
    intro: [
      "Thuận Thực Coachlines has provided inter-provincial passenger transport for more than a decade across key Northern and Central Viet Nam corridors.",
      "We pursue a modern coach operator model founded on the operating philosophy:",
    ],
    motto: "“Safety – Punctuality – Service at heart.”",
    history:
      "From the very first departures out of Ha Giang, we have continued to expand our network, upgrade service quality, and build a seasoned operations team. Hundreds of passengers choose Thuận Thực every day thanks to our reliability, professionalism, and wholehearted service mindset.",
    visionTitle: "Vision & Mission",
    visionList: [
      "Become one of the most trusted coach operators in Northern Viet Nam.",
      "Deliver safe, comfortable, and accessible journeys for every passenger.",
      "Continuously enhance our services, embrace customer feedback, and apply technology in daily operations.",
    ],
    valuesTitle: "Core Values",
    valuesList: [
      "Safety: Strict pre-trip inspections and maintenance before every journey.",
      "Punctuality: Depart on schedule and minimise unexpected delays.",
      "Service: Support passengers from reservation to arrival with genuine care.",
      "Transparency: Clearly communicate trip details, deposit terms, and payment policies.",
    ],
    routesTitle: "Route Network",
    routesIntro:
      "Thuận Thực currently connects Ha Giang with a wide range of key destinations, including:",
    routes: [
      "Lang Son",
      "Bac Ninh",
      "Bac Giang",
      "Chi Linh",
      "Quang Ninh",
      "Mong Cai",
      "Thai Nguyen",
    ],
    routesOutro:
      "We continue to explore new routes to meet the growing travel demand of our passengers.",
    teamTitle: "People & Fleet",
    teamCopy: [
      "Our hotline agents, drivers, and attendants receive structured training, bring years of experience, and always maintain a courteous, supportive attitude.",
      "Every vehicle undergoes scheduled inspections, thorough cleaning, and proper servicing to keep each trip seamless.",
    ],
    commitmentTitle: "Our Commitments",
    commitments: [
      "No overloading passengers",
      "No unilateral price increases",
      "No arbitrary trip cancellations",
      "Safety of every passenger comes first",
    ],
    closing: "We look forward to accompanying you on every journey.",
    back: "Back to home",
  },
};

export function AboutPage() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="policy-page">
      <header className="policy-page__header">
        <h1 className="policy-page__title">{content.title}</h1>
        <span className="policy-page__updated">{content.updated}</span>
        <div className="policy-page__introduction">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote>{content.motto}</blockquote>
          <p>{content.history}</p>
        </div>
      </header>

      <section className="policy-page__section">
        <h2 className="policy-page__section-title">{content.visionTitle}</h2>
        <ul className="policy-page__list">
          {content.visionList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="policy-page__section">
        <h2 className="policy-page__section-title">{content.valuesTitle}</h2>
        <ul className="policy-page__list">
          {content.valuesList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="policy-page__section">
        <h2 className="policy-page__section-title">{content.routesTitle}</h2>
        <div className="policy-page__section-content">
          <p>{content.routesIntro}</p>
          <ul className="policy-page__list">
            {content.routes.map((route) => (
              <li key={route}>{route}</li>
            ))}
          </ul>
          <p>{content.routesOutro}</p>
        </div>
      </section>

      <section className="policy-page__section">
        <h2 className="policy-page__section-title">{content.teamTitle}</h2>
        <div className="policy-page__section-content">
          {content.teamCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="policy-page__section">
        <h2 className="policy-page__section-title">{content.commitmentTitle}</h2>
        <ul className="policy-page__list">
          {content.commitments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="policy-page__footer">
        <p>{content.closing}</p>
        <Link to="/" className="policy-page__back-link">
          {content.back}
        </Link>
      </footer>
    </div>
  );
}
