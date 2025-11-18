import { Shield, Coffee, Wifi, Armchair } from "lucide-react";
import { motion } from "motion/react";

import "./ServiceSection.css";

export function ServiceSection() {
  const services = [
    {
      icon: Shield,
      title: "An toàn chuẩn 5 sao",
      description: "Bảo hiểm hành khách đầy đủ, tài xế nhiều kinh nghiệm và kiểm tra xe định kỳ trước mỗi chuyến",
    },
    {
      icon: Armchair,
      title: "Giường nằm cao cấp",
      description: "Nệm da kháng khuẩn, rèm riêng tư, chăn gối sạch sẽ giúp bạn nghỉ ngơi thoải mái",
    },
    {
      icon: Wifi,
      title: "Wifi & sạc tiện lợi",
      description: "Trang bị wifi miễn phí, cổng USB và điện thoại hỗ trợ suốt hành trình",
    },
    {
      icon: Coffee,
      title: "Nước uống - khăn lạnh",
      description: "Phục vụ nước suối, khăn lạnh và điểm dừng nghỉ hợp lý để bạn luôn tỉnh táo",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-title">Tiện ích nổi bật</h2>
          <p className="services-description">
            Trải nghiệm chất lượng khác biệt với hệ thống xe đời mới và đội ngũ phục vụ tận tâm
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                {/* Image placeholder */}
                <div className="service-image">
                  <img
                    src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/528152085_1181214270482044_2082145697686854411_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUg8SqAnj1cod-PnXz8_2xOxHZ3aUbfT47EdndpRt9Put2zBRKwd96EtdkvLHVOKtYDhbO-FBD6S71vwLsqjo6&_nc_ohc=Hvuk4vOYc1AQ7kNvwGHOi9C&_nc_oc=AdlwY84VyfZggJX06LlpECyRLlB7xoZ5DJZvX3wjZDKJPPkbiySXhoQXWKEriTXwgOE&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Jdi9_FaNbFhLv1FZPjOeWA&oh=00_Afj4vrea6jFcwEfyPNFktOxdzbYdP5P_XjCkc9C02TQX7A&oe=69225B5E"
                    alt="Hình ảnh xe Thuận Thực"
                  />
                </div>

                {/* Icon */}
                <div className="service-icon">
                  <Icon />
                </div>

                {/* Content */}
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
