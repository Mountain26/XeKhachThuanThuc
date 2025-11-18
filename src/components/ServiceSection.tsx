import { Shield, Coffee, Wifi, Armchair } from "lucide-react";
import { motion } from "motion/react";

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1A1A1A] mb-3">Tiện ích nổi bật</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Trải nghiệm chất lượng khác biệt với hệ thống xe đời mới và đội ngũ phục vụ tận tâm
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-[#D62828] group"
              >
                {/* Image placeholder */}
                <div className="mb-4 h-32 bg-slate-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Ảnh tiện ích minh họa</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#D62828] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-[#1A1A1A] mb-2">{service.title}</h4>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
