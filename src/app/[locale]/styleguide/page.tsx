import React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { SpecTable, SpecRow } from "@/components/SpecTable";
import {
  InputField,
  SelectField,
  TextareaField,
  FileUploadField,
} from "@/components/FormFields";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Sliders,
  Maximize2,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "دليل الهوية الهندسية" : "Engineering Style Guide",
  };
}

export default async function StyleGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <StyleGuideContent locale={locale} />;
}

function StyleGuideContent({ locale }: { locale: string }) {
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const sampleSpecRows: SpecRow[] = [
    {
      equipment: isAr ? "محرك تيار متردد حثي قفص سنجابي" : "AC Squirrel Cage Induction Motor",
      scope: isAr ? "إعادة لف كامل بالأسلاك الدائرية + عوازل الفئة H" : "Complete Round Wire Rewind + Class H Insulation",
      specs: "250 kW / 3.3 kV / 1480 RPM",
      testing: "Surge Test, Megger 5kV, Vibration Analysis",
      notes: "Heavy Industry Duty",
    },
    {
      equipment: isAr ? "ضاغط تبريد شيلر حلزوني (سكرو)" : "Chiller Semi-Hermetic Screw Compressor",
      scope: isAr ? "إعادة لف الستاتور الداخلي + تبديل موانع التسرب" : "Internal Stator Rewind + Mechanical Seal Overhaul",
      specs: "120 TR / 400V / 50 Hz",
      testing: "Nitrogen Pressure Decay, Dielectric Breakdown",
      notes: "HVAC Facility Grade",
    },
    {
      equipment: isAr ? "شرائح قلب الستاتور (Core Lamination)" : "Stator Core Lamination Assembly",
      scope: isAr ? "فحص التدفق الحلقي + تنظيف وإعادة دهان الورنيش" : "Loop Flux Test + Cleaning & Re-Varnishing",
      specs: "Up to 2.2m Stator Outer Diameter",
      testing: "Thermal Camera Hot Spot Detection, Iron Loss",
      notes: "High-Risk Fault Prevention",
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-canvas-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Style Guide Banner */}
        <div className="border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 end-0 w-32 h-32 bg-brand-red/5 -rotate-45 pointer-events-none" />
          <div className="space-y-2 text-start">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-red" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                TARFA DESIGN SYSTEM // SPECIFICATION V1.0
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-charcoal-950 dark:text-white tracking-tight">
              {isAr ? "دليل الهوية الهندسية والمكونات البرمجية" : "Engineering Style Guide & Design Tokens"}
            </h1>
            <p className="font-body text-sm md:text-base text-charcoal-600 dark:text-charcoal-300 max-w-3xl leading-relaxed">
              {isAr
                ? "توثيق رسمي للمعايير البصرية، رموز الألوان المستخرجة من هوية 1983، نمط القطع المائل (25 درجة)، والخطوط العربية والإنجليزية المعتمدة لتطوير موقع تارفا الصناعي."
                : "Official specifications for Tarfa Equipment Maintenance: authentic 1983 brand tokens, the signature 25° diagonal chamfer cut, industrial grotesque typography, and accessible UI components."}
            </p>
          </div>
        </div>

        {/* 1. Color Palette Tokens */}
        <section className="space-y-6 text-start">
          <SectionHeading
            eyebrow="TOKEN SPECIFICATION 01"
            title={isAr ? "لوحة الألوان الهندسية والرموز" : "Brand Palette & Color Tokens"}
            description={isAr
              ? "اللون الأحمر هو لون العلامة الأصلي ويستخدم بحذر (5-8% من المساحة). الألوان الداكنة تعكس حديد الستاتور وأرضيات الورشة."
              : "The primary red is an authoritative industrial vermilion used with restraint (5-8% of surface area). The dark neutrals represent stator iron and precision workshop machinery."}
            withRule
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Brand Red */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-brand-red w-full industrial-cut-badge relative flex items-end p-2">
                <span className="text-[10px] font-mono text-white font-bold bg-black/40 px-1.5 py-0.5">
                  #DC2324
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Brand Vermilion Red
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-brand-red
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  Primary CTAs, active indicators, diagonal chamfers, eyebrows.
                </p>
              </div>
            </div>

            {/* Red Hover */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-brand-red-hover w-full industrial-cut-badge relative flex items-end p-2">
                <span className="text-[10px] font-mono text-white font-bold bg-black/40 px-1.5 py-0.5">
                  #B81B1C
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Red Interactive Hover
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-brand-red-hover
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  Hover and focus states for primary red actions.
                </p>
              </div>
            </div>

            {/* Charcoal 950 */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-charcoal-950 w-full relative flex items-end p-2">
                <span className="text-[10px] font-mono text-white font-bold bg-white/20 px-1.5 py-0.5">
                  #090C10
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Deep Stator Ground
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-charcoal-950
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  Top utility bar, high-gravity footer background.
                </p>
              </div>
            </div>

            {/* Charcoal 900 */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-charcoal-900 w-full relative flex items-end p-2">
                <span className="text-[10px] font-mono text-white font-bold bg-white/20 px-1.5 py-0.5">
                  #0E1218
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Industrial Dark Ground
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-charcoal-900
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  Dark section panels (Core Maintenance mosaic, header).
                </p>
              </div>
            </div>

            {/* Charcoal 800 */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-charcoal-800 w-full relative flex items-end p-2">
                <span className="text-[10px] font-mono text-white font-bold bg-white/20 px-1.5 py-0.5">
                  #161C24
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Elevated Machine Surface
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-charcoal-800
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  Cards on dark backgrounds, secondary buttons.
                </p>
              </div>
            </div>

            {/* Canvas Warm */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-canvas-warm border border-charcoal-200 w-full relative flex items-end p-2">
                <span className="text-[10px] font-mono text-charcoal-800 font-bold bg-white/80 px-1.5 py-0.5">
                  #F8F9FA
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Warm Technical Canvas
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-canvas-warm
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  Default page background in light mode.
                </p>
              </div>
            </div>

            {/* Hairline Border */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-canvas-border border border-charcoal-200 w-full relative flex items-end p-2">
                <span className="text-[10px] font-mono text-charcoal-800 font-bold bg-white/80 px-1.5 py-0.5">
                  #E2E5E9
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Hairline Technical Border
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-border-hairline
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  1px component borders, table dividers, grid lines.
                </p>
              </div>
            </div>

            {/* Operational Green */}
            <div className="border border-charcoal-200 bg-white p-4 space-y-3">
              <div className="h-20 bg-industrial-green w-full relative flex items-end p-2">
                <span className="text-[10px] font-mono text-white font-bold bg-black/40 px-1.5 py-0.5">
                  #059669
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm block text-charcoal-900">
                  Compliance / Test Passed
                </span>
                <span className="font-mono text-xs text-charcoal-500 block">
                  --color-industrial-green
                </span>
                <p className="text-xs text-charcoal-400 mt-1">
                  Static and dynamic testing success flags.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section className="space-y-6 text-start">
          <SectionHeading
            eyebrow="TOKEN SPECIFICATION 02"
            title={isAr ? "مقياس الخطوط والطباعة الهندسية" : "Typography Hierarchy"}
            description={isAr
              ? "خط العناوين الإنجليزي هو Barlow، والخط العربي هو IBM Plex Sans Arabic. خط الأرقام والمواصفات هو JetBrains Mono."
              : "Heading face: Barlow (Grotesque). Arabic face: IBM Plex Sans Arabic (increased line height, zero letter-spacing). Monospace: JetBrains Mono."}
            withRule
          />

          <div className="border border-charcoal-200 bg-white p-6 md:p-8 space-y-8 divide-y divide-charcoal-100">
            {/* Display / H1 */}
            <div className="pt-2">
              <span className="font-mono text-xs text-charcoal-400 block mb-1">
                DISPLAY HEADLINE // BARLOW 800 (EN) / IBM PLEX 700 (AR)
              </span>
              <p className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-charcoal-950">
                {isAr
                  ? "إعادة لف المحركات الكهربائية وضواغط التبريد الصناعية"
                  : "Precision Stator Rewinding & Dynamic Rotor Balancing"}
              </p>
            </div>

            {/* H2 */}
            <div className="pt-6">
              <span className="font-mono text-xs text-charcoal-400 block mb-1">
                SECTION HEADING H2 // 700 BOLD
              </span>
              <p className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-charcoal-900">
                {isAr
                  ? "معالجة شرائح الستاتور وفحص خسائر العزل المغناطيسي"
                  : "Stator Core Rehabilitation & High-Voltage Dielectric Testing"}
              </p>
            </div>

            {/* H3 */}
            <div className="pt-6">
              <span className="font-mono text-xs text-charcoal-400 block mb-1">
                SUBHEADING H3 // 600 SEMIBOLD
              </span>
              <p className="font-heading text-lg md:text-xl font-semibold text-charcoal-800">
                {isAr
                  ? "مضخات المياه متعددة المراحل والمحركات الغاطسة الصناعية"
                  : "Multi-Stage Centrifugal Pumps & Submersible Well Units"}
              </p>
            </div>

            {/* Mono / Eyebrow */}
            <div className="pt-6">
              <span className="font-mono text-xs text-charcoal-400 block mb-1">
                TECHNICAL SPEC LABEL // JETBRAINS MONO 600
              </span>
              <div className="flex flex-wrap gap-4 font-mono text-xs text-brand-red font-semibold">
                <span>SERVICE 01 // MOTORS</span>
                <span>VOLTAGE: 3.3 kV - 13.8 kV</span>
                <span>ISO 1940 G2.5 BALANCING</span>
                <span>EST. 1983 / RIYADH</span>
              </div>
            </div>

            {/* Body */}
            <div className="pt-6">
              <span className="font-mono text-xs text-charcoal-400 block mb-1">
                BODY PROSE // 400 REGULAR (LINE HEIGHT 1.75 AR)
              </span>
              <p className="font-body text-sm md:text-base text-charcoal-600 max-w-3xl leading-relaxed">
                {isAr
                  ? "تلتزم ورشة تارفا بأعلى المعايير الصناعية في اختيار أسلاك النحاس المعزولة بالفئة H والفئة F، وتمر كل عملية لف بمراحل الفحص الساكن لقياس مقاومة العزل، واختبار التدفق الحلقي للقلب، تليها معالجة التشريب بالورنيش العازل والتحميص الحراري داخل أفران محكمة، لضمان استقرار العزل ومقاومة الرطوبة والحرارة العالية."
                  : "Tarfa Equipment Maintenance adheres to rigorous electromechanical rewinding protocols using Class H and Class F copper wire. Every rewind passes thorough static diagnostic testing, loop flux examination, and vacuum pressure varnish impregnation followed by computer-controlled oven baking to guarantee long-term insulation integrity in severe ambient conditions."}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Signature Diagonal Chamfer Cut */}
        <section className="space-y-6 text-start">
          <SectionHeading
            eyebrow="SIGNATURE MOTIF 03"
            title={isAr ? "القطع المائل الهندسي (25 درجة)" : "The 25° Industrial Chamfer Cut"}
            description={isAr
              ? "مستخرج من تصميم الملف التعريفي الأصلي للشركة لعام 1983. يطبق على حواف الصور، الأزرار، والشرائط التعريفية، وينعكس تلقائياً في النسخة العربية (RTL)."
              : "Extracted from the 1983 company profile vector plates. Applied with restraint to hero masks, badges, and indicator rules. Automatically mirrors in RTL."}
            withRule
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LTR Visual Demonstration */}
            <div className="border border-charcoal-200 bg-white p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-charcoal-100 pb-2">
                <span className="font-mono text-xs font-semibold text-charcoal-700">
                  LTR CUT GEOMETRY (ENGLISH)
                </span>
                <span className="font-mono text-xs text-brand-red">
                  clip-path: polygon(...)
                </span>
              </div>
              <div className="relative h-48 bg-charcoal-900 industrial-cut-ltr overflow-hidden flex items-center justify-center p-6 text-white border border-charcoal-800">
                <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
                <div className="text-center z-10">
                  <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest block mb-1">
                    WORKSHOP IMAGE MASK
                  </span>
                  <span className="font-heading font-bold text-lg">
                    32px Slanted Chamfer at End Edge
                  </span>
                </div>
              </div>
              <p className="font-mono text-xs text-charcoal-500">
                polygon(0 0, 100% 0, calc(100% - 32px) 100%, 0 100%)
              </p>
            </div>

            {/* RTL Visual Demonstration */}
            <div className="border border-charcoal-200 bg-white p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-charcoal-100 pb-2">
                <span className="font-mono text-xs font-semibold text-charcoal-700">
                  RTL CUT GEOMETRY (ARABIC MIRRORED)
                </span>
                <span className="font-mono text-xs text-brand-red">
                  [dir=&quot;rtl&quot;] .industrial-cut
                </span>
              </div>
              <div className="relative h-48 bg-charcoal-900 industrial-cut-rtl overflow-hidden flex items-center justify-center p-6 text-white border border-charcoal-800">
                <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
                <div className="text-center z-10">
                  <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest block mb-1">
                    قناع الصورة الصناعي المعكوس
                  </span>
                  <span className="font-heading font-bold text-lg">
                    ميلان 32px من الجهة المعاكسة
                  </span>
                </div>
              </div>
              <p className="font-mono text-xs text-charcoal-500">
                polygon(32px 0, 100% 0, 100% 100%, 0 100%)
              </p>
            </div>
          </div>
        </section>

        {/* 4. Button Component Tokens */}
        <section className="space-y-6 text-start">
          <SectionHeading
            eyebrow="COMPONENT TOKENS 04"
            title={isAr ? "أزرار الإجراءات وحالات التفاعل" : "Button Variants & States"}
            description={isAr
              ? "حواف حادة 0-3px، بدون تدرجات لونية، خيارات القطع المائل، وحالات التحميل والتعطيل."
              : "0-3px hairline radii, zero gradients, optional chamfer edge, loading states, and accessible focus outlines."}
            withRule
          />

          <div className="border border-charcoal-200 bg-white p-6 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md">
                <span>Primary Solid</span>
              </Button>

              <Button variant="primary" size="md" withChamfer>
                <span>Primary + Chamfer Cut</span>
                <ArrowIcon className="w-4 h-4 ms-1" />
              </Button>

              <Button variant="secondary" size="md">
                <span>Secondary Charcoal</span>
              </Button>

              <Button variant="outline" size="md">
                <span>Outline Technical</span>
              </Button>

              <Button variant="primary" size="md" isLoading>
                <span>Processing</span>
              </Button>

              <Button variant="primary" size="md" disabled>
                <span>Disabled State</span>
              </Button>
            </div>

            <div className="pt-4 border-t border-charcoal-100 flex items-center gap-6">
              <span className="font-mono text-xs text-charcoal-400">SIZES:</span>
              <Button variant="primary" size="sm">
                Small (sm)
              </Button>
              <Button variant="primary" size="md">
                Medium (md)
              </Button>
              <Button variant="primary" size="lg">
                Large (lg)
              </Button>
            </div>
          </div>
        </section>

        {/* 5. Reusable Spec Table Demo */}
        <section className="space-y-6 text-start">
          <SectionHeading
            eyebrow="COMPONENT TOKENS 05"
            title={isAr ? "مكون جدول المواصفات الهندسية" : "Technical Spec Table Component"}
            description={isAr
              ? "مكون مخصص لصفحات الخدمات لعرض فئات المعدات، نطاقات الجهد، واختبارات الجودة بنسق هندسي منظم."
              : "Dedicated component for service pages to present machinery parameters, power/voltage envelopes, and compliance tests."}
            withRule
          />

          <SpecTable
            title={isAr ? "عينة جدول المواصفات الفنية للخدمات" : "Representative Service Engineering Spec Table"}
            caption="ISO 1940 // IEC 60034 COMPLIANCE"
            headers={{
              equipment: isAr ? "فئة المعدة الصناعية" : "Equipment Class",
              scope: isAr ? "نطاق العمرة وإعادة اللف" : "Rewind & Overhaul Scope",
              specs: isAr ? "القدرة ونطاق الجهد" : "Operating Rating & Envelope",
              testing: isAr ? "معايير الاختبارات وضمان الجودة" : "Quality & Test Standards",
            }}
            rows={sampleSpecRows}
          />
        </section>

        {/* 6. Form Fields Tokens */}
        <section className="space-y-6 text-start">
          <SectionHeading
            eyebrow="COMPONENT TOKENS 06"
            title={isAr ? "حقول النماذج والتحقق الفني" : "Form Input Fields & States"}
            description={isAr
              ? "تصميم تقني بحواف 1px واضحة، بدون ظلال ناعمة، مع حقل مخصص لرفع صورة لوحة الاسم (Nameplate)."
              : "1px crisp hairline borders, zero soft shadow, clear focus rings, and dedicated nameplate photo uploader."}
            withRule
          />

          <div className="border border-charcoal-200 bg-white p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <InputField
                id="demo-name"
                label={isAr ? "الاسم الكامل" : "Engineer / Plant Manager Name"}
                placeholder="Eng. Khalid Al-Otaibi"
                required
              />

              <InputField
                id="demo-company"
                label={isAr ? "الشركة / المصنع" : "Company / Industrial Entity"}
                placeholder="National Petrochemical Industries"
              />

              <InputField
                id="demo-voltage"
                label={isAr ? "القدرة والجهد (اختياري)" : "Motor Power / Voltage Rating"}
                placeholder="250 kW, 3.3 kV, 1480 RPM"
                hint="Helps engineer prepare diagnostic tooling prior to dispatch."
              />

              <SelectField
                id="demo-equipment"
                label={isAr ? "فئة المعدة" : "Equipment Category"}
                placeholder="Select equipment class"
                options={[
                  { value: "motor", label: "Electric Motor (AC / DC / High Voltage)" },
                  { value: "compressor", label: "Chiller Compressor (Screw / Centrifugal)" },
                  { value: "pump", label: "Water / Slurry Industrial Pump" },
                  { value: "core", label: "Stator Core Repair & Testing" },
                ]}
              />

              <div className="md:col-span-2">
                <TextareaField
                  id="demo-message"
                  label={isAr ? "وصف العطل ونطاق العمل" : "Failure Symptoms & Scope of Overhaul"}
                  placeholder="Describe failure circumstances (smoke, thermal trip, bearing seizure)..."
                />
              </div>

              <div className="md:col-span-2">
                <FileUploadField
                  id="demo-file"
                  label={isAr ? "صورة لوحة الاسم (Nameplate)" : "Equipment Nameplate Photo"}
                  hint="Clear photograph of the rating plate accelerates quotation response within 24h."
                />
              </div>

              <div className="md:col-span-2">
                <InputField
                  id="demo-error"
                  label={isAr ? "حقل يحتوي على خطأ (نموذج)" : "Field with Validation Error (State Demonstration)"}
                  defaultValue="invalid-email@"
                  error="Please enter a valid corporate email address."
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Language Switch Verification */}
        <section className="border border-charcoal-200 bg-charcoal-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-start">
            <span className="font-mono text-xs uppercase text-brand-red font-semibold">
              RTL & I18N VERIFICATION
            </span>
            <h3 className="font-heading font-bold text-xl">
              {isAr ? "تبديل اللغة السريع وحفظ المسار" : "Bilingual Route & State Preservation"}
            </h3>
            <p className="font-body text-xs text-charcoal-300 max-w-xl">
              {isAr
                ? "انقر على زر التبديل لتجربة التبديل الفوري بين العربية والإنجليزية دون فقدان الصفحة الحالية."
                : "Toggle the language switcher below to observe instant route switching between /en and /ar with mirrored logical properties."}
            </p>
          </div>
          <div>
            <LanguageToggle variant="dark" className="p-1 text-sm" />
          </div>
        </section>
      </div>
    </div>
  );
}

