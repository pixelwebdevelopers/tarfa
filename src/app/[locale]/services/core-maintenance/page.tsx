import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SpecTable, SpecRow } from "@/components/SpecTable";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, Layers, ShieldAlert, Wrench, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "صيانة ومعالجة قلوب المحركات والستاتور"
      : "Stator Core Testing, Cleaning, Re-Varnishing & Spot Welding",
    description: isAr
      ? "خدمات متخصصة في معالجة القلوب المغناطيسية لمحركات المضخات والمحركات الكبرى بالرياض: فحص التدفق الحلقي، تنظيف وإعادة دهان الورنيش العازل، ولحام النقطة للشرائح."
      : "Specialized in-house stator core repair for large submersible pumps and motors: loop flux core testing, interlaminar re-varnishing, and localized spot welding in Riyadh.",
  };
}

export default async function CoreMaintenancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const coreSpecRows: SpecRow[] = [
    {
      equipment: isAr ? "فحص التدفق الحلقي للقلب (Loop Flux Testing)" : "Stator Core Loop Flux & Thermal Diagnostics",
      scope: isAr ? "إثارة الحقل المغناطيسي للقلب ومسحه بكاميرا حرارية لرصد بؤر التسخين والماس الكهربائي بين الشرائح" : "Excitation Loop Flux Induced Magnetization & Thermal Imaging for Hot Spot Detection",
      specs: "Stators from 50 kW up to 5,000 kW / Submersible & Surface",
      testing: "Thermal Camera IR Scan, Watt/kg Core Iron Loss Measurement",
      notes: isAr ? "تشخيص انهيار العزل الداخلي قبل اللف" : "Pre-rewind diagnostic to avoid premature burnout",
    },
    {
      equipment: isAr ? "تنظيف الشرائح وإعادة طلاء الورنيش (Cleaning & Re-Varnishing)" : "Interlaminar Cleaning, Deburring & Re-Varnishing",
      scope: isAr ? "إزالة رواسب الاحتراق والورنيش المتكربن وتطبيق ورنيش عازل حراري عالي الجهد والتجفيف بالأفران" : "Chemical Clean, Burred Edge Grinding, High-Dielectric Varnish Spray & Oven Cure",
      specs: "Silicon Steel Core Lamination Restoration",
      testing: "Interlaminar Resistance Test, Surface Voltage Breakdown",
      notes: isAr ? "استعادة مقاومة العزل بين شرائح الستاتور" : "Restores inter-lamination dielectric barrier",
    },
    {
      equipment: isAr ? "لحام النقطة للشرائح السائبة (Core Spot Welding)" : "Localized Precision Stator Teeth Spot Welding",
      scope: isAr ? "لحام موضعي دقيق لتثبيت أسنان الستاتور والشرائح المرتخية ومنع الاهتزاز تحت الحمل" : "Controlled Low-Heat Spot Welding to Anchor Loose Teeth & Prevent Vibration",
      specs: "Heavy Submersible & High-Vibration Motors",
      testing: "Mechanical Rigidity Tap Test, Magnetic Air Gap Tolerance",
      notes: isAr ? "منع احتكاك الروتور بالستاتور وحماية الملفات" : "Eliminates tooth flutter and magnetic acoustic hum",
    },
    {
      equipment: isAr ? "معالجة أضرار احتكاك الروتور (Rotor Rub Damage Repair)" : "Stator Bore Reconditioning & Rub Damage Removal",
      scope: isAr ? "إزالة المعدن المنصهر الناتج عن احتكاك الروتور بالستاتور وإعادة فتح المجاري الهوائية" : "Removal of Smudged Lamination Metal, Slot Opening Trueing & Re-insulation",
      specs: "Catastrophic Bearing Seizure Aftermath",
      testing: "Core Loss Comparison Before/After Restoration",
      notes: isAr ? "إنقاذ القلوب التالفة دون الحاجة لاستبدالها" : "Saves expensive stators without full core replacement",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        sectionNumber="SERVICE 05 // CORE MAINTENANCE"
        badge={isAr ? "خدمة متخصصة نادرة" : "SPECIALIZED FACILITY DISCIPLINE"}
        title={isAr ? "صيانة ومعالجة قلوب المحركات الكهربائية" : "Stator Core Testing, Cleaning, Re-Varnishing & Spot Welding"}
        description={isAr
          ? "خدمات متخصصة في معالجة القلوب المغناطيسية لمحركات المضخات الغاطسة والمحركات الكبرى بالرياض لحمايتها من الانهيار الحراري."
          : "In-house stator core repair and magnetic lamination restoration: loop flux testing, interlaminar re-varnishing, and localized precision spot welding in Riyadh."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "الخدمات" : "Services", href: "/services" },
          { label: isAr ? "صيانة القلوب" : "Core Maintenance" },
        ]}
      />

      {/* 1. Overview */}
      <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="CAPABILITY SCOPE 05"
                title={isAr ? "معالجة القلوب المغناطيسية وإنقاذ الستاتور من التلف الكامل" : "Restoring Magnetic Integrity Without Complete Core Replacement"}
              />

              <div className="space-y-4 font-body text-charcoal-600 dark:text-charcoal-300 leading-relaxed text-sm sm:text-base">
                <p>
                  {isAr
                    ? "يتكون قلب الستاتور من آلاف الشرائح الرقيقة من فولاذ السيليكون المعزولة عن بعضها لمنع التيارات الدوامية (Eddy Currents). عند تعرض المحرك لاحتراق شديد أو احتكاك ميكانيكي بالروتور، ينهار هذا العزل وتتكون بؤر حرارية (Hot Spots) تؤدي إلى احتراق الملفات الجديدة في وقت قياسي."
                    : "A motor stator core comprises thousands of insulated electrical steel laminations engineered to minimize parasitic eddy currents. When a motor suffers a catastrophic burnout or rotor rub, this interlaminar insulation breaks down, creating localized hot spots that will incinerate a freshly rewound motor within hours."}
                </p>
                <p>
                  {isAr
                    ? "تعتبر ورشة تارفا من الورش القليلة في المملكة المجهزة بمحطة متكاملة لمعالجة القلوب: نجري فحص التدفق الحلقي للقلب (Loop Flux Test) مع الرصد الحراري بالأشعة تحت الحمراء، ونقوم بتنظيف الشرائح المتكربنة وإعادة طلائها بالورنيش العازل، وتثبيت الأسنان المرتخية بواسطة لحام النقطة الموضعي الدقيق."
                    : "Tarfa is among the select electromechanical facilities in Saudi Arabia equipped with dedicated core repair bays. We conduct loop flux excitation paired with infrared thermal thermography, remove smudged lamination metal, apply high-dielectric baking varnish, and execute localized precision spot welding to secure loosened stator teeth."}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "طريقة الفحص" : "METHOD"}</span>
                  <span className="font-bold text-brand-red">Loop Flux + IR Thermal</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "المعدات" : "EQUIPMENT"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">Submersible Pumps & Heavy Motors</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "النتيجة" : "OUTCOME"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">Eliminates Hot Spots</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[420px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-950 overflow-hidden industrial-cut">
                <Image
                  src="/images/workshop/core-testing.png"
                  alt="Tarfa engineer conducting loop flux core loss test on motor stator"
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[10%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 font-mono text-xs text-white backdrop-blur-xs">
                  <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                    CORE DIAGNOSTIC BAY // RIYADH
                  </span>
                  <span className="text-charcoal-300 text-xs">
                    {isAr
                      ? "فحص التدفق الحلقي للقلب ورصد درجات الحرارة قبل إعادة اللف"
                      : "Stator core loop flux excitation and thermal hot spot detection"}
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
            eyebrow="TECHNICAL MATRIX 05"
            title={isAr ? "جدول مواصفات معالجة قلوب الستاتور" : "Stator Core Repair & Testing Specifications"}
            description={isAr
              ? "مواصفات الفحوصات التشخيصية ومعالجة العزل ولحام النقطة للشرائح السائبة بموجب معايير IEEE و IEC."
              : "Technical standards governing flux loop testing, iron loss thresholds, varnish curing, and mechanical spot welding."}
            withRule
          />

          <SpecTable
            title={isAr ? "مصفوفة المواصفات الفنية لمعالجة قلوب الستاتور" : "Stator Core Maintenance Engineering Matrix"}
            caption="IEEE 43 // IEEE 56 // IEC 60034-23 COMPLIANT"
            headers={{
              equipment: isAr ? "نوع العملية الهندسية" : "Core Maintenance Process",
              scope: isAr ? "نطاق العمل والمعالجة" : "Remediation & Testing Scope",
              specs: isAr ? "نطاق المعدات والمواصفات" : "Machine Scope & Insulation Grade",
              testing: isAr ? "معايير الاختبارات وضمان الجودة" : "Quality & Thermal Compliance",
            }}
            rows={coreSpecRows}
          />
        </div>
      </section>

      {/* 3. Action Banner */}
      <section className="py-12 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              STATOR CORE DIAGNOSTICS & REPAIR
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل تشك في وجود بؤر تسخين أو تلف في قلب محركك؟" : "Suspect Core Iron Loss or Recurring Stator Burnout?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب فحص قلب المحرك" : "Request Stator Core Assessment"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

