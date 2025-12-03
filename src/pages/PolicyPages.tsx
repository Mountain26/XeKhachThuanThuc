import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./PolicyPage.css";

const CONTACT_INFO = {
  company: "Nhà xe Thuận Thực",
  address: "Số 18 Nguyễn Trãi, TP Hà Giang",
  phone: "0983 250 900",
  email: "Congtytnhhvtthuanthuc@gmail.com",
};

type PolicySection = {
  heading: string;
  content: React.ReactNode;
};

type PolicyPageProps = {
  title: string;
  updated: string;
  introduction: React.ReactNode;
  sections: PolicySection[];
};

function PolicyPageBase({ title, updated, introduction, sections }: PolicyPageProps) {
  const { language } = useLanguage();

  const copy = React.useMemo(
    () =>
      language === "vi"
        ? {
            lastUpdatedLabel: "Cập nhật lần cuối:",
            contactHeading: "Thông tin liên hệ",
            contactDescription:
              "Nếu bạn có bất kỳ câu hỏi nào liên quan đến nội dung trên, vui lòng liên hệ:",
            backToHome: "← Quay về trang chủ",
            addressLabel: "Địa chỉ",
            hotlineLabel: "Hotline",
            emailLabel: "Email",
          }
        : {
            lastUpdatedLabel: "Last updated:",
            contactHeading: "Contact information",
            contactDescription:
              "If you have any questions about the content above, please reach out:",
            backToHome: "← Back to homepage",
            addressLabel: "Address",
            hotlineLabel: "Hotline",
            emailLabel: "Email",
          },
    [language],
  );

  return (
    <article className="policy-page">
      <header className="policy-page__header">
        <h1 className="policy-page__title">{title}</h1>
        <p className="policy-page__updated">
          {copy.lastUpdatedLabel} {updated}
        </p>
        <div className="policy-page__introduction">{introduction}</div>
      </header>

      {sections.map((section) => (
        <section key={section.heading} className="policy-page__section">
          <h2 className="policy-page__section-title">{section.heading}</h2>
          <div className="policy-page__section-content">{section.content}</div>
        </section>
      ))}

      <footer className="policy-page__footer">
        <h2 className="policy-page__section-title">{copy.contactHeading}</h2>
        <div className="policy-page__section-content">
          <p>{copy.contactDescription}</p>
          <ul className="policy-page__list">
            <li>
              <strong>{CONTACT_INFO.company}</strong>
            </li>
            <li>
              {copy.addressLabel}: {CONTACT_INFO.address}
            </li>
            <li>
              {copy.hotlineLabel}: {" "}
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}>{CONTACT_INFO.phone}</a>
            </li>
            <li>
              {copy.emailLabel}: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="policy-page__back-link">
          {copy.backToHome}
        </Link>
      </footer>
    </article>
  );
}

export function CookiePolicyPage() {
  const { language } = useLanguage();

  const content = React.useMemo(() => {
    if (language === "vi") {
      const introduction = (
        <p>
          Trang web của Nhà xe Thuận Thực ("chúng tôi") sử dụng cookie và các công nghệ tương tự để cải thiện
          trải nghiệm của bạn, hiểu cách người dùng tương tác và hỗ trợ hoạt động marketing. Chính sách này giải
          thích cookie là gì, chúng tôi sử dụng những loại cookie nào và cách bạn có thể quản lý chúng.
        </p>
      );

      const sections: PolicySection[] = [
        {
          heading: "1. Cookie là gì?",
          content: (
            <>
              <p>
                Cookie là những tệp nhỏ được lưu trên thiết bị của bạn (máy tính, điện thoại, máy tính bảng…)
                khi bạn truy cập một trang web. Cookie giúp lưu lại một số lựa chọn của bạn như:
              </p>
              <ul className="policy-page__list">
                <li>Lựa chọn ngôn ngữ hiển thị;</li>
                <li>Thông tin đăng nhập hoặc phiên làm việc (nếu có);</li>
                <li>Tùy chọn giao diện và các hành vi tương tác trên trang.</li>
              </ul>
              <p>
                Cookie không phải lúc nào cũng chứa thông tin nhận dạng cá nhân, nhưng trong một số trường hợp dữ
                liệu thu thập được có thể liên hệ với bạn.
              </p>
            </>
          ),
        },
        {
          heading: "2. Chúng tôi sử dụng những loại cookie nào?",
          content: (
            <>
              <p>Tùy thời điểm, trang web của chúng tôi có thể sử dụng các nhóm cookie sau:</p>

              <h3 className="policy-page__subheading">2.1. Cookie cần thiết (Strictly Necessary Cookies)</h3>
              <p>
                Đây là các cookie cần thiết để trang web hoạt động bình thường, ví dụ ghi nhớ phiên làm việc,
                đảm bảo các biểu mẫu hoạt động ổn định và hỗ trợ bảo mật. Bạn không thể tắt các cookie này từ hệ
                thống của chúng tôi, nhưng có thể chặn ở cấp trình duyệt (một số chức năng có thể không hoạt động
                đúng).
              </p>

              <h3 className="policy-page__subheading">2.2. Cookie hiệu suất / thống kê (Analytics Cookies)</h3>
              <p>
                Các cookie này giúp chúng tôi hiểu cách người dùng tương tác với trang web, ví dụ số lượt truy cập,
                nguồn truy cập hay trang được xem. Dữ liệu được thu thập ở dạng tổng hợp và không nhằm xác định danh
                tính cá nhân.
              </p>

              <h3 className="policy-page__subheading">2.3. Cookie chức năng (Functional Cookies)</h3>
              <p>
                Cookie chức năng giúp ghi nhớ các lựa chọn của bạn như ngôn ngữ (Tiếng Việt / Tiếng Anh) hoặc các tùy
                chỉnh giao diện, nhờ đó khi quay lại trang bạn không phải thiết lập lại từ đầu.
              </p>

              <h3 className="policy-page__subheading">2.4. Cookie quảng cáo / tiếp thị (Advertising Cookies)</h3>
              <p>
                Nếu chúng tôi triển khai chiến dịch quảng cáo (ví dụ Google Ads remarketing), cookie quảng cáo có thể
                được sử dụng để hiển thị nội dung phù hợp hơn, giới hạn số lần hiển thị quảng cáo và đo lường hiệu
                quả chiến dịch. Khi chưa sử dụng, nhóm cookie này sẽ không được kích hoạt.
              </p>
            </>
          ),
        },
        {
          heading: "3. Cookie bên thứ ba",
          content: (
            <>
              <p>
                Ngoài cookie do chúng tôi đặt, một số cookie có thể đến từ bên thứ ba mà chúng tôi hợp tác như công cụ
                phân tích (Google Analytics), nền tảng quảng cáo (Google Ads) hoặc nút chia sẻ mạng xã hội (Facebook,
                Zalo…). Các bên này có chính sách bảo mật riêng, bạn nên tham khảo trực tiếp nếu cần thêm thông tin.
              </p>
            </>
          ),
        },
        {
          heading: "4. Làm sao để quản lý hoặc tắt cookie?",
          content: (
            <>
              <p>Bạn có thể quản lý cookie thông qua trình duyệt của mình, bao gồm:</p>
              <ul className="policy-page__list">
                <li>Chặn tất cả cookie hoặc chỉ chấp nhận một số loại cookie nhất định;</li>
                <li>Xóa cookie đã lưu bất kỳ lúc nào;</li>
                <li>
                  Tìm trong phần cài đặt: <em>Settings → Privacy &amp; Security → Cookies and site data</em> để điều
                  chỉnh theo nhu cầu.
                </li>
              </ul>
              <p>
                Lưu ý: Nếu bạn tắt một số cookie, một số chức năng (ví dụ ghi nhớ ngôn ngữ, giữ thông tin đặt vé) có
                thể hoạt động không đúng.
              </p>
            </>
          ),
        },
        {
          heading: "5. Thay đổi đối với Chính sách Cookie",
          content: (
            <>
              <p>
                Chúng tôi có thể cập nhật chính sách này để phản ánh thay đổi về công nghệ, dịch vụ hoặc yêu cầu pháp
                lý. Ngày "Cập nhật lần cuối" sẽ thể hiện lần cập nhật gần nhất và phiên bản mới có hiệu lực ngay khi
                được đăng tải.
              </p>
            </>
          ),
        },
      ];

      return {
        title: "Chính sách Cookie của Nhà xe Thuận Thực",
        introduction,
        sections,
      };
    }

    const introduction = (
      <p>
        Thuận Thực Coachlines ("we") uses cookies and similar technologies to enhance your experience, understand how
        visitors interact with the site, and support limited marketing activities. This policy explains what cookies are,
        which types we may use, and how you can control them.
      </p>
    );

    const sections: PolicySection[] = [
      {
        heading: "1. What are cookies?",
        content: (
          <>
            <p>
              Cookies are small files stored on your device (computer, phone, tablet, etc.) when you visit a website. They
              help remember certain preferences, such as:
            </p>
            <ul className="policy-page__list">
              <li>Your preferred display language;</li>
              <li>Login details or active sessions (where applicable);</li>
              <li>Interface preferences and how you interact with the site.</li>
            </ul>
            <p>
              Cookies do not always contain personal data, but in some cases the collected information can be associated
              with you.
            </p>
          </>
        ),
      },
      {
        heading: "2. Which types of cookies do we use?",
        content: (
          <>
            <p>Depending on the period, our website may rely on the following groups of cookies:</p>

            <h3 className="policy-page__subheading">2.1. Strictly necessary cookies</h3>
            <p>
              These cookies keep the website running properly by maintaining sessions, stabilising forms, and supporting
              security. They cannot be disabled in our systems, though you can block them in your browser (some features
              may then stop working as expected).
            </p>

            <h3 className="policy-page__subheading">2.2. Performance or analytics cookies</h3>
            <p>
              Analytics cookies help us understand how visitors interact with the site, for example the number of visits,
              traffic sources, or popular pages. The data is aggregated and not used to identify you personally.
            </p>

            <h3 className="policy-page__subheading">2.3. Functional cookies</h3>
            <p>
              Functional cookies remember choices such as language (Vietnamese or English) or layout settings, so you do
              not need to reconfigure them each time you return.
            </p>

            <h3 className="policy-page__subheading">2.4. Advertising or marketing cookies</h3>
            <p>
              When we run advertising campaigns (for example Google Ads remarketing), these cookies may display more
              relevant content, limit how often an ad appears, and measure campaign performance. If no campaigns are
              active, this group remains disabled.
            </p>
          </>
        ),
      },
      {
        heading: "3. Third-party cookies",
        content: (
          <>
            <p>
              Besides our own cookies, partners such as analytics providers (Google Analytics), advertising networks
              (Google Ads), or social sharing buttons (Facebook, Zalo, etc.) may place cookies. These parties maintain
              their own privacy policies, so please review them directly for details.
            </p>
          </>
        ),
      },
      {
        heading: "4. How can you manage or disable cookies?",
        content: (
          <>
            <p>You can control cookies through your browser settings, including:</p>
            <ul className="policy-page__list">
              <li>Blocking all cookies or only allowing selected categories;</li>
              <li>Deleting stored cookies at any time;</li>
              <li>
                Opening <em>Settings &gt; Privacy &amp; Security &gt; Cookies and site data</em> to adjust the behaviour
                to your preference.
              </li>
            </ul>
            <p>
              Note: Disabling certain cookies may impact features such as remembering your language or keeping booking
              details ready.
            </p>
          </>
        ),
      },
      {
        heading: "5. Updates to this Cookie Policy",
        content: (
          <>
            <p>
              We may update this policy to reflect changes in technology, services, or legal requirements. The "Last
              updated" date shows the latest revision, and new versions take effect once published.
            </p>
          </>
        ),
      },
    ];

    return {
      title: "Thuận Thực Coachlines Cookie Policy",
      introduction,
      sections,
    };
  }, [language]);

  return (
    <PolicyPageBase
      title={content.title}
      updated="01/01/2025"
      introduction={content.introduction}
      sections={content.sections}
    />
  );
}

export function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const content = React.useMemo(() => {
    if (language === "vi") {
      const introduction = (
        <p>
          Trang web của Nhà xe Thuận Thực được vận hành nhằm cung cấp thông tin về lịch trình, dịch vụ và hỗ trợ khách
          hàng. Việc đặt vé hiện được thực hiện qua tổng đài, không thu thập thông tin cá nhân trực tiếp trên website.
          Chính sách này giải thích cách chúng tôi xử lý thông tin khi khách hàng liên hệ.
        </p>
      );

      const sections: PolicySection[] = [
        {
          heading: "1. Chúng tôi thu thập thông tin gì?",
          content: (
            <>
              <p>Khi khách hàng gọi tổng đài đặt vé, nhân viên có thể yêu cầu:</p>
              <ul className="policy-page__list">
                <li>Họ và tên;</li>
                <li>Số điện thoại liên hệ;</li>
                <li>Số lượng vé và tuyến xe;</li>
                <li>Giờ chạy mong muốn;</li>
                <li>Thông tin cọc (đối với đơn giữ chỗ từ 4 vé trở lên).</li>
              </ul>
              <p>
                Chúng tôi không thu thập thông tin qua biểu mẫu trực tuyến, cookie marketing hoặc thanh toán trực tuyến
                trên website.
              </p>
            </>
          ),
        },
        {
          heading: "2. Mục đích sử dụng thông tin",
          content: (
            <>
              <p>Thông tin được sử dụng cho các mục đích sau:</p>
              <ul className="policy-page__list">
                <li>Xác nhận yêu cầu đặt vé và giữ chỗ;</li>
                <li>Liên hệ khi cần bổ sung thông tin hoặc thay đổi lộ trình;</li>
                <li>Gửi hướng dẫn chuyển khoản cọc (nếu áp dụng);</li>
                <li>Hỗ trợ giải quyết các vấn đề phát sinh trong quá trình di chuyển.</li>
              </ul>
              <p>Chúng tôi không bán, trao đổi hoặc sử dụng thông tin cho mục đích quảng cáo trái phép.</p>
            </>
          ),
        },
        {
          heading: "3. Chia sẻ thông tin",
          content: (
            <>
              <p>
                Thông tin đặt vé không được chia sẻ với bên thứ ba ngoại trừ khi có yêu cầu hợp pháp từ cơ quan chức năng
                hoặc cho nhân sự nội bộ có nhiệm vụ xử lý chuyến đi.
              </p>
            </>
          ),
        },
        {
          heading: "4. Thời gian lưu giữ thông tin",
          content: (
            <>
              <p>
                Thông tin đặt vé được lưu giữ trong thời gian cần thiết để phục vụ chuyến đi và có thể được xóa định kỳ sau
                khi hành trình hoàn tất.
              </p>
            </>
          ),
        },
        {
          heading: "5. Quyền của khách hàng",
          content: (
            <>
              <p>Bạn có thể liên hệ tổng đài để:</p>
              <ul className="policy-page__list">
                <li>Xem lại thông tin đã cung cấp;</li>
                <li>Chỉnh sửa thông tin sai;</li>
                <li>Yêu cầu xóa thông tin sau khi hoàn thành chuyến đi.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "6. Bảo mật thông tin",
          content: (
            <>
              <p>
                Chúng tôi cam kết không tiết lộ thông tin khách hàng, chỉ nhân viên có thẩm quyền mới được truy cập và luôn
                tuân thủ quy định pháp luật về bảo mật dữ liệu.
              </p>
            </>
          ),
        },
      ];

      return {
        title: "Chính sách bảo mật của Nhà xe Thuận Thực",
        introduction,
        sections,
      };
    }

    const introduction = (
      <p>
        The Thuận Thực Coachlines website provides schedules, service details, and customer support. All bookings are
        handled through our hotline, so we do not collect personal data directly on the site. This policy explains how we
        handle information when passengers contact us.
      </p>
    );

    const sections: PolicySection[] = [
      {
        heading: "1. What information do we collect?",
        content: (
          <>
            <p>When you call our hotline to book tickets, staff may request:</p>
            <ul className="policy-page__list">
              <li>Your full name;</li>
              <li>A contact phone number;</li>
              <li>The route and number of seats required;</li>
              <li>Your preferred departure time;</li>
              <li>Deposit details for reservations of four seats or more.</li>
            </ul>
            <p>
              We do not collect information through online forms, marketing cookies, or online payments on this website.
            </p>
          </>
        ),
      },
      {
        heading: "2. How do we use the information?",
        content: (
          <>
            <p>The information is used to:</p>
            <ul className="policy-page__list">
              <li>Confirm your booking request and hold seats;</li>
              <li>Contact you if additional details or itinerary changes are required;</li>
              <li>Send deposit instructions when applicable;</li>
              <li>Support you with any issues during the trip.</li>
            </ul>
            <p>We do not sell, trade, or use your data for unauthorised advertising.</p>
          </>
        ),
      },
      {
        heading: "3. Information sharing",
        content: (
          <>
            <p>
              Booking information is not shared with third parties unless required by law or with authorised internal staff
              responsible for your journey.
            </p>
          </>
        ),
      },
      {
        heading: "4. Data retention",
        content: (
          <>
            <p>
              We retain booking details only for the time needed to deliver the trip and may delete them periodically after
              the journey is completed.
            </p>
          </>
        ),
      },
      {
        heading: "5. Your rights",
        content: (
          <>
            <p>You may contact the hotline to:</p>
            <ul className="policy-page__list">
              <li>Review the information you provided;</li>
              <li>Correct inaccurate details;</li>
              <li>Request deletion once the trip is finished.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "6. Safeguarding your data",
        content: (
          <>
            <p>
              We do not disclose customer information. Only authorised staff can access it, and we follow applicable data
              protection regulations.
            </p>
          </>
        ),
      },
    ];

    return {
      title: "Thuận Thực Coachlines Privacy Policy",
      introduction,
      sections,
    };
  }, [language]);

  return (
    <PolicyPageBase
      title={content.title}
      updated="01/01/2025"
      introduction={content.introduction}
      sections={content.sections}
    />
  );
}

export function TermsOfServicePage() {
  const { language } = useLanguage();

  const content = React.useMemo(() => {
    if (language === "vi") {
      const introduction = (
        <p>
          Website của Nhà xe Thuận Thực cung cấp thông tin về lịch trình, dịch vụ và hỗ trợ khách hàng. Khi sử dụng trang
          web hoặc đặt vé qua tổng đài, bạn đồng ý với các điều khoản dưới đây.
        </p>
      );

      const sections: PolicySection[] = [
        {
          heading: "1. Phạm vi dịch vụ",
          content: (
            <>
              <p>
                Website chỉ cung cấp thông tin tham khảo, không thực hiện giao dịch đặt vé trực tuyến. Việc đặt vé được
                thực hiện qua tổng đài hoặc tại văn phòng/điểm bán của nhà xe.
              </p>
            </>
          ),
        },
        {
          heading: "2. Đặt vé qua tổng đài",
          content: (
            <>
              <ul className="policy-page__list">
                <li>Khách hàng cung cấp tên và số điện thoại để xác nhận chuyến đi;</li>
                <li>
                  Với đơn từ 4 vé trở lên, nhà xe có thể yêu cầu chuyển khoản cọc để giữ chỗ (nhân viên sẽ thông báo trực tiếp);
                </li>
                <li>Tất cả giao dịch được xác nhận qua cuộc gọi hoặc tin nhắn từ tổng đài.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. Thay đổi, huỷ vé",
          content: (
            <>
              <p>
                Khách có thể liên hệ tổng đài để thay đổi, chuyển hoặc huỷ vé. Trong mùa cao điểm hoặc với vé đã cọc, có thể áp dụng
                chính sách riêng. Nhà xe có quyền điều chỉnh giờ xe trong trường hợp bất khả kháng (thời tiết xấu, sự cố vận hành…).
              </p>
            </>
          ),
        },
        {
          heading: "4. Trách nhiệm của khách hàng",
          content: (
            <>
              <ul className="policy-page__list">
                <li>Cung cấp thông tin chính xác, trung thực;</li>
                <li>Có mặt đúng giờ tại điểm đón;</li>
                <li>Tuân thủ hướng dẫn của nhân viên và tài xế trong suốt hành trình.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. Trách nhiệm của Nhà xe Thuận Thực",
          content: (
            <>
              <p>
                Chúng tôi cam kết cung cấp thông tin chính xác nhất có thể, đảm bảo an toàn và đúng giờ trong khả năng vận hành, đồng
                thời hỗ trợ khách hàng khi có tình huống phát sinh hợp lý.
              </p>
            </>
          ),
        },
        {
          heading: "6. Sử dụng nội dung website",
          content: (
            <>
              <p>
                Bạn không được sao chép, tái xuất bản nội dung trên website khi chưa được phép bằng văn bản, cũng như không sử dụng
                website để phát tán thông tin sai lệch gây ảnh hưởng đến uy tín nhà xe.
              </p>
            </>
          ),
        },
        {
          heading: "7. Thay đổi điều khoản",
          content: (
            <>
              <p>
                Chúng tôi có thể điều chỉnh điều khoản dịch vụ bất cứ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên
                website.
              </p>
            </>
          ),
        },
      ];

      return {
        title: "Điều khoản dịch vụ của Nhà xe Thuận Thực",
        introduction,
        sections,
      };
    }

    const introduction = (
      <p>
        The Thuận Thực Coachlines website provides schedules, service details, and customer support. By using the site or booking
        through our hotline, you agree to the terms outlined below.
      </p>
    );

    const sections: PolicySection[] = [
      {
        heading: "1. Scope of services",
        content: (
          <>
            <p>
              The website offers informational content only and does not process online ticket transactions. Bookings are completed via the
              hotline or at Thuận Thực offices and authorised ticket agents.
            </p>
          </>
        ),
      },
      {
        heading: "2. Booking through the hotline",
        content: (
          <>
            <ul className="policy-page__list">
              <li>Customers provide their name and phone number to confirm the trip;</li>
              <li>
                For reservations of four seats or more, a deposit transfer may be requested. Staff will share the bank details directly;
              </li>
              <li>All transactions are confirmed via hotline calls or messages.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "3. Changes and cancellations",
        content: (
          <>
            <p>
              You may contact the hotline to change, transfer, or cancel tickets. Peak seasons or deposited bookings may follow additional
              policies. We reserve the right to adjust departure times in force majeure situations (severe weather, operational incidents,
              and similar cases).
            </p>
          </>
        ),
      },
      {
        heading: "4. Customer responsibilities",
        content: (
          <>
            <ul className="policy-page__list">
              <li>Provide accurate and truthful information;</li>
              <li>Arrive on time at the designated pick-up point;</li>
              <li>Follow guidance from our staff and drivers throughout the journey.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "5. Responsibilities of Thuận Thực Coachlines",
        content: (
          <>
            <p>
              We strive to supply reliable information, operate safely and punctually within our capabilities, and support passengers through
              reasonable contingencies.
            </p>
          </>
        ),
      },
      {
        heading: "6. Use of website content",
        content: (
          <>
            <p>
              You may not copy or republish website content without written permission, nor use the site to distribute misinformation that
              damages our reputation.
            </p>
          </>
        ),
      },
      {
        heading: "7. Changes to these terms",
        content: (
          <>
            <p>
              We may amend these terms at any time. Updates take effect once they are published on the website.
            </p>
          </>
        ),
      },
    ];

    return {
      title: "Thuận Thực Coachlines Terms of Service",
      introduction,
      sections,
    };
  }, [language]);

  return (
    <PolicyPageBase
      title={content.title}
      updated="01/01/2025"
      introduction={content.introduction}
      sections={content.sections}
    />
  );
}

