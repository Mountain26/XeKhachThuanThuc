import * as React from "react";
import { MapPin, Calendar, Search, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "motion/react";

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

export function BookingForm() {
  const [origin, setOrigin] = React.useState<string>("ha-giang");
  const [destination, setDestination] = React.useState<string>("mong-cai");

  return (
    <section className="relative -mt-16 mb-16 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl shadow-[#1A1A1A]/10 p-6 lg:p-8 border-t-4 border-[#D62828]"
        >
          {/* Form title */}
          <div className="mb-6">
            <h3 className="text-[#1A1A1A] mb-1">Đặt vé trực tuyến</h3>
            <p className="text-slate-500">Nhập thông tin hành trình để xem chuyến phù hợp</p>
          </div>

          {/* Booking form grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Origin input */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm">Điểm khởi hành</label>
              <Select value={origin} onValueChange={setOrigin}>
                <SelectTrigger className="h-12 w-full rounded-[26px] border border-slate-200 bg-[#F6F7FB] px-4 text-left text-slate-700 shadow-sm transition-all focus-visible:border-[#D62828] focus-visible:ring-[#D62828]/20 focus-visible:ring-[3px] data-[state=open]:border-[#D62828]">
                  <div className="flex w-full items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-2xl border border-[#F8C8C8] bg-white text-[#D62828]">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <SelectValue
                      placeholder="Chọn điểm khởi hành"
                      className="flex-1 truncate text-left text-sm font-medium text-slate-900 data-[placeholder]:font-normal data-[placeholder]:text-slate-500"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-black/10">
                  {serviceLocations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Destination input */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm">Điểm đến</label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="h-12 w-full rounded-[26px] border border-slate-200 bg-[#F6F7FB] px-4 text-left text-slate-700 shadow-sm transition-all focus-visible:border-[#D62828] focus-visible:ring-[#D62828]/20 focus-visible:ring-[3px] data-[state=open]:border-[#D62828]">
                  <div className="flex w-full items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-2xl border border-[#F8C8C8] bg-white text-[#D62828]">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <SelectValue
                      placeholder="Chọn điểm đến"
                      className="flex-1 truncate text-left text-sm font-medium text-slate-900 data-[placeholder]:font-normal data-[placeholder]:text-slate-500"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-black/10">
                  {serviceLocations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date input */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm">Ngày khởi hành</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D62828]" />
                <Input
                  type="date"
                  className="pl-10 h-12 border-slate-200 focus:border-[#D62828]"
                />
              </div>
            </div>

            {/* Search button */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm invisible sm:visible">&nbsp;</label>
              <Button className="w-full h-12 bg-[#D62828] hover:bg-[#B01F1F] shadow-lg shadow-[#D62828]/30">
                <Search className="w-5 h-5 mr-2" />
                Tìm chuyến
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}