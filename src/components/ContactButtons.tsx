import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function ContactButtons() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-[#1A1A1A] mb-2">Liên hệ với chúng tôi</h3>
          <p className="text-slate-600">Chọn kênh phù hợp để được hỗ trợ ngay</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
          {/* Gọi Viettel Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-[#D62828] hover:bg-[#B01F1F] text-white rounded-full shadow-lg shadow-[#D62828]/30 transition-all flex items-center justify-center gap-3 group"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span>Gọi Viettel</span>
          </motion.button>

          {/* Gọi Vina Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-[#D62828] hover:bg-[#B01F1F] text-white rounded-full shadow-lg shadow-[#D62828]/30 transition-all flex items-center justify-center gap-3 group"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span>Gọi Vina</span>
          </motion.button>

          {/* Nhắn Zalo Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-[#D62828] hover:bg-[#B01F1F] text-white rounded-full shadow-lg shadow-[#D62828]/30 transition-all flex items-center justify-center gap-3 group"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span>Nhắn Zalo</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
