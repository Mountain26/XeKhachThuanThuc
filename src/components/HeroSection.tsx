import { Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Decorative curved shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#D62828]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-32 w-80 h-80 bg-[#D62828]/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute left-0 bottom-0 w-1/3 h-2/3">
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-[#1A1A1A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Large heading */}
            <div className="space-y-3">
              <h1 className="text-[#D62828]">
                Dịch vụ xe giường nằm cao cấp
              </h1>
              <h2 className="text-[#1A1A1A]">
                Thuận Thực đồng hành cùng bạn trên mọi hành trình Hà Giang
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-slate-600 max-w-lg">
              Đặt vé trực tuyến trong vài giây, lên xe đúng giờ, trải nghiệm tiện nghi hiện đại và đội ngũ tài xế tận tâm. Chúng tôi cam kết mang đến chuyến đi an toàn, êm ái và đúng lịch trình.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#D62828] hover:bg-[#B01F1F] shadow-lg shadow-[#D62828]/30">
                Đặt vé ngay
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white">
                Xem lịch trình
              </Button>
            </div>

            {/* Hotline */}
            <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg w-fit">
              <div className="w-12 h-12 bg-[#D62828] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-slate-500 text-sm">Tổng đài 24/7</div>
                <div className="text-[#1A1A1A]">1900 63 63 71</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Large background image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Curved image frame for landscape */}
            <div className="relative aspect-[4/3] bg-slate-300 rounded-3xl lg:rounded-l-[3rem] shadow-2xl overflow-hidden border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                <span className="text-slate-400 text-lg">Ảnh phong cảnh tuyến Hà Giang</span>
              </div>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62828]/10 to-transparent" />
            </div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#D62828] to-[#B01F1F] rounded-2xl shadow-lg opacity-90"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#1A1A1A] to-[#3A3A3A] rounded-full shadow-lg opacity-80"
            />
          </motion.div>
        </div>

        {/* Bus image placeholder - positioned in lower left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-8 lg:mt-12"
        >
          <div className="relative max-w-2xl">
            {/* Curved shape behind bus */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#D62828]/20 to-[#1A1A1A]/10 rounded-[3rem] blur-xl" />
            
            {/* Bus frame with perspective */}
            <div className="relative bg-slate-200 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-slate-400 text-lg mb-2">Hình ảnh xe Thuận Thực</div>
                  <div className="text-slate-400 text-sm">(góc nhìn 3/4 hiện đại)</div>
                </div>
              </div>
              {/* Perspective effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D62828]/10 via-transparent to-white/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}