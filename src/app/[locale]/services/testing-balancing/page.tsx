import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SpecTable, SpecRow } from "@/components/SpecTable";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, ShieldCheck, Activity, Gauge, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "الفحوصات الهندسية وموازنة الروتور الديناميكية"
      : "Static Diagnostic Testing & Dynamic Rotor Balancing (ISO 1940)",
    description: isAr
      ? "خدمات متخصصة في الموازنة الديناميكية للأعضاء الدوارة، الفحوصات الساكنة الشاملة، فحص مقاومة العزل، وصيانة حلقات الانزلاق بالرياض."
      : "Dynamic rotor balancing to ISO 1940 tolerances, static electrical surge testing, Megger 5kV insulation resistance, and slip ring overhaul in Riyadh.",
  };
}

export default async function TestingBalancingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const testSpecRows: SpecRow[] = [
    {
      equipment: isAr ? "الموازنة الديناميكية للأعضاء الدوارة (Dynamic Balancing)" : "Dynamic Rotor, Impeller & Blower Balancing",
      scope: isAr ? "معايرة وموازنة إلكترونية ثنائية المستوى لإزالة الاهتزازات الميكانيكية وتعديل أوزان الاتزان" : "Two-Plane Electronic Dynamic Balancing to ISO 1940 G2.5 Grade with Weight Calibration",
      specs: "Rotors up to 3,500 kg / Diameters up to 2.5m / Length up to 4.5m",
      testing: "Residual Unbalance Certificate, Vibration Velocity (mm/s RMS)",
      notes: isAr ? "حماية كراسي التحميل من الانهيار المبكر" : "Eliminates premature bearing failure and fatigue",
    },
    {
      equipment: isAr ? "فحوصات الجهد العالي والنبضات (Surge & High-Potential)" : "Surge Comparison & High-Potential (Hipot) Testing",
      scope: isAr ? "رصد عيوب العزل الداخلي بين اللفات (Turn-to-Turn) وفحص العزل الأرضي" : "High-Frequency Waveform Comparison & AC/DC High-Potential Dielectric Stress Test",
      specs: "Up to 15 kV Test Voltage",
      testing: "Waveform Superimposition Pattern, Dielectric Leakage Current (µA)",
      notes: isAr ? "اكتشاف الانهيارات العازلة المجهرية" : "Detects microscopic insulation flaws before energizing",
    },
    {
      equipment: isAr ? "قياس مقاومة العزل ومؤشر الاستقطاب (Insulation & PI)" : "Megger Insulation Resistance & Polarization Index (PI)",
      scope: isAr ? "فحص امتصاص الرطوبة والشوائب وقياس النسبة بين قراءة 10 دقائق إلى دقيقة واحدة" : "1kV - 5kV DC Insulation Resistance Logging & 10-Min / 1-Min PI Calculation",
      specs: "IEEE 43-2020 Recommended Practice",
      testing: "Insulation Resistance > 100 MΩ, PI Ratio > 2.0 (Acceptable)",
      notes: isAr ? "التأكد من جفاف ونقاء العوازل الكهربائية" : "Guarantees moisture-free winding cleanliness",
    },
    {
      equipment: isAr ? "صيانة حلقات الانزلاق (Slip Ring Overhaul & Trueing)" : "Slip Ring Resurfacing & Brush Holder Calibration",
      scope: isAr ? "خراطة وتنعيم حلقات الانزلاق، استبدال فرش الكربون، ومعايرة ضغط النوابض" : "Precision Slip Ring Turning, Carbon Brush Replacement & Spring Tension Calibration",
      specs: "Wound Rotor & Alternator Slip Rings",
      testing: "Surface Roughness Ra < 0.8 µm, Contact Resistance Balance",
      notes: isAr ? "منع الشرر الكهربائي وتآكل الفرش" : "Prevents arcing, flashover, and brush grooving",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        sectionNumber="SERVICE 06 // TESTING & BALANCING"
        badge={isAr ? "معيار ISO 1940 وفحوصات الجهد العالي" : "ISO 1940 G2.5 // SURGE & HIPOT"}
        title={isAr ? "الفحوصات الهندسية وموازنة الروتور الديناميكية" : "Diagnostic Testing & Precision Rotor Balancing"}
        description={isAr
          ? "فحوصات ساكنة شاملة، اختبارات مقارنة النبضة، موازنة ديناميكية للأعضاء الدوارة وفق أعلى المعايير الهندسية بالرياض."
          : "Rigorous static electrical diagnostics, high-voltage surge comparison, slip ring resurfacing, and precision two-plane dynamic rotor balancing in Riyadh."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "الخدمات" : "Services", href: "/services" },
          { label: isAr ? "الفحوصات والموازنة" : "Testing & Balancing" },
        ]}
      />

      {/* 1. Overview */}
      <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="CAPABILITY SCOPE 06"
                title={isAr ? "دقة الاختبار تضمن سلامة التشغيل واستقرار الأداء" : "Precision Balancing Eliminates Machine Vibration at Root"}
              />

              <div className="space-y-4 font-body text-charcoal-600 dark:text-charcoal-300 leading-relaxed text-sm sm:text-base">
                <p>
                  {isAr
                    ? "تعتبر الاهتزازات الميكانيكية السبب الأول لتلف كراسي التحميل وتصدع أغطية المحركات. توفر ورشة تارفا محطة موازنة ديناميكية إلكترونية مجهزة لرصد واحتساب أي اختلال في توزيع الكتلة على طول العضو الدوار (Rotor) أو مروحة المضخة، وتصحيحه بدقة متناهية وفق معيار ISO 1940 درجة G2.5."
                    : "Mechanical vibration is the leading cause of premature bearing seizure, mechanical seal failure, and structural motor frame cracking. Tarfa operates a heavy-duty precision dynamic balancing machine capable of calibrating rotors, impellers, blowers, and crankshafts to rigid ISO 1940 G2.5 tolerances."}
                </p>
                <p>
                  {isAr
                    ? "بالتوازي مع الموازنة، يجري مهندسونا الفحوصات الكهربائية الساكنة الشاملة: فحص مقارنة النبضة (Surge Test) للكشف عن أي قصر خفي بين لفات السلك، قياس مقاومة العزل بجهاز ميجر حتى 5 كيلوفولت، فحص مؤشر الاستقطاب (PI)، وصيانة وتنعيم حلقات الانزلاق (Slip Rings) لضمان تماس كهربائي خالٍ من الشرر."
                    : "In tandem with mechanical balancing, our electrical testing suite performs high-frequency surge comparison to detect micro-faults between adjacent turns, 5kV Megger insulation resistance, Polarization Index (PI), and precision lathe resurfacing of slip ring assemblies to guarantee spark-free current transmission."}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "معيار الموازنة" : "BALANCING STANDARD"}</span>
                  <span className="font-bold text-brand-red">ISO 1940 Grade G2.5</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "فحص النبضات" : "SURGE TEST"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">Up to 15 kV</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "مؤشر الاستقطاب" : "POLARIZATION INDEX"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">IEEE 43 Compliant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[420px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-950 overflow-hidden industrial-cut">
                <Image
                  src="/images/workshop/riyadh-testing-bay.png"
                  alt="Dynamic balancing and electrical testing bay in Tarfa workshop"
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[10%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 font-mono text-xs text-white backdrop-blur-xs">
                  <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                    TESTING BAY 06 // RIYADH
                  </span>
                  <span className="text-charcoal-300 text-xs">
                    {isAr
                      ? "جهاز الموازنة الديناميكية وماكينات الفحص الساكن للأعضاء الدوارة"
                      : "Precision dynamic balancing cradle and electrical diagnostic station"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Spec Table */}
      <section className="py-16 lg:py-20 bg-canvas-warm border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="TECHNICAL MATRIX 06"
            title={isAr ? "جدول مواصفات الفحوصات الساكنة والموازنة" : "Testing Protocols & Dynamic Balancing Specifications"}
            description={isAr
              ? "مواصفات ومعايير فحص العزل، موازنة الأعضاء الدوارة، وصيانة حلقات الانزلاق وفق الممارسات المعتمدة."
              : "Standard engineering specifications for dynamic unbalance tolerances, high-potential thresholds, and slip ring finishes."}
            withRule
          />

          <SpecTable
            title={isAr ? "مصفوفة المواصفات الفنية للاختبارات والموازنة" : "Diagnostic Testing & Rotor Balancing Specification Matrix"}
            caption="ISO 1940 // IEEE 43 // EASA AR100 COMPLIANT"
            headers={{
              equipment: isAr ? "نوع الفحص أو المعايرة" : "Diagnostic Discipline",
              scope: isAr ? "نطاق الفحص والمعايرة" : "Test Scope & Calibration Standard",
              specs: isAr ? "سعة الأوزان والجهد" : "Capacity & Parameter Envelope",
              testing: isAr ? "معايير الاختبارات وضمان الجودة" : "Acceptance Tolerance & Certificate",
            }}
            rows={testSpecRows}
          />
        </div>
      </section>

      {/* 3. Action Banner */}
      <section className="py-12 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              VIBRATION & INSULATION DIAGNOSTICS
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في موازنة روتور أو إجراء فحص عزل شامل؟" : "Suffering Machine Vibration or Suspect Insulation Breakdown?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب موازنة أو فحص كهربائي" : "Request Balancing/Testing Quote"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

