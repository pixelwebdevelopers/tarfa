import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SpecTable, SpecRow } from "@/components/SpecTable";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, Zap, ShieldCheck, Flame, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "صيانة وإعادة لف المولدات والمحولات الكهربائية"
      : "Generators, Alternators & Transformers Maintenance & Rewinding",
    description: isAr
      ? "خدمات متخصصة في صيانة المولدات الصناعية والمولدات الفرعية، وإعادة لف ملفات محولات الرفع والخفض، وفحص واستبدال الزيت العازل بالرياض."
      : "Industrial alternator rewinding, generator set maintenance, step-up/step-down transformer coil rewinding, and dielectric oil breakdown testing in Riyadh.",
  };
}

export default async function GeneratorsTransformersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const genTransSpecRows: SpecRow[] = [
    {
      equipment: isAr ? "مولدات الديزل الصناعية والمولدات الكبرى" : "Industrial Diesel Generators (Prime & Standby)",
      scope: isAr ? "إعادة لف العضو الساكن (Stator) وملفات التغذية الإضافية (Exciter Winding)" : "Main Stator Rewinding, Exciter Stator & Rotating Rectifier Assembly Rebuild",
      specs: "50 kVA to 3,500+ kVA / Low & Medium Voltage",
      testing: "Polarization Index (PI), Megger 5kV, AVR Step Load Voltage Stability",
      notes: isAr ? "مولدات الطوارئ للمستشفيات ومواقع البناء" : "Emergency backup for healthcare and civil sites",
    },
    {
      equipment: isAr ? "المولدات الفرعية ومولدات الجهد العالي (Heavy Alternators)" : "Heavy-Duty Industrial Alternators",
      scope: isAr ? "إعادة لف الملفات الدوارة والموازنة الديناميكية وفحص المحامل المعزولة" : "Rotor Field Coil Rewind, Dynamic Balancing & Insulated Bearing Installation",
      specs: "Continuous Duty / Up to 13.8 kV",
      testing: "Dynamic Rotor Balancing (ISO 1940), Winding Resistance Balance, Hipot",
      notes: isAr ? "محطات توليد الطاقة والمشاريع الصناعية" : "Continuous power generation & co-gen facilities",
    },
    {
      equipment: isAr ? "محولات التوزيع (خفض ورفع - Step-Up & Step-Down)" : "Distribution Transformers (Step-Up & Step-Down)",
      scope: isAr ? "إعادة لف ملفات الجهد العالي والمنخفض (Coils) وتغيير موانع التسرب (Gaskets)" : "HV & LV Copper Coil Rewinding, Core Re-Clamping & Gasket Seal Replacement",
      specs: "100 kVA to 5,000 kVA / Up to 33 kV Class",
      testing: "Transformer Turns Ratio (TTR), Winding Resistance, Dielectric Loss (Tan Delta)",
      notes: isAr ? "شبكات توزيع الكهرباء بالمصانع والمزارع" : "Industrial substations and factory distribution grids",
    },
    {
      equipment: isAr ? "فحص واستبدال زيت المحولات (Transformer Dielectric Oil)" : "Transformer Dielectric Oil Testing, Dehydration & Replacement",
      scope: isAr ? "ترشيح الزيت وسحب الرطوبة والغازات الذائبة أو الاستبدال بزيت جديد نقي" : "Vacuum Oil Filtration, Dehydration, Sludge Cleaning & Fresh Mineral Oil Refill",
      specs: "Mineral Insulating Oil (IEC 60296 Standard)",
      testing: "Dielectric Breakdown Voltage (BDV > 60kV), Karl Fischer Moisture, Acidity",
      notes: isAr ? "حماية المحول من الانهيار الكهربائي الداخلي" : "Critical dielectric arc prevention standard",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        title={isAr ? "المولدات والمولدات الفرعية والمحولات الكهربائية" : "Generators, Alternators & Transformer Overhaul"}
        description={isAr
          ? "صيانة كهروميكانيكية متخصصة لمولدات الطاقة والمحولات: إعادة لف الملفات، تبديل وفحص الزيوت العازلة، ومعايرة منظمات الجهد."
          : "Turnkey electrical maintenance, stator and exciter rewinding for heavy alternators, step-up/down transformer coil restoration, and dielectric oil testing."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "الخدمات" : "Services", href: "/services" },
          { label: isAr ? "المولدات والمحولات" : "Generators & Transformers" },
        ]}
      />

      {/* 1. Overview */}
      <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                title={isAr ? "جاهزية واستقرار مصادر الطاقة ومحطات التوزيع" : "Ensuring Uninterrupted Electrical Power Distribution"}
              />

              <div className="space-y-4 font-body text-charcoal-700 dark:text-charcoal-200 leading-relaxed text-base sm:text-lg">
                <p>
                  {isAr
                    ? "تعتمد موثوقية شبكات الطاقة في المصانع على السلامة العازلة لمحولات التوزيع والمولدات الاحتياطية. توفر ورشة تارفا خدمات الفحص الكهروميكانيكي المتكامل للمولدات، بما في ذلك إعادة لف ملفات العضو الثابت، ملفات الأقطاب الدوارة، وملفات المولد المساعد (Exciter)، مع استبدال قناطر التوحيد الدوارة (Rotating Diodes)."
                    : "Power stability across industrial substations relies on the insulation health of transformers and standby generators. Tarfa delivers specialized diagnostics for heavy alternators, including main stator rewinding, exciter field coil reconditioning, and rotating diode bridge inspection."}
                </p>
                <p>
                  {isAr
                    ? "بالنسبة لمحولات التوزيع (رفع وخفض)، نقوم بإعادة لف الملفات النحاسية بالكامل، إعادة إحكام ربط شرائح القلب الحديدي، وفحص عزل الزيت بجهاز قياس جهد الانهيار (Dielectric Breakdown Tester)، وإجراء ترشيح الزيت لسحب الرطوبة والشوائب، أو استبداله بالكامل بزيوت مطابقة للمواصفات القياسية العالمية."
                    : "For step-up and step-down distribution transformers, our technical team executes precision coil rewinding, core re-tightening, and dielectric oil breakdown testing (BDV > 60kV). We provide on-site oil sampling as well as full workshop oil dehydration and fresh mineral oil replenishment."}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "فحص الزيت" : "OIL BREAKDOWN"}</span>
                  <span className="font-bold text-brand-red">BDV &gt; 60 kV</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "قدرة المولدات" : "GENERATORS"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">Up to 3,500+ kVA</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "فئات الجهد" : "VOLTAGE CLASS"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">Up to 33 kV Transformers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[420px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-950 overflow-hidden industrial-cut">
                <Image
                  src="/images/services/generators-alternators.png"
                  alt="Industrial generator alternator and transformer core rewinding in Tarfa workshop"
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[10%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 font-mono text-xs text-white backdrop-blur-xs">
                  <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                    TRANSFORMER & ALTERNATOR BAY
                  </span>
                  <span className="text-charcoal-300 text-xs">
                    {isAr
                      ? "إعادة لف ملفات المحولات واستبدال الزيت العازل وفحص الانهيار الكهربائي"
                      : "Transformer coil rewinding and dielectric oil breakdown testing"}
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
            title={isAr ? "جدول مواصفات صيانة المولدات والمحولات" : "Generators, Alternators & Transformers Technical Matrix"}
            description={isAr
              ? "مصفوفة هندسية توضح نطاقات القدرة للمولدات والمحولات وفحوصات الزيت العازل ومعايير اختبار النبضة ونسب التحويل."
              : "Specifications detailing generator output envelopes, transformer turns ratios, and dielectric oil testing protocols."}
            withRule
          />

          <SpecTable
            title={isAr ? "مصفوفة المواصفات الفنية للمولدات والمحولات الكهربائية" : "Power Generation & Transformer Engineering Matrix"}
            caption="IEEE C57 · IEC 60076 · IEC 60296 COMPLIANT"
            headers={{
              equipment: isAr ? "المعدة وفئة التشغيل" : "Equipment Topology",
              scope: isAr ? "نطاق الصيانة وإعادة اللف" : "Rewind & Refurbishment Scope",
              specs: isAr ? "القدرة والجهد ونوع الزيت" : "kVA Rating & Voltage Class",
              testing: isAr ? "معايير الاختبارات وضمان الجودة" : "Dielectric & Diagnostic Compliance",
            }}
            rows={genTransSpecRows}
          />
        </div>
      </section>

      {/* 3. Action Banner */}
      <section className="py-14 bg-[#0a0c14] text-white border-t border-charcoal-800 border-b-2 border-brand-red/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              TRANSFORMER OVERHAUL & OIL ANALYSIS
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في فحص زيت المحول أو صيانة عاجلة لمولد كهربائي؟" : "Require Transformer Coil Rewind or Dielectric Oil Breakdown Test?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب فحص المولد أو المحول" : "Request Generator/Transformer Quote"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

