import * as React from "react";
import {
  MapPin,
  Search,
  PhoneCall,
  ArrowUpDown,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Bus,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage, Language } from "../context/LanguageContext";

import seatPalaceImg from "./assets/ghexecungdien.jpg";
import seatPalaceImg2 from "./assets/ghexecungdien2.jpg";
import seatHotelImg from "./assets/ghexekhachsan.jpg";
import seatHotelImg2 from "./assets/ghexekhachsan2.jpg";
import seatStandardImg from "./assets/ghexethuong.jpg";
import seatStandardImg2 from "./assets/ghexethuong2.jpg";

import "./BookingForm.css";

type LocalizedText = Record<Language, string>;

type SeatLabel = "Ghế đơn" | "Ghế ghép" | "Ghế đôi";
type VehicleType = "Xe thường" | "Xe khách sạn" | "Xe cung điện";

type SeatOption = {
  label: SeatLabel;
  price: LocalizedText;
};

type RouteOption = {
  vehicleType: VehicleType;
  times: string[];
  price: LocalizedText;
  notes?: LocalizedText;
  seatOptions?: SeatOption[];
};

type RouteInfo = {
  origin: string;
  destination: string;
  options: RouteOption[];
  shuttle?: string;
  duration?: string;
  distance?: string;
};

type ServiceLocation = {
  value: string;
  label: Record<Language, string>;
};

const serviceLocations: ServiceLocation[] = [
  { value: "ha-giang", label: { vi: "Hà Giang", en: "Ha Giang" } },
  { value: "lang-son", label: { vi: "Lạng Sơn", en: "Lang Son" } },
  { value: "bac-ninh", label: { vi: "Bắc Ninh", en: "Bac Ninh" } },
  { value: "bac-giang", label: { vi: "Bắc Giang", en: "Bac Giang" } },
  { value: "mong-cai", label: { vi: "Móng Cái", en: "Mong Cai" } },
  { value: "quang-ninh", label: { vi: "Quảng Ninh", en: "Quang Ninh" } },
  { value: "tay-nguyen", label: { vi: "Tây Nguyên", en: "Central Highlands" } },
  { value: "chi-linh", label: { vi: "Chí Linh", en: "Chi Linh" } },
];

const locationLabelLookup: Record<Language, Record<string, string>> = serviceLocations.reduce(
  (acc, location) => {
    acc.vi[location.value] = location.label.vi;
    acc.en[location.value] = location.label.en;
    return acc;
  },
  { vi: {}, en: {} } as Record<Language, Record<string, string>>,
);

const vehicleImages: Record<VehicleType, string[]> = {
  "Xe thường": [seatStandardImg, seatStandardImg2],
  "Xe khách sạn": [seatHotelImg, seatHotelImg2],
  "Xe cung điện": [seatPalaceImg, seatPalaceImg2],
};

const formCopy = {
  vi: {
    formTitle: "Đặt vé trực tuyến",
    formDescription: "Nhập thông tin hành trình để xem chuyến phù hợp",
    originLabel: "Điểm khởi hành",
    originPlaceholder: "Chọn điểm khởi hành",
    destinationLabel: "Điểm đến",
    destinationPlaceholder: "Chọn điểm đến",
    searchButton: "Tìm chuyến",
    swapAria: "Đổi chiều hành trình",
    durationLabel: "Thời gian:",
    durationFallback: "Đang cập nhật",
    distanceLabel: "Khoảng cách:",
    distanceFallback: "Đang cập nhật",
    departuresLabel: "Giờ xuất bến:",
    seatHeading: "Loại ghế",
    seatChipHeading: "Tùy chọn ghế",
    suiteHeading: "Loại phòng",
    callToBook: "Đặt vé ngay",
    callSupport: "Gọi tư vấn",
    prevImage: "Ảnh trước",
    nextImage: "Ảnh tiếp",
    imageAltPrefix: "Hình ảnh",
    emptyMessage:
      "Hiện chưa có lịch trình cho tuyến này. Vui lòng chọn tuyến khác hoặc liên hệ tổng đài.",
  },
  en: {
    formTitle: "Book tickets online",
    formDescription: "Enter your trip details to view matching departures",
    originLabel: "Departure point",
    originPlaceholder: "Choose departure",
    destinationLabel: "Destination",
    destinationPlaceholder: "Choose destination",
    searchButton: "Search trips",
    swapAria: "Swap route direction",
    durationLabel: "Duration:",
    durationFallback: "Updating",
    distanceLabel: "Distance:",
    distanceFallback: "Updating",
    departuresLabel: "Departure times:",
    seatHeading: "Seat types",
    seatChipHeading: "Seat options",
    suiteHeading: "Suite types",
    callToBook: "Book now",
    callSupport: "Call support",
    prevImage: "Previous photo",
    nextImage: "Next photo",
    imageAltPrefix: "Vehicle photo",
    emptyMessage:
      "No schedules are available for this route. Please choose another route or contact our hotline.",
  },
} as const;

const vehicleTypeCopy: Record<VehicleType, Record<Language, string>> = {
  "Xe thường": { vi: "Xe giường nằm 44 giường", en: "44-berth sleeper coach" },
  "Xe khách sạn": { vi: "Xe giường nằm 34 giường VIP", en: "34-berth VIP sleeper" },
  "Xe cung điện": { vi: "Limousine 24 phòng VIP", en: "24-suite VIP limousine" },
};

const seatLabelCopy = {
  "Ghế đơn": { vi: "Ghế đơn", en: "Single seat" },
  "Ghế ghép": { vi: "Ghế ghép", en: "Shared seat" },
  "Ghế đôi": { vi: "Ghế đôi", en: "Double seat" },
} as const;

const premiumSeatLabelCopy = {
  "Ghế đơn": { vi: "Phòng đơn", en: "Single suite" },
  "Ghế ghép": { vi: "Phòng ghép", en: "Shared suite" },
  "Ghế đôi": { vi: "Phòng đôi", en: "Double suite" },
} as const;

const durationCopy: Record<string, string> = {
  "6 giờ 15 phút": "6h 15m",
  "6 giờ": "6h",
  "6 giờ 30 phút": "6h 30m",
  "9 giờ 30 phút": "9h 30m",
  "9 giờ": "9h",
  "8 giờ 10 phút": "8h 10m",
  "8 giờ": "8h",
  "10 giờ": "10h",
  "7 giờ": "7h",
  "6 giờ 45 phút": "6h 45m",
};

const routes: RouteInfo[] = [
  {
    origin: "ha-giang",
    destination: "lang-son",
    duration: "6 giờ 15 phút",
    distance: "320 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: { vi: "350.000đ", en: "350,000 VND" },
      },
    ],
  },
  {
    origin: "lang-son",
    destination: "ha-giang",
    duration: "6 giờ",
    distance: "320 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["06h30", "17h30"],
        price: { vi: "350.000đ", en: "350,000 VND" },
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "bac-ninh",
    duration: "6 giờ 30 phút",
    distance: "350 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: { vi: "Ghế đơn 350.000đ", en: "Single suite 350,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "350.000đ", en: "350,000 VND" } },
          { label: "Ghế ghép", price: { vi: "250.000đ", en: "250,000 VND" } },
          { label: "Ghế đôi", price: { vi: "550.000đ", en: "550,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "bac-ninh",
    destination: "ha-giang",
    duration: "6 giờ 15 phút",
    distance: "350 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["09h00"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00", "20h30"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["21h30"],
        price: { vi: "Ghế đơn 350.000đ", en: "Single suite 350,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "350.000đ", en: "350,000 VND" } },
          { label: "Ghế ghép", price: { vi: "250.000đ", en: "250,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "mong-cai",
    duration: "9 giờ 30 phút",
    distance: "530 km",
    options: [
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: { vi: "Ghế ghép 450.000đ", en: "Shared suite 450,000 VND" },
        seatOptions: [{ label: "Ghế ghép", price: { vi: "450.000đ", en: "450,000 VND" } }],
      },
    ],
  },
  {
    origin: "mong-cai",
    destination: "ha-giang",
    duration: "9 giờ",
    distance: "530 km",
    options: [
      {
        vehicleType: "Xe cung điện",
        times: ["14h30"],
        price: { vi: "Ghế đơn 600.000đ", en: "Single suite 600,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "600.000đ", en: "600,000 VND" } },
          { label: "Ghế đôi", price: { vi: "900.000đ", en: "900,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "quang-ninh",
    duration: "8 giờ 10 phút",
    distance: "470 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00", "18h00"],
        price: { vi: "350.000đ", en: "350,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: { vi: "Ghế đơn 550.000đ", en: "Single suite 550,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "550.000đ", en: "550,000 VND" } },
          { label: "Ghế đôi", price: { vi: "750.000đ", en: "750,000 VND" } },
          { label: "Ghế ghép", price: { vi: "350.000đ", en: "350,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "quang-ninh",
    destination: "ha-giang",
    duration: "8 giờ",
    distance: "470 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["07h00", "16h20"],
        price: { vi: "350.000đ", en: "350,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["17h30"],
        price: { vi: "Ghế đơn 550.000đ", en: "Single suite 550,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "550.000đ", en: "550,000 VND" } },
          { label: "Ghế đôi", price: { vi: "750.000đ", en: "750,000 VND" } },
          { label: "Ghế ghép", price: { vi: "350.000đ", en: "350,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "tay-nguyen",
    duration: "10 giờ",
    distance: "560 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: { vi: "200.000đ", en: "200,000 VND" },
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["18h00"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: { vi: "Ghế đơn 350.000đ", en: "Single suite 350,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "350.000đ", en: "350,000 VND" } },
          { label: "Ghế đôi", price: { vi: "550.000đ", en: "550,000 VND" } },
          { label: "Ghế ghép", price: { vi: "250.000đ", en: "250,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "tay-nguyen",
    destination: "ha-giang",
    duration: "10 giờ",
    distance: "560 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["10h00"],
        price: { vi: "200.000đ", en: "200,000 VND" },
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["21h30"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["22h15"],
        price: { vi: "Ghế đơn 350.000đ", en: "Single suite 350,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "350.000đ", en: "350,000 VND" } },
          { label: "Ghế đôi", price: { vi: "550.000đ", en: "550,000 VND" } },
          { label: "Ghế ghép", price: { vi: "250.000đ", en: "250,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "chi-linh",
    duration: "7 giờ",
    distance: "400 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00", "18h00"],
        price: { vi: "300.000đ", en: "300,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: { vi: "Ghế đơn 400.000đ", en: "Single suite 400,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "400.000đ", en: "400,000 VND" } },
          { label: "Ghế đôi", price: { vi: "700.000đ", en: "700,000 VND" } },
          { label: "Ghế ghép", price: { vi: "300.000đ", en: "300,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "chi-linh",
    destination: "ha-giang",
    duration: "7 giờ",
    distance: "400 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["10h30", "19h30"],
        price: { vi: "300.000đ", en: "300,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h30"],
        price: { vi: "Ghế đơn 400.000đ", en: "Single suite 400,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "400.000đ", en: "400,000 VND" } },
          { label: "Ghế đôi", price: { vi: "700.000đ", en: "700,000 VND" } },
          { label: "Ghế ghép", price: { vi: "300.000đ", en: "300,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "bac-giang",
    duration: "6 giờ 45 phút",
    distance: "330 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: { vi: "Ghế đơn 350.000đ", en: "Single suite 350,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "350.000đ", en: "350,000 VND" } },
          { label: "Ghế đôi", price: { vi: "600.000đ", en: "600,000 VND" } },
          { label: "Ghế ghép", price: { vi: "250.000đ", en: "250,000 VND" } },
        ],
      },
    ],
  },
  {
    origin: "bac-giang",
    destination: "ha-giang",
    duration: "6 giờ 45 phút",
    distance: "330 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["08h00", "20h00"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00"],
        price: { vi: "250.000đ", en: "250,000 VND" },
      },
      {
        vehicleType: "Xe cung điện",
        times: ["21h30"],
        price: { vi: "Ghế đơn 350.000đ", en: "Single suite 350,000 VND" },
        seatOptions: [
          { label: "Ghế đơn", price: { vi: "350.000đ", en: "350,000 VND" } },
          { label: "Ghế đôi", price: { vi: "600.000đ", en: "600,000 VND" } },
          { label: "Ghế ghép", price: { vi: "250.000đ", en: "250,000 VND" } },
        ],
      },
    ],
  },
];

export function BookingForm() {
  const { language } = useLanguage();
  const labels = formCopy[language];
  const [origin, setOrigin] = React.useState<string>("ha-giang");
  const [destination, setDestination] = React.useState<string>("mong-cai");
  const [hasSearched, setHasSearched] = React.useState(false);
  const [imageIndexByRoute, setImageIndexByRoute] = React.useState<Record<string, number>>({});
  const [selectedPremiumSuiteByRoute, setSelectedPremiumSuiteByRoute] = React.useState<
    Partial<Record<string, SeatLabel>>
  >({});

  const matchingRoutes = React.useMemo(() => {
    return routes.filter(
      (route) => route.origin === origin && route.destination === destination,
    );
  }, [origin, destination]);

  const galleryKeyData = React.useMemo(() => {
    if (!hasSearched) {
      return [] as Array<{ key: string; total: number }>;
    }

    const entries: Array<{ key: string; total: number }> = [];

    matchingRoutes.forEach((route) => {
      route.options.forEach((option, index) => {
        const images = vehicleImages[option.vehicleType] ?? [];
        if (images.length > 1) {
          entries.push({
            key: `${route.origin}-${route.destination}-${option.vehicleType}-${index}`,
            total: images.length,
          });
        }
      });
    });

    return entries;
  }, [matchingRoutes, hasSearched]);

  React.useEffect(() => {
    if (galleryKeyData.length === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setImageIndexByRoute((prev) => {
        const nextIndexes: Record<string, number> = { ...prev };
        let changed = false;

        galleryKeyData.forEach(({ key, total }) => {
          const current = prev[key] ?? 0;
          const nextValue = (current + 1) % total;
          if (nextValue !== current) {
            nextIndexes[key] = nextValue;
            changed = true;
          }
        });

        return changed ? nextIndexes : prev;
      });
    }, 3000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [galleryKeyData]);

  const handleSearch = () => {
    setHasSearched(true);
  };

  const handleOriginChange = (value: string) => {
    setOrigin(value);
    setHasSearched(false);
    setImageIndexByRoute({});
    setSelectedPremiumSuiteByRoute({});
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    setHasSearched(false);
    setImageIndexByRoute({});
    setSelectedPremiumSuiteByRoute({});
  };

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
    setHasSearched(false);
    setImageIndexByRoute({});
    setSelectedPremiumSuiteByRoute({});
  };

  const handleNextImage = (key: string, total: number) => {
    if (total <= 0) {
      return;
    }
    setImageIndexByRoute((prev) => {
      const current = prev[key] ?? 0;
      return { ...prev, [key]: (current + 1) % total };
    });
  };

  const handlePrevImage = (key: string, total: number) => {
    if (total <= 0) {
      return;
    }
    setImageIndexByRoute((prev) => {
      const current = prev[key] ?? 0;
      return { ...prev, [key]: (current - 1 + total) % total };
    });
  };

  const handlePremiumSuiteChange = React.useCallback(
    (key: string, value: string) => {
      setSelectedPremiumSuiteByRoute((prev) => ({ ...prev, [key]: value as SeatLabel }));
    },
    [],
  );

  return (
    <section className="booking-form-section" id="tim-chuyen">
      <div className="booking-form-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="booking-form-card"
        >
          {/* Form title */}
          <div className="booking-form-header">
            <h3 className="booking-form-title">{labels.formTitle}</h3>
            <p className="booking-form-description">{labels.formDescription}</p>
          </div>

          {/* Booking form grid */}
          <div className="booking-form-grid">
            <div className="booking-route-pair">
              {/* Origin input */}
              <div className="booking-field">
                <label className="booking-label">{labels.originLabel}</label>
                <div className="booking-input-wrapper">
                  <span className="booking-icon">
                    <MapPin />
                  </span>
                  <Select value={origin} onValueChange={handleOriginChange}>
                    <SelectTrigger className="booking-select-trigger">
                      <SelectValue placeholder={labels.originPlaceholder} className="booking-select-value" />
                    </SelectTrigger>
                    <SelectContent className="booking-select-content">
                      {serviceLocations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="booking-swap-button"
                onClick={handleSwap}
                aria-label={labels.swapAria}
              >
                <ArrowUpDown />
              </Button>

              {/* Destination input */}
              <div className="booking-field">
                <label className="booking-label">{labels.destinationLabel}</label>
                <div className="booking-input-wrapper">
                  <span className="booking-icon">
                    <MapPin />
                  </span>
                  <Select value={destination} onValueChange={handleDestinationChange}>
                    <SelectTrigger className="booking-select-trigger">
                      <SelectValue placeholder={labels.destinationPlaceholder} className="booking-select-value" />
                    </SelectTrigger>
                    <SelectContent className="booking-select-content">
                      {serviceLocations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Search button */}
            <div className="booking-field booking-search-field">
              <label className="booking-label booking-helper-label">&nbsp;</label>
              <Button type="button" className="booking-search-button" onClick={handleSearch} aria-label={labels.searchButton}>
                <Search />
                {labels.searchButton}
              </Button>
            </div>
          </div>

          {hasSearched && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="booking-results"
            >
              {matchingRoutes.length > 0 ? (
                matchingRoutes.flatMap((route) => {
                  const originLabel = locationLabelLookup[language][route.origin] ?? route.origin;
                  const destinationLabel = locationLabelLookup[language][route.destination] ?? route.destination;

                  return route.options.map((option, index) => {
                    const isPremium = option.vehicleType === "Xe cung điện";
                    const vehicleDisplayName = vehicleTypeCopy[option.vehicleType]?.[language] ?? option.vehicleType;
                    const imageSet = vehicleImages[option.vehicleType] ?? [];
                    const hasImages = imageSet.length > 0;
                    const cardKey = `${route.origin}-${route.destination}-${option.vehicleType}-${index}`;
                    const activeImageIndex = imageIndexByRoute[cardKey] ?? 0;
                    const effectiveIndex = hasImages
                      ? Math.min(Math.max(activeImageIndex, 0), imageSet.length - 1)
                      : 0;
                    const currentImage = hasImages ? imageSet[effectiveIndex] : undefined;
                    const seatOptions = option.seatOptions ?? [];
                    const durationValue = route.duration
                      ? language === "vi"
                        ? route.duration
                        : durationCopy[route.duration] ?? route.duration
                      : labels.durationFallback;
                    const distanceValue = route.distance ?? labels.distanceFallback;
                    const imageAltText = `${labels.imageAltPrefix} ${vehicleDisplayName}`;
                    const baseFareLabel = option.price[language];
                    const fareContent = !isPremium ? (
                      <span className="booking-route-fare-price">{baseFareLabel}</span>
                    ) : null;

                    let premiumFareContent: React.ReactNode = null;
                    if (isPremium) {
                      if (seatOptions.length > 0) {
                        const savedSuite = selectedPremiumSuiteByRoute[cardKey];
                        const defaultSuite = seatOptions[0]?.label ?? null;
                        const activeSuiteLabel =
                          savedSuite && seatOptions.some((seat) => seat.label === savedSuite)
                            ? savedSuite
                            : defaultSuite;
                        const normalizedSuiteValue = activeSuiteLabel ?? seatOptions[0]?.label ?? undefined;
                        const activeSuite = seatOptions.find((seat) => seat.label === normalizedSuiteValue);
                        const suitePrice = activeSuite?.price[language] ?? baseFareLabel;

                        premiumFareContent = (
                          <>
                            <Select
                              value={normalizedSuiteValue}
                              onValueChange={(value) => handlePremiumSuiteChange(cardKey, value)}
                            >
                              <SelectTrigger
                                id={`${cardKey}-suite`}
                                className="booking-route-suite-trigger booking-route-suite-trigger--compact"
                              >
                                <SelectValue className="booking-route-suite-value" />
                              </SelectTrigger>
                              <SelectContent className="booking-route-suite-content">
                                {seatOptions.map((seat) => {
                                  const seatLabel = premiumSeatLabelCopy[seat.label]?.[language] ?? seat.label;
                                  return (
                                    <SelectItem key={`${option.vehicleType}-${seat.label}`} value={seat.label}>
                                      {seatLabel}
                                    </SelectItem>
                                  );
                                })}
                              </SelectContent>
                            </Select>
                            <span className="booking-route-fare-price booking-route-fare-price--premium">{suitePrice}</span>
                          </>
                        );
                      } else {
                        premiumFareContent = (
                          <span className="booking-route-fare-price booking-route-fare-price--premium">{baseFareLabel}</span>
                        );
                      }
                    }

                    const fareMarkup = (isPremium && !premiumFareContent) ? null : (
                      <div className={`booking-route-fare${isPremium ? " booking-route-fare--premium" : ""}`}>
                        {isPremium ? premiumFareContent : fareContent}
                      </div>
                    );
                    const bookingButtonLabel = language === "vi" ? "Đặt vé" : "Book";
                    const bookingButton = (
                      <Button
                        size="sm"
                        className="booking-route-book-button"
                        asChild
                        aria-label={labels.callToBook}
                      >
                        <a href="tel:0983250900">
                          <PhoneCall />
                          {bookingButtonLabel}
                        </a>
                      </Button>
                    );
                    const hasDepartureTimes = option.times.length > 0;
                    const scheduleTimes = hasDepartureTimes ? (
                      <div className="booking-route-times-copy">
                        <span className="booking-route-times-label">{labels.departuresLabel}</span>
                        <div className="booking-route-time-list">
                          {option.times.map((time) => (
                            <span key={`${option.vehicleType}-${time}`} className="booking-route-time-chip">
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null;
                    const scheduleSection = (hasDepartureTimes || bookingButton) && (
                      <div
                        className={`booking-route-times${hasDepartureTimes ? "" : " booking-route-times--no-departures"}`}
                      >
                        {scheduleTimes}
                        {bookingButton}
                      </div>
                    );

                    return (
                      <motion.div
                        layout
                        key={cardKey}
                        className={`booking-route-card${isPremium ? " booking-route-card--premium" : ""}`}
                        whileHover={{ translateY: -6 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                      >
                        <div className="booking-route-media">
                          {hasImages && currentImage ? (
                            <AnimatePresence mode="wait" initial={false}>
                              <motion.img
                                key={currentImage}
                                src={currentImage}
                                alt={imageAltText}
                                loading="lazy"
                                className="booking-route-media-image"
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                style={{ position: "absolute", inset: 0 }}
                              />
                            </AnimatePresence>
                          ) : (
                            <div className="booking-route-media-fallback">{vehicleDisplayName}</div>
                          )}
                          {hasImages && imageSet.length > 1 ? (
                            <>
                              <button
                                type="button"
                                className="booking-route-media-arrow booking-route-media-arrow--prev"
                                onClick={() => handlePrevImage(cardKey, imageSet.length)}
                                aria-label={labels.prevImage}
                              >
                                <ChevronLeft />
                              </button>
                              <button
                                type="button"
                                className="booking-route-media-arrow booking-route-media-arrow--next"
                                onClick={() => handleNextImage(cardKey, imageSet.length)}
                                aria-label={labels.nextImage}
                              >
                                <ChevronRight />
                              </button>
                            </>
                          ) : null}
                        </div>

                        <div className="booking-route-card-body">
                          <div className="booking-route-headline">
                            <div className="booking-route-service">
                              <span className="booking-route-service-icon">
                                <Bus />
                              </span>
                              <div className="booking-route-service-copy">
                                <span className="booking-route-service-name">{vehicleDisplayName}</span>
                              </div>
                            </div>
                          </div>

                          <div className="booking-route-overview">
                            <div className="booking-route-stops">
                              <div className="booking-route-stop booking-route-stop--origin">
                                <span className="booking-route-dot booking-route-dot--origin" />
                                <span className="booking-route-stop-name">{originLabel}</span>
                              </div>
                              <div className="booking-route-connector">
                                <ArrowDown aria-hidden="true" />
                              </div>
                              <div className="booking-route-stop booking-route-stop--destination">
                                <span className="booking-route-dot booking-route-dot--destination" />
                                <span className="booking-route-stop-name">{destinationLabel}</span>
                              </div>
                            </div>
                            {fareMarkup}
                          </div>

                          <div className="booking-route-meta">
                            <div className="booking-route-meta-item">
                              <span className="booking-route-meta-label">{labels.durationLabel}</span>
                              <span className="booking-route-meta-value">{durationValue}</span>
                            </div>
                            <div className="booking-route-meta-item">
                              <span className="booking-route-meta-label">{labels.distanceLabel}</span>
                              <span className="booking-route-meta-value">{distanceValue}</span>
                            </div>
                          </div>

                          {scheduleSection}

                          {seatOptions.length > 0 && !isPremium ? (
                            <div className="booking-route-seats">
                              <span className="booking-route-seats-heading">{labels.seatChipHeading}</span>
                              {seatOptions.map((seat) => {
                                const seatLabel = seatLabelCopy[seat.label]?.[language] ?? seat.label;
                                return (
                                  <div key={`${option.vehicleType}-${seat.label}`} className="booking-route-seat-chip">
                                    <span className="booking-route-seat-chip-label">{seatLabel}</span>
                                    <span className="booking-route-seat-chip-price">{seat.price[language]}</span>
                                  </div>
                                );
                              })}
                            </div>
                          ) : null}

                          {option.notes && <p className="booking-route-note">{option.notes[language]}</p>}

                          {route.shuttle && <div className="booking-route-shuttle">{route.shuttle}</div>}
                        </div>
                      </motion.div>
                    );
                  });
                })
              ) : (
                <div className="booking-route-empty">
                  <p>{labels.emptyMessage}</p>
                  <Button size="lg" className="booking-route-primary" asChild aria-label={labels.callSupport}>
                    <a href="tel:0983250900">
                      <PhoneCall />
                      {labels.callSupport}
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}