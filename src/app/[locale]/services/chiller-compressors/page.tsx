import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SpecTable, SpecRow } from "@/components/SpecTable";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, Gauge, ShieldCheck, Wrench, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "صيانة وإعادة لف ضواغط التبريد الصناعية (الشيلرات)"
      : "Chiller Compressor Overhaul & Stator Rewinding",
    description: isAr
      ? "خدمات متخصصة في صيانة وعمرة وإعادة لف ضواغط التبريد والشيلرات: ضواغط حلزونية (سكرو)، ترددية (مكبس)، وطاردة مركزية لمختلف الماركات العالمية بالرياض."
      : "Turnkey chiller compressor overhaul, semi-hermetic stator rewinding, mechanical rebuild, and nitrogen pressure testing for screw, reciprocating, and centrifugal compressors in Riyadh.",
  };
}

export default async function ChillerCompressorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const compressorSpecRows: SpecRow[] = [
    {
      equipment: isAr ? "الضواغط الحلزونية (Screw Compressors)" : "Industrial Screw Compressors (Semi-Hermetic)",
      scope: isAr ? "إعادة لف الستاتور المقاوم لغاز التبريد + ضبط خلوص الحلزون وتبديل كراسي التحميل" : "Refrigerant-Resistant Stator Rewind, Rotor Clearance & Bearing Rebuild",
      specs: "40 TR to 600 TR / Multi-Refrigerant (R134a, R410A, R407C, Ammonia)",
      testing: "Nitrogen Pressure Decay (35 Bar), Surge Comparison, Hipot 2.5kV",
      notes: isAr ? "شيلرات المستشفيات والمصانع والمباني الكبرى" : "Hospital & commercial central chiller plants",
    },
    {
      equipment: isAr ? "الضواغط الترددية (Reciprocating / Piston Compressors)" : "Reciprocating Piston Compressors",
      scope: isAr ? "صيانة وتجديد المكابس وألواح الصمامات وعمود المرفق وإعادة لف الستاتور" : "Piston, Valve Plate, Crankshaft Overhaul & Internal Stator Rewind",
      specs: "10 TR to 180 TR / Semi-Hermetic & Open Drive",
      testing: "Cylinder Compression Check, Megger Moisture Test, Vacuum Decay",
      notes: isAr ? "مستودعات التبريد والتجميد الغذائي" : "Cold storage refrigeration & food freezing facilities",
    },
    {
      equipment: isAr ? "الضواغط الطاردة المركزية (Centrifugal Compressors)" : "Centrifugal High-Capacity Chiller Compressors",
      scope: isAr ? "موازنة دقيقة للمراوح (Impellers)، فحص المحاور، وإعادة لف محرك الدفع" : "Impeller Dynamic Balancing, Shaft Runout Inspection & Drive Stator Rewind",
      specs: "250 TR to 2,500+ TR / Low & Medium Voltage",
      testing: "Vibration Spectrum FFT Analysis, Helium Leak Detection, Oil Analysis",
      notes: isAr ? "محطات التبريد المركزي للمناطق (District Cooling)" : "District cooling plants & massive infrastructure complexes",
    },
    {
      equipment: isAr ? "أجهزة تبديل الزيت وموانع التسرب (Seals & Oil Systems)" : "Compressor Shaft Seals & Lubrication Circuit Overhaul",
      scope: isAr ? "استبدال موانع التسرب الميكانيكية، تنظيف دورة التزييت، ومعايرة صمام الضغط" : "Mechanical Face Seal Replacement, Oil Pump Inspection & Relief Valve Calibration",
      specs: "All Major OEM Standards (Bitzer, Carrier, York, Trane, Frick)",
      testing: "Oil Acidity & Dielectric Breakdown Test, Hydrostatic Pressure Test",
      notes: isAr ? "منع تسريب وسيط التبريد وحماية المحرك" : "Zero-leakage refrigerant integrity guarantee",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        sectionNumber="SERVICE 02 // CHILLER COMPRESSORS"
        badge={isAr ? "ضواغط حلزونية وترددية وطاردة مركزية" : "SCREW / RECIPROCATING / CENTRIFUGAL"}
        title={isAr ? "صيانة وإعادة لف ضواغط التبريد الصناعية" : "Chiller Compressor Overhaul & Stator Rewinding"}
        description={isAr
          ? "حلول هندسية شاملة لضواغط التبريد والتكييف المركزي: عمرة ميكانيكية، إعادة لف الستاتور الداخلي بمواد مقاومة للوسائط، واختبارات الضغط بالنيتروجين."
          : "Turnkey electro-mechanical restoration for industrial chillers: in-house stator rewinding with refrigerant-grade enamel, precision mechanical rebuilding, and pressure decay certification."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "الخدمات" : "Services", href: "/services" },
          { label: isAr ? "ضواغط التبريد" : "Chiller Compressors" },
        ]}
      />

      {/* 1. Overview & Mechanical Rigor */}
      <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 Cols */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="CAPABILITY SCOPE 02"
                title={isAr ? "حلول متكاملة لضواغط التبريد بمختلف علاماتها التجارية" : "Engineered Overhaul for Critical Chiller Plant Compressors"}
              />

              <div className="space-y-4 font-body text-charcoal-600 dark:text-charcoal-300 leading-relaxed text-sm sm:text-base">
                <p>
                  {isAr
                    ? "يتطلب لف وصيانة ضواغط التبريد شبه المحكمة (Semi-Hermetic) معايير هندسية متقدمة للغاية، نظراً لأن ملفات الستاتور تعمل في بيئة مغلقة ملامسة مباشرة لوسائط التبريد (غاز الفريون) وزيوت التزييت الاصطناعية. في تارفا، نستخدم أسلاك نحاسية مطلية بطبقات مزدوجة من مادة البولي أميد-إيميد المقاومة للتآكل الكيميائي وورنيشات عازلة معتمدة تتحمل وسائط التبريد دون تحلل."
                    : "Semi-hermetic and hermetic chiller compressors require extreme rewinding discipline because stator windings operate in direct contact with refrigerants and synthetic refrigeration oils. At Tarfa, we employ double-coated polyamide-imide magnet wire and specialized refrigeration-grade baking varnishes that will not extract, crack, or contaminate the cooling circuit."}
                </p>
                <p>
                  {isAr
                    ? "تشمل حلولنا تفكيك الضاغط بالكامل، فحص خلوص الدوارات الحلزونية (Rotors)، تبديل كراسي التحميل الدقيقة (Bearings)، فحص ألواح الصمامات وموانع التسرب، ثم إعادة تجميع المعدة وإجراء اختبارات تسريب النيتروجين الجاف تحت ضغوط تصل إلى 35 بار."
                    : "Our turnkey service encompasses complete mechanical teardown, screw rotor clearance verification, precision angular-contact bearing replacement, valve plate reconditioning, and stringent nitrogen pressure decay testing up to 35 bar to guarantee hermetic integrity."}
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "فحص الضغط" : "PRESSURE TEST"}</span>
                  <span className="font-bold text-brand-red">35 Bar Dry Nitrogen</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "توافق الوسائط" : "REFRIGERANTS"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">R134a / R410A / R407C</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "الماركات" : "OEM SCOPE"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">All Major Brands</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Chiller Screw Compressor Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[420px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-950 overflow-hidden industrial-cut">
                <Image
                  src="/images/services/chiller-compressor-screw.png"
                  alt="Industrial screw chiller compressor undergoing overhaul in Tarfa workshop"
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[10%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 font-mono text-xs text-white backdrop-blur-xs">
                  <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                    CHILLER OVERHAUL BAY // AL SINA'IYAH
                  </span>
                  <span className="text-charcoal-300 text-xs">
                    {isAr
                      ? "فحص وتجديد ضواغط الشيلرات الحلزونية وضبط خلوص الحلزون الداخلي"
                      : "Screw compressor disassembly, bearing replacement and stator alignment"}
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
            eyebrow="TECHNICAL MATRIX 02"
            title={isAr ? "جدول مواصفات صيانة ضواغط التبريد" : "Chiller Compressor Maintenance & Rewinding Specifications"}
            description={isAr
              ? "تفاصيل فئات الضواغط ونطاقات التبريد (بالطن التبريدي) وبروتوكولات الفحص الهيدروستاتيكي والكهربائي."
              : "Comprehensive specifications covering refrigeration tonnages, rewind insulation grades, and pressure certification standards."}
            withRule
          />

          <SpecTable
            title={isAr ? "مصفوفة المواصفات الفنية لضواغط التبريد الصناعية" : "Chiller Compressor Technical Overhaul Matrix"}
            caption="ASHRAE // AHRI // ISO 1940 COMPLIANT"
            headers={{
              equipment: isAr ? "نوع ضاغط التبريد" : "Compressor Classification",
              scope: isAr ? "نطاق العمرة وإعادة اللف" : "Reconditioning & Stator Rewind Scope",
              specs: isAr ? "السعة ونطاق وسيط التبريد" : "Capacity (TR) & Refrigerant Range",
              testing: isAr ? "معايير الاختبارات وضمان الجودة" : "Leakage & Dielectric Compliance",
            }}
            rows={compressorSpecRows}
          />
        </div>
      </section>

      {/* 3. Action Banner */}
      <section className="py-12 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              HVAC & REFRIGERATION OVERHAUL
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في طلب عمرة عاجلة لضاغط شيلر في منشأتك؟" : "Urgent Chiller Compressor Breakdown or Planned Overhaul?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب فحص ضاغط التبريد" : "Request Compressor Quote"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

