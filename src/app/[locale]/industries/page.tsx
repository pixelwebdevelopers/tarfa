import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Truck,
  Wind,
} from "lucide-react";
import {
  MotorIcon,
  CompressorIcon,
  PumpIcon,
  TransformerIcon,
  StatorCoreIcon,
  RotorBalancingIcon,
  GovernmentWorksIcon,
  SteelIndustryIcon,
  CementIndustryIcon,
  ConstructionIndustryIcon,
  HealthcareIndustryIcon,
  FlourMillIcon,
  ColdChainFoodIcon,
} from "@/components/icons/IndustryIcons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "القطاعات الصناعية المستفيدة — خبرة عبر الصناعات السعودية"
      : "Industries Served — Electromechanical Expertise Across Saudi Sectors",
    description: isAr
      ? "تارفا تخدم كبرى القطاعات الصناعية بالمملكة: المشاريع الحكومية، مصانع الحديد، الإسمنت، المقاولات، المستشفيات، مطاحن الدقيق، والصناعات الغذائية."
      : "Heavy industrial maintenance for critical Saudi sectors: Government projects, Steel manufacturing, Cement plants, Civil construction, Hospitals, Flour mills, and Food processing.",
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const sectors = [
    {
      id: "government",
      icon: GovernmentWorksIcon,
      name: isAr ? "المشاريع الحكومية والمرافق العامة" : "Government Projects & Public Utilities",
      chips: isAr
        ? ["محطات الضخ الكبرى", "محولات التوزيع", "مشاريع البنية التحتية"]
        : ["Deep Extraction", "Power Distribution", "Municipal Networks"],
      equipment: [
        {
          icon: PumpIcon,
          title: isAr ? "مضخات الآبار الارتوازية الغاطسة عالية القدرة" : "Deep Well Submersible Pump Sets",
        },
        {
          icon: PumpIcon,
          title: isAr ? "محركات محطات الضخ الرئيسية متعددة المراحل" : "Main Municipal Booster & Multistage Pumps",
        },
        {
          icon: TransformerIcon,
          title: isAr ? "محولات التوزيع ومولدات الديزل الاحتياطية" : "Distribution Transformers & Standby Gensets",
        },
      ],
    },
    {
      id: "steel",
      icon: SteelIndustryIcon,
      name: isAr ? "صناعات الحديد والصلب" : "Steel & Heavy Metal Manufacturing",
      chips: isAr
        ? ["بيئات حرارية شاقة", "عزم بدء فائق", "عزل الفئة H"]
        : ["Severe Duty", "Continuous Rolling", "Class H Insulation"],
      equipment: [
        {
          icon: MotorIcon,
          title: isAr ? "محركات الدرفلة الرئيسية ومحركات التيار المستمر" : "Rolling Mill Drives & Heavy DC Armatures",
        },
        {
          icon: MotorIcon,
          title: isAr ? "محركات روافع الصهر ذات حلقات الانزلاق" : "Furnace Crane Slip-Ring Hoist Motors",
        },
        {
          icon: PumpIcon,
          title: isAr ? "مراوح أبراج التبريد ومضخات السوائل الكثيفة" : "Cooling Tower Draft Blowers & Slurry Pumps",
        },
      ],
    },
    {
      id: "cement",
      icon: CementIndustryIcon,
      name: isAr ? "صناعات الإسمنت والجبس" : "Cement & Heavy Mineral Industries",
      chips: isAr
        ? ["مقاومة الغبار الكلسي", "مطاحن الكرات", "أفران دوارة"]
        : ["Abrasive Particulate", "Ball Mills", "Rotary Kiln Drives"],
      equipment: [
        {
          icon: MotorIcon,
          title: isAr ? "محركات أفران الإسمنت الرئيسية ومحركات الكسارات" : "Rotary Kiln Main Drives & Jaw Crushers",
        },
        {
          icon: RotorBalancingIcon,
          title: isAr ? "مراوح سحب الغبار الكبرى (موازنة ديناميكية ISO)" : "High-Inertia Baghouse Fans (ISO 1940)",
        },
        {
          icon: PumpIcon,
          title: isAr ? "مضخات طين الإسمنت ومنافيخ النقل الهوائي" : "Cement Slurry Pumps & Pneumatic Blowers",
        },
      ],
    },
    {
      id: "construction",
      icon: ConstructionIndustryIcon,
      name: isAr ? "شركات المقاولات والإنشاءات الكبرى" : "Civil Construction & Infrastructure",
      chips: isAr
        ? ["نزح المياه الجوفية", "خلاطات خرسانية", "مولدات ميدانية"]
        : ["Site Dewatering", "Batching Plants", "Mobile Generators"],
      equipment: [
        {
          icon: PumpIcon,
          title: isAr ? "مضخات نزح المياه الجوفية الغاطسة المقاومة للطمي" : "Submersible Dewatering & Slurry Pumps",
        },
        {
          icon: MotorIcon,
          title: isAr ? "محركات محطات الخرسانة الجاهزة ومضخات الحقن" : "Ready-Mix Batching Drives & Grout Pumps",
        },
        {
          icon: TransformerIcon,
          title: isAr ? "مولدات الديزل الميدانية لمواقع المشاريع" : "Skid-Mounted Site Generators & Alternators",
        },
      ],
    },
    {
      id: "hospitals",
      icon: HealthcareIndustryIcon,
      name: isAr ? "المستشفيات والمنشآت الصحية" : "Hospitals & Critical Healthcare Facilities",
      chips: isAr
        ? ["شيلرات التكييف المركزي", "طاقة طوارئ دون انقطاع", "مضخات تعقيم"]
        : ["Mission-Critical HVAC", "Zero-Tolerance Uptime", "Sterile Pumping"],
      equipment: [
        {
          icon: CompressorIcon,
          title: isAr ? "ضواغط الشيلرات المركزية (حلزونية ومكابس)" : "Central HVAC Chiller Compressors (Screw/Recip)",
        },
        {
          icon: TransformerIcon,
          title: isAr ? "مولدات الطوارئ الاحتياطية لغرف العمليات" : "Emergency ICU Backup Generators & Sync Panels",
        },
        {
          icon: PumpIcon,
          title: isAr ? "مضخات تعزيز الضغط وشبكات مياه الإطفاء" : "Potable Water Booster Sets & Fire Pumps",
        },
      ],
    },
    {
      id: "flour-mills",
      icon: FlourMillIcon,
      name: isAr ? "مطاحن الدقيق وصوامع الغلال" : "Flour Mills & Grain Silo Facilities",
      chips: isAr
        ? ["بيئات قابلة للاشتعال", "نواقل لولبية", "منافيخ هوائية"]
        : ["Combustible Dust Proof", "Pneumatic Conveying", "Vertical Elevators"],
      equipment: [
        {
          icon: MotorIcon,
          title: isAr ? "محركات النواقل ومصاعد الحبوب الرأسية" : "Bucket Elevator Drives & Screw Conveyors",
        },
        {
          icon: Wind,
          title: isAr ? "منافيخ النقل الهوائي للدقيق (Roots Blowers)" : "Pneumatic Positive-Displacement Blowers",
        },
        {
          icon: MotorIcon,
          title: isAr ? "محركات محكمة مقاومة لدخول الغبار العضوي" : "Totally Enclosed Dust-Proof Electric Motors",
        },
      ],
    },
    {
      id: "food",
      icon: ColdChainFoodIcon,
      name: isAr ? "الصناعات الغذائية ومستودعات التبريد" : "Food Processing & Cold Chain Logistics",
      chips: isAr
        ? ["غرف تجميد مركزية", "مضخات ستانلس ستيل", "خطوط تعبئة"]
        : ["Sub-Zero Cold Storage", "Sanitary Pumping", "Packaging Lines"],
      equipment: [
        {
          icon: CompressorIcon,
          title: isAr ? "ضواغط التبريد لغرف حفظ اللحوم والألبان" : "Cold-Room Ammonia & Freon Compressors",
        },
        {
          icon: PumpIcon,
          title: isAr ? "مضخات الستانلس ستيل الصحية لنقل السوائل" : "Sanitary Stainless Centrifugal & PD Pumps",
        },
        {
          icon: MotorIcon,
          title: isAr ? "محركات خطوط التعبئة وسيور الفرز الآلية" : "Automated Conveyor Drives & Washdown Motors",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        title={isAr ? "خبرتنا الممتدة عبر القطاعات الصناعية" : "Industrial Expertise Across Critical Saudi Sectors"}
        description={isAr
          ? "تعتمد كبرى مصانع ومرافق المملكة على تارفا للحفاظ على جاهزية معداتها الكهروميكانيكية وتقليل أوقات التوقف الطارئة."
          : "Heavy manufacturing and public utilities across Saudi Arabia rely on Tarfa's four-decade track record to keep rotating machinery running without interruption."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "القطاعات الصناعية" : "Industries" },
        ]}
      />

      {/* Visual Diagnostic & Reliability Capabilities Strip */}
      <section className="py-8 bg-charcoal-950 text-white border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-charcoal-900 border border-charcoal-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-charcoal-950 border border-charcoal-700 flex items-center justify-center text-brand-red flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-red font-bold block">
                  {isAr ? "جاهزية الطوارئ" : "24/7 RAPID DISPATCH"}
                </span>
                <span className="font-heading font-bold text-sm text-white block">
                  {isAr ? "استجابة فورية للأعطال بالرياض" : "Round-the-Clock Breakdown Support"}
                </span>
              </div>
            </div>

            <div className="p-4 bg-charcoal-900 border border-charcoal-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-charcoal-950 border border-charcoal-700 flex items-center justify-center text-brand-red flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-red font-bold block">
                  {isAr ? "المعايير المعتمدة" : "OEM TOLERANCE COMPLIANCE"}
                </span>
                <span className="font-heading font-bold text-sm text-white block">
                  {isAr ? "مطابقة مواصفات المصانع العالمية" : "Certified Surge & ISO 1940 Protocols"}
                </span>
              </div>
            </div>

            <div className="p-4 bg-charcoal-900 border border-charcoal-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-charcoal-950 border border-charcoal-700 flex items-center justify-center text-brand-red flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-red font-bold block">
                  {isAr ? "الخدمات اللوجستية" : "HEAVY CRANE & LOGISTICS"}
                </span>
                <span className="font-heading font-bold text-sm text-white block">
                  {isAr ? "استلام وتسليم المعدات الثقيلة بالموقع" : "Direct Transport to Riyadh Sina'iyah"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Sector Cards Grid */}
      <section className="py-16 lg:py-20 bg-canvas-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.id}
                  className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-brand-red transition-colors shadow-hairline group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-charcoal-950 dark:bg-charcoal-850 border border-charcoal-800 dark:border-charcoal-700 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-charcoal-950 dark:text-white leading-snug">
                          {sector.name}
                        </h3>
                      </div>
                    </div>

                    {/* Operational capability tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sector.chips.map((chip, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-canvas-warm dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 font-mono text-xs text-charcoal-700 dark:text-charcoal-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Typical Machinery Serviced with Micro-Icons */}
                  <div className="pt-4 border-t border-charcoal-100 dark:border-charcoal-800 space-y-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-400 block font-semibold">
                      {isAr ? "المعدات الكهروميكانيكية المتخصصة:" : "SPECIALIZED MACHINERY OVERHAULED:"}
                    </span>
                    <div className="space-y-2">
                      {sector.equipment.map((eq, i) => {
                        const EqIcon = eq.icon;
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 p-2 bg-canvas-warm/60 dark:bg-charcoal-850/60 border border-charcoal-100 dark:border-charcoal-800 text-xs font-body text-charcoal-800 dark:text-charcoal-200"
                          >
                            <div className="w-6 h-6 bg-white dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 flex items-center justify-center text-brand-red flex-shrink-0">
                              <EqIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-xs sm:text-sm text-charcoal-900 dark:text-slate-100">{eq.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-14 bg-[#0a0c14] text-white border-t border-charcoal-800 border-b-2 border-brand-red/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              PLANT OVERHAUL CONSULTATION
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في مناقشة صيانة سنوية أو عمرة شاملة لمعدات مصنعك؟" : "Planning a Plant Shutdown or Need Long-Term Maintenance Partnership?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب اجتماع فني" : "Request Technical Consultation"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

