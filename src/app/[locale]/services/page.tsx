import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, ArrowUpRight, Cpu, Gauge, Wrench, Zap, Layers, ShieldCheck } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "دليل الخدمات الهندسية وإعادة اللف" : "Electromechanical Services & Rewinding Directory",
    description: isAr
      ? "دليل شامل لخدمات ورشة تارفا: إعادة لف المحركات الكهربائية، ضواغط التبريد، المضخات، المولدات، معالجة قلوب الستاتور والموازنة الديناميكية."
      : "Complete electromechanical rewinding and repair directory: electric motors, chiller compressors, industrial pumps, transformers, stator core repair, and dynamic balancing.",
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const services = [
    {
      id: "motors",
      code: "01",
      icon: Cpu,
      title: isAr ? "محركات الجهد المنخفض والعالي" : "Low & High Voltage Electric Motors",
      headline: isAr ? "من المحركات الصغيرة حتى القدرات الصناعية الكبرى" : "From Fractional Drives to Heavy-Duty Megawatt Motors",
      desc: isAr
        ? "إعادة لف بالأسلاك الدائرية والشريطية لمحركات التيار المتردد الحثية ثلاثية الأطوار، المحركات التزامنية، محركات مراوح المكثفات، محركات التيار المستمر (توالي، توازي، مركب)، والمحركات التخصصية ذات حلقات الانزلاق والسيرفو."
        : "Round and strip wire rewinding for AC three-phase induction, synchronous, condenser fan motors, DC (shunt, series, compound), slip ring, squirrel cage, and servo motors across all voltage classes.",
      specs: isAr ? "تيار متردد ومستمر / حتى 13.8 كيلو فولت / أسلاك دائرية وشريطية" : "AC & DC / Up to 13.8 kV / Round & Strip Wire",
      image: "/images/services/motors-lineup.png",
      href: "/services/motors",
    },
    {
      id: "chiller-compressors",
      code: "02",
      icon: Gauge,
      title: isAr ? "ضواغط التبريد الصناعية (الشيلرات)" : "Industrial Chiller Compressors",
      headline: isAr ? "حلول صيانة شاملة لمختلف ماركات وأنواع الضواغط" : "Complete Overhaul & Stator Rewinding for Chiller Systems",
      desc: isAr
        ? "خدمات متكاملة لضواغط التبريد تشمل الفحص الداخلي، العمرة الشاملة، استبدال الأجزاء الميكانيكية التالفة، وإعادة لف الستاتور المحكم لضواغط المكابس الترددية والضواغط الحلزونية (سكرو) والطاردة المركزية."
      : "Turnkey compressor overhaul: internal mechanical inspection, bearing replacement, precision stator rewinding, and pressure decay testing for reciprocating, screw, and centrifugal compressors.",
      specs: isAr ? "ضواغط ترددية / شبه محكمة / حلزونية / طاردة مركزية" : "Reciprocating / Semi-Hermetic / Screw / Centrifugal",
      image: "/images/services/chiller-compressor-screw.png",
      href: "/services/chiller-compressors",
    },
    {
      id: "water-pumps",
      code: "03",
      icon: Wrench,
      title: isAr ? "مضخات المياه والعمليات الصناعية" : "Water & Heavy Industrial Pumps",
      headline: isAr ? "إعادة لف وصيانة مضخات الطرد المركزي والإزاحة الإيجابية" : "Rewinding & Maintenance for Submersible & Surface Pumps",
      desc: isAr
        ? "صيانة وإعادة لف المضخات الغاطسة للآبار، مضخات الطرد المركزي متعددة المراحل، مضخات السحب النهائي، التوربينات الرأسية، مضخات الإزاحة الإيجابية (مكبس، غشاء، تروس)، مضخات نزح المياه الجوفية، ومضخات الحمأة والتعزيز."
        : "Comprehensive rewinding and mechanical repair for submersible deep well pumps, multistage centrifugal, vertical turbines, positive displacement (piston, diaphragm, gear), dewatering, and slurry pumps.",
      specs: isAr ? "مضخات غاطسة / متعددة المراحل / نزح / حمأة / توربينية" : "Submersible / Multistage / Dewatering / Slurry / Booster",
      image: "/images/services/pumps-submersible-multistage.png",
      href: "/services/water-pumps",
    },
    {
      id: "generators-transformers",
      code: "04",
      icon: Zap,
      title: isAr ? "المولدات والمحولات الكهربائية" : "Generators, Alternators & Transformers",
      headline: isAr ? "صيانة كهروميكانيكية متخصصة لمحولات الرفع والخفض والمولدات" : "Electrical Maintenance, Oil Replacement & Coil Rewinding",
      desc: isAr
        ? "صيانة كهربائية شاملة للمولدات والمولدات الفرعية، وإعادة لف ملفات محولات التوزيع (رفع وخفض)، وفحص واستبدال زيت التبريد والعزل الكهربائي لضمان الكفاءة والأمان."
        : "Complete electrical maintenance for heavy alternators, diesel generation sets, distribution transformers (step-up/step-down), dielectric oil replacement, and secondary coil rewinding.",
      specs: isAr ? "محولات رفع وخفض / استبدال الزيت / مولدات رئيسية وفرعية" : "Step-up & Step-down / Oil Replacement / Prime & Standby",
      image: "/images/services/generators-alternators.png",
      href: "/services/generators-transformers",
    },
    {
      id: "core-maintenance",
      code: "05",
      icon: Layers,
      title: isAr ? "صيانة ومعالجة قلوب المحركات (Core Maintenance)" : "Stator Core Testing, Varnishing & Spot Welding",
      headline: isAr ? "معالجة شرائح الستاتور دون الحاجة لاستبدال القلب بالكامل" : "In-House Lamination Restoration & Flux Loss Diagnostics",
      desc: isAr
        ? "خدمات متخصصة في معالجة القلوب المغناطيسية لمحركات المضخات الغاطسة الكبرى والمحركات الثقيلة: فحص التدفق الحلقي (Loop Flux Testing)، تنظيف وإعادة دهان الورنيش العازل، ولحام النقطة للشرائح السائبة."
        : "Specialized in-house stator core repair for large submersible pumps and motors: core loss flux testing, carbonized lamination cleaning, re-varnishing, and localized precision spot welding.",
      specs: isAr ? "فحص التدفق / تنظيف وإعادة طلاء الورنيش / لحام موضعي" : "Flux Loss Testing / Re-Varnishing / Localized Spot Welding",
      image: "/images/workshop/core-testing.png",
      href: "/services/core-maintenance",
    },
    {
      id: "testing-balancing",
      code: "06",
      icon: ShieldCheck,
      title: isAr ? "الفحوصات الهندسية وموازنة الروتور" : "Static Diagnostic Testing & Dynamic Rotor Balancing",
      headline: isAr ? "موازنة ديناميكية دقيقة وفحوصات ساكنة شاملة" : "Dynamic Balancing to ISO 1940 & High-Potential Insulation Tests",
      desc: isAr
        ? "فحوصات ساكنة لكافة الدوائر الكهربائية، قياس مقاومة العزل، صيانة حلقات الانزلاق، وموازنة ديناميكية إلكترونية للأعضاء الدوارة الرئيسية لمنع الاهتزازات وحماية كراسي التحميل."
        : "Comprehensive static electrical testing, surge comparison, slip ring resurfacing, and precision dynamic balancing of main rotors to eliminate harmonics and mechanical vibration.",
      specs: isAr ? "معيار ISO 1940 / اختبارات النبضة / صيانة حلقات الانزلاق" : "Dynamic Balancing (ISO 1940) / Surge / Slip Ring Overhaul",
      image: "/images/workshop/riyadh-testing-bay.png",
      href: "/services/testing-balancing",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        sectionNumber="DIRECTORY // WORKSHOP SERVICES"
        badge={isAr ? "6 تخصصات صناعية" : "6 CORE DISCIPLINES"}
        title={isAr ? "دليل الخدمات الكهروميكانيكية المتخصصة" : "Industrial Electromechanical Service Catalog"}
        description={isAr
          ? "تغطي ورشتنا بالرياض كافة متطلبات إعادة اللف، العمرات الميكانيكية، صيانة القلوب، والموازنة الديناميكية للمعدات الدوارة في مختلف مصانع المملكة."
          : "Comprehensive rewinding, mechanical overhaul, stator lamination restoration, and dynamic balancing services engineered for heavy Saudi industrial facilities."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "الخدمات" : "Services" },
        ]}
      />

      <section className="py-16 lg:py-20 bg-canvas-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Service Cards Grid (Each with Real Photo, Specs, and Detail Link) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 flex flex-col justify-between overflow-hidden group hover:border-brand-red transition-all duration-200 shadow-hairline"
                >
                  {/* Photo Top with 25° Chamfer Cut Mask */}
                  <div className="relative h-48 w-full bg-charcoal-950 overflow-hidden industrial-cut">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 start-3 bg-charcoal-950/90 border border-charcoal-700 font-mono text-xs font-bold text-brand-red px-2 py-0.5">
                      SERVICE {svc.code}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-none bg-canvas-warm dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 text-brand-red flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[11px] font-bold text-brand-red uppercase tracking-wider">
                          DISCIPLINE {svc.code}
                        </span>
                      </div>

                      <h2 className="font-heading font-extrabold text-xl text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors">
                        {svc.title}
                      </h2>

                      <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 block font-medium">
                        {svc.headline}
                      </span>
                    </div>

                    {/* Operational Envelope */}
                    <div className="pt-3 border-t border-charcoal-100 dark:border-charcoal-800 space-y-2">
                      <div className="font-mono text-[11px] text-charcoal-500 dark:text-charcoal-400">
                        <span className="text-[10px] uppercase text-charcoal-400 block">
                          {isAr ? "نطاق المواصفات" : "SPEC ENVELOPE"}
                        </span>
                        <span className="font-semibold text-brand-red">
                          {svc.specs}
                        </span>
                      </div>

                      <Link
                        href={svc.href as any}
                        className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-charcoal-900 dark:text-white hover:text-brand-red pt-1"
                      >
                        <span>{isAr ? "استعراض المواصفات وجدول الاختبارات" : "View Full Specs & Test Table"}</span>
                        <ArrowIcon className="w-3.5 h-3.5 text-brand-red" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

