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
                    src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/539355485_1198959562040848_9198228117422014222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaPuFAwxFnGFbth200kBevhaETSgzlmUuFoRNKDOWZS9CEdNf5ohUbzEqip2RmBI1mb_v-8fUJV_ua_FA51P_M&_nc_ohc=C1RX9YdBMCkQ7kNvwF77e2G&_nc_oc=AdkwKUPgrdk4RmBXAy1ptmMSh7Psm-yZ60iiydosIujM0aABbFZtd8v2iQ-pkSP0lJY&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8IX1S-8s95y0v1yussgM3g&oh=00_Afj7HG-4KpGzUkVXcNn_eAxxRW507e_hWuqV-xyOQJPHPg&oe=69221869"
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
