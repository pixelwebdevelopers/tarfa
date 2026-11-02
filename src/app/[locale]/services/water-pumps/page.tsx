import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SpecTable, SpecRow } from "@/components/SpecTable";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, Wrench, ShieldCheck, Droplets, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "إعادة لف وصيانة المضخات المائية والصناعية"
      : "Water & Industrial Pump Rewinding & Mechanical Overhaul",
    description: isAr
      ? "خدمات متخصصة في إعادة لف وصيانة المضخات الغاطسة، مضخات الطرد المركزي، المضخات متعددة المراحل، مضخات نزح المياه والحمأة بالرياض."
      : "Submersible pump rewinding, multistage centrifugal pump overhaul, vertical turbine repair, mechanical seal refurbishment, and pressure testing in Riyadh.",
  };
}

export default async function WaterPumpsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const pumpSpecRows: SpecRow[] = [
    {
      equipment: isAr ? "المضخات الغاطسة (Submersible Well Pumps)" : "Submersible Deep Well & Drainage Pumps",
      scope: isAr ? "إعادة لف المحرك الغاطس بالأسلاك المعزولة المائية + استبدال مانع التسرب الميكانيكي المزدوج" : "Waterproof Submersible Motor Rewind + Dual Mechanical Face Seal Overhaul",
      specs: "5 HP to 500 HP / Up to 3.3 kV / IP68 Submersion",
      testing: "Submerged Insulation Resistance (Megger 2.5kV), Hydrostatic Casing Pressure",
      notes: isAr ? "آبار المياه العميقة ومحطات الصرف الصحي" : "Municipal water wells and deep extraction stations",
    },
    {
      equipment: isAr ? "مضخات الطرد المركزي متعددة المراحل (Multistage Centrifugal)" : "Multistage Centrifugal High-Pressure Pumps",
      scope: isAr ? "موازنة الدوافع (Impellers)، استبدال الحلقات التآكلية، وضبط عمود الإدارة" : "Impeller Balancing, Wear Ring Replacement & Precision Shaft Alignment",
      specs: "Up to 150 Bar Pressure / Flow up to 2,500 m³/h",
      testing: "Dynamic Rotor Balancing to ISO 1940, Hydraulic Head Curve Verification",
      notes: isAr ? "محطات تحلية المياه وتغذية مراجل البخار" : "RO desalination plants & boiler feed systems",
    },
    {
      equipment: isAr ? "التوربينات الرأسية ومضخات السحب (Vertical Turbines & End Suction)" : "Vertical Turbine & End Suction Pumps",
      scope: isAr ? "إعادة تسوية خط عمود الإدارة (Column Shaft)، تجديد كراسي التحميل، وإعادة لف محرك الدفع" : "Line Shaft Trueing, Guide Bushing Replacement & Drive Motor Rewind",
      specs: "Vertical Column Depth up to 120m / Up to 1,500 kW",
      testing: "Vibration FFT Spectrum, Shaft Total Indicator Runout (TIR)",
      notes: isAr ? "شبكات مياه التبريد والمشاريع الزراعية الكبرى" : "Irrigation grids & industrial cooling loops",
    },
    {
      equipment: isAr ? "مضخات الإزاحة الإيجابية (Positive Displacement Pumps)" : "Positive Displacement Pumps (Piston, Diaphragm, Gear, Screw)",
      scope: isAr ? "صيانة وتجديد المكابس والتروس وصمامات عدم الرجوع وإعادة لف محرك القيادة" : "Piston, Gear, Diaphragm, Screw Cavity Rebuild & Drive Motor Overhaul",
      specs: "Viscous, Slurry & Dosing Chemical Applications",
      testing: "Discharge Pressure Relief Check, Volumetric Flow Rate Test",
      notes: isAr ? "الصناعات البتروكيماوية والمستحضرات الدوائية والغذائية" : "Petrochemical dosing, food syrup & oil transfer",
    },
    {
      equipment: isAr ? "مضخات نزح المياه ومضخات الحمأة (Dewatering & Slurry Pumps)" : "Dewatering, Slurry & Heavy Booster Pumps",
      scope: isAr ? "تجديد الدوافع المقاومة للتآكل واستبدال دروع الحماية وإعادة لف العضو الساكن" : "High-Chrome Abrasion-Resistant Impeller & Liner Replacement, Stator Rewind",
      specs: "Solids Handling up to 75mm / Heavy Construction Duty",
      testing: "Solids Passage Clearance, Motor Winding Thermal Probe Verification",
      notes: isAr ? "مشاريع الإنشاءات الكبرى والأنفاق والتعدين" : "Civil excavation, tunneling & mining drainage",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        title={isAr ? "إعادة لف وصيانة المضخات المائية والصناعية" : "Water & Industrial Pump Overhaul & Rewinding"}
        description={isAr
          ? "حلول هندسية متكاملة لمضخات المياه النظيفة، مضخات نزح المياه الجوفية، ومضخات العمليات الصناعية الثقيلة بالرياض."
          : "End-to-end mechanical rebuilding, waterproof submersible motor rewinding, dynamic impeller balancing, and hydrostatic pressure certification."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "الخدمات" : "Services", href: "/services" },
          { label: isAr ? "مضخات المياه" : "Water Pumps" },
        ]}
      />

      {/* 1. Overview */}
      <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                title={isAr ? "كفاءة مائية وهيدروليكية موثوقة لأعلى معايير التشغيل" : "Precision Hydraulic Rebuilding for Municipal & Heavy Plants"}
              />

              <div className="space-y-4 font-body text-charcoal-700 dark:text-charcoal-200 leading-relaxed text-base sm:text-lg">
                <p>
                  {isAr
                    ? "تعتبر مضخات المياه عصب المرافق العامة والمصانع ومشاريع البنية التحتية. تقدم ورشة تارفا خدمات إعادة لف وصيانة شاملة تشمل المضخات الغاطسة التي تعمل في أعماق الآبار الارتوازية وتتطلب عوازل سلكية مائية متخصصة لمنع تسرب الرطوبة تحت الضغط العالي."
                    : "Water pumps constitute the vital circulatory system of municipal infrastructure, agriculture, and manufacturing plants across Saudi Arabia. Tarfa provides rigorous mechanical restoration and waterproof submersible motor rewinding designed to withstand continuous high hydrostatic pressures."}
                </p>
                <p>
                  {isAr
                    ? "نقوم بصيانة المضخات متعددة المراحل ومضخات الطرد المركزي، وفحص عمود الإدارة بجهاز قياس الانحراف الدقيق (Runout Gauge)، واستبدال موانع التسرب الميكانيكية بأجود أنواع كربيد السيليكون والتنجستن، وموازنة الدوافع (Impellers) ديناميكياً لتقليل الاهتزازات وحماية المحامل."
                    : "For multistage and horizontal split-case pumps, we inspect shaft total runout, replace mechanical face seals with premium silicon/tungsten carbide faces, and dynamically balance all impellers to eliminate cavitation, vibration, and premature bearing destruction."}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "درجة الحماية" : "INGRESS PROTECTION"}</span>
                  <span className="font-bold text-brand-red">IP68 Submersible</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "ضغط التشغيل" : "PRESSURE"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">Up to 150 Bar</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "موانع التسرب" : "MECHANICAL SEALS"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">SiC / Tungsten Carbide</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[420px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-950 overflow-hidden industrial-cut">
                <Image
                  src="/images/services/pumps-submersible-multistage.png"
                  alt="Industrial water pumps lineup in Tarfa workshop"
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[10%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 font-mono text-xs text-white backdrop-blur-xs">
                  <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                    PUMP RECONDITIONING BAY, RIYADH
                  </span>
                  <span className="text-charcoal-300 text-xs">
                    {isAr
                      ? "صيانة مضخات الطرد المركزي والمضخات الغاطسة واختبار موانع التسرب"
                      : "Multistage pump overhaul and mechanical seal hydrostatic pressure testing"}
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
            title={isAr ? "جدول مواصفات صيانة مضخات المياه الصناعية" : "Industrial Water Pump Specifications & Overhaul Protocol"}
            description={isAr
              ? "تفاصيل فئات المضخات الغاطسة ومضخات الطرد المركزي والإزاحة الإيجابية ومعايير الفحص الهيدروستاتيكي والموازنة."
              : "Specifications covering pump classifications, flow envelopes, rewinding standards, and dynamic impeller balancing."}
            withRule
          />

          <SpecTable
            title={isAr ? "مصفوفة المواصفات الفنية لمضخات المياه والعمليات" : "Industrial Pumps Engineering Specification Matrix"}
            caption="HI (HYDRAULIC INSTITUTE) · ISO 9906 · ISO 1940 COMPLIANT"
            headers={{
              equipment: isAr ? "نوع وفئة المضخة" : "Pump Topology & Family",
              scope: isAr ? "نطاق العمرة وإعادة اللف" : "Reconditioning & Stator Rewind Scope",
              specs: isAr ? "نطاق القدرة والضغط والتدفق" : "Head, Flow & Pressure Envelope",
              testing: isAr ? "معايير الاختبارات وضمان الجودة" : "Hydrostatic & Dynamic Test Standards",
            }}
            rows={pumpSpecRows}
          />
        </div>
      </section>

      {/* 3. Action Banner */}
      <section className="py-14 bg-[#0a0c14] text-white border-t border-charcoal-800 border-b-2 border-brand-red/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              PUMP OVERHAUL & FIELD DISPATCH
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في صيانة مضخة مياه أو عمرة محرك غاطس؟" : "Need Emergency Pump Rewinding or Impeller Rebalancing?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب عرض سعر صيانة المضخات" : "Request Pump Overhaul Quote"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

