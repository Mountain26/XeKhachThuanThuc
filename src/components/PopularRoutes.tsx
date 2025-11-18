import * as React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";

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
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1A1A1A] mb-3">Tuyến xe nổi bật</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Các tuyến xe Thuận Thực đang phục vụ cố định, giá vé niêm yết rõ ràng và lên đường mỗi ngày
          </p>
        </motion.div>

        {/* Routes grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence initial={false}>
            {visibleRoutes.map((route) => (
              <motion.div
                layout
                key={route.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
              {/* Image placeholder */}
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400">Ảnh minh họa tuyến xe</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
                
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-[#D62828] text-white px-4 py-2 rounded-full text-sm shadow-lg">
                  {route.price}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-[#D62828] rounded-full" />
                    <span className="text-[#1A1A1A]">{route.from}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-5">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1A1A1A] rounded-full" />
                    <span className="text-[#1A1A1A]">{route.to}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
                  <Clock className="w-4 h-4 text-[#D62828]" />
                  <span>{route.time}</span>
                </div>

                <Button className="w-full bg-[#D62828] hover:bg-[#B01F1F] group-hover:shadow-lg transition-all">
                  Đặt vé tuyến này
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            className="text-center mt-10"
          >
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Thu gọn" : "Xem toàn bộ tuyến"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
