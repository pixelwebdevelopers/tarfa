import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SpecTable, SpecRow } from "@/components/SpecTable";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, Cpu, ShieldCheck, Wrench, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "إعادة لف وصيانة المحركات الكهربائية (جهد منخفض وعالي)"
      : "Electric Motor Rewinding & Overhaul (Low & High Voltage)",
    description: isAr
      ? "خدمات متخصصة في إعادة لف المحركات الكهربائية بالسلك الدائري والمستطيل (الشريطي)، محركات التيار المتردد والمستمر، محركات حلقات الانزلاق والسيرفو بالرياض."
      : "Industrial electric motor rewinding and mechanical repair: AC/DC motors, synchronous, slip-ring, strip wire rewinding up to 13.8kV in Riyadh, Saudi Arabia.",
  };
}

export default async function MotorsServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const motorSpecRows: SpecRow[] = [
    {
      equipment: isAr ? "محركات التيار المتردد الحثية (Three-Phase Induction)" : "Three-Phase AC Induction Motors",
      scope: isAr ? "إعادة لف بالأسلاك الدائرية والشريطية + عزل الفئة H" : "Round & Strip Wire Stator Rewind + Class H Insulation",
      specs: "0.75 kW to 3,500 kW / 400V - 13.8 kV",
      testing: "Surge Comparison, Megger 5kV, Core Loss, ISO 1940 Balancing",
      notes: isAr ? "محركات تشغيل المضخات والكسارات والمنافيخ" : "Pumps, crushers, and fan drives",
    },
    {
      equipment: isAr ? "المحركات التزامنية (Synchronous Motors)" : "Synchronous Industrial Motors",
      scope: isAr ? "إعادة لف ملفات العضو الثابت والأقطاب الدوارة" : "Stator & Salient Rotor Pole Coil Rewinding",
      specs: "Up to 5,000 kVA / High Voltage",
      testing: "Polarization Index (PI), Dielectric Discharge, Air Gap Alignment",
      notes: isAr ? "مصانع الإسمنت وضواغط الغاز الكبرى" : "Cement kilns & gas compression drives",
    },
    {
      equipment: isAr ? "محركات التيار المستمر (DC Shunt, Series, Compound)" : "DC Industrial Motors (Shunt, Series, Compound)",
      scope: isAr ? "إعادة لف الروتور والملفات الميدانية وصراطة المبدل (Commutator)" : "Armature Rewind, Field Coils & Commutator Undercutting",
      specs: "All Frame Sizes / 110V - 750V DC",
      testing: "Bar-to-Bar Resistance, High-Pot, Neutral Axis Verification",
      notes: isAr ? "روافع الصلب وخطوط الدرفلة" : "Steel rolling mills & heavy crane hoists",
    },
    {
      equipment: isAr ? "محركات حلقات الانزلاق (Slip Ring / Wound Rotor)" : "Slip Ring / Wound Rotor Motors",
      scope: isAr ? "إعادة لف الروتور الملفوف وتجديد حلقات الانزلاق وفرش الكربون" : "Rotor Rewinding, Slip Ring Trueing & Brush Assembly Refurbishment",
      specs: "Heavy Torque Mill Drives / 3.3 kV - 6.6 kV",
      testing: "Rotor Impedance Balance, Insulation Resistance, Phase Angle",
      notes: isAr ? "مطاحن الأسمنت ومصاعد المناجم" : "Ball mills and heavy start-duty machinery",
    },
    {
      equipment: isAr ? "محركات السيرفو والمحركات التخصصية (Servo & BLDC)" : "Servo, Stepper & Brushless DC (BLDC) Motors",
      scope: isAr ? "إعادة لف دقيق ومعايرة مجسات التغذية الراجعة (Resolvers/Encoders)" : "Precision Micro-Winding & Feedback Sensor Re-Alignment",
      specs: "Precision Automation Class",
      testing: "Waveform Symmetry, Back-EMF Balance, Thermal Probe Verification",
      notes: isAr ? "خطوط التعبئة والتغليف والروبوتات الصناعية" : "Automated bottling & robotic CNC axes",
    },
    {
      equipment: isAr ? "محركات مراوح المكثفات (Condenser Fan Motors)" : "Condenser Fan & Cooling Tower Motors",
      scope: isAr ? "إعادة لف مقاوم للرطوبة وتغيير كراسي التحميل مع العزل المائي" : "Moisture-Resistant Rewind, Epoxy Dip & Dual Lip Seal Installation",
      specs: "Continuous Duty / IP55 - IP66",
      testing: "Megger Moisture Resistance, Runout & Static Load Testing",
      notes: isAr ? "أبراج التبريد ومكثفات الشيلرات" : "Industrial HVAC and chiller plants",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        title={isAr ? "إعادة لف وصيانة المحركات الكهربائية" : "Electric Motor Rewinding & Mechanical Overhaul"}
        description={isAr
          ? "إعادة لف متخصصة بالأسلاك الدائرية والشريطية لمحركات الجهد العالي والمنخفض، التيار المتردد والمستمر، محركات حلقات الانزلاق والسيرفو بالرياض."
          : "Turnkey stator and rotor rewinding, Class H vacuum pressure varnishing, and mechanical rehabilitation for low- and high-voltage AC/DC industrial motors."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "الخدمات" : "Services", href: "/services" },
          { label: isAr ? "المحركات الكهربائية" : "Motors" },
        ]}
      />

      {/* 1. Overview & Workshop Context */}
      <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 Cols */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                title={isAr ? "حيث يجد كل نوع من المحركات عناية هندسية فائقة" : "Where Every Motor Type Finds Expert Industrial Care"}
              />

              <div className="space-y-4 font-body text-charcoal-700 dark:text-charcoal-200 leading-relaxed text-base sm:text-lg">
                <p>
                  {isAr
                    ? "تمتلك ورشة تارفا بالرياض خبرة تمتد لأكثر من 40 عاماً في إعادة لف وصيانة كافة فئات المحركات الكهربائية. نبدأ بتسجيل بيانات لوحة الاسم (Nameplate) والفحص الساكن الشامل لتحديد سبب العطل الأصلي، سواء كان ناتجاً عن انهيار عزل الملفات، ارتفاع درجات الحرارة، عدم توازن الأطوار، أو تآكل كراسي التحميل."
                    : "Tarfa Equipment Maintenance provides over four decades of specialized stator rewinding and rotor overhaul for critical motor drives across Saudi Arabia. We handle both fractional horsepower units and massive multi-megawatt industrial stators operating on voltages up to 13.8 kV."}
                </p>
                <p>
                  {isAr
                    ? "نستخدم أسلاك نحاس نقية 100% معزولة بمواد حرارية مطابقة للفئتين F و H، ونوفر اللف بالسلك الدائري (Round Wire) والسلك الشريطي (Strip Wire) وفق المواصفات القياسية للمصنّع الأصلي (OEM)، متبوعاً بعمليات الغمر بالورنيش والتحميص الحراري والموازنة الديناميكية للروتور."
                    : "Our facility utilizes premium electrolytic copper conductors with Class H and Class F insulation. Stators are wound using round or rectangular strip wire according to OEM designs, followed by controlled varnish baking and dynamic rotor balancing to eliminate vibration."}
                </p>
              </div>

              {/* Technical badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "نطاق الجهد" : "VOLTAGE"}</span>
                  <span className="font-bold text-brand-red">Up to 13.8 kV</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "فئة العزل" : "INSULATION"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">Class F & Class H</span>
                </div>
                <div className="p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800">
                  <span className="text-[10px] uppercase text-charcoal-400 block">{isAr ? "الموازنة" : "BALANCING"}</span>
                  <span className="font-bold text-charcoal-900 dark:text-white">ISO 1940 G2.5</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Authentic Motors Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[420px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-950 overflow-hidden industrial-cut">
                <Image
                  src="/images/services/motors-lineup.png"
                  alt="Heavy-duty electric motor stators in Tarfa workshop"
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[10%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 font-mono text-xs text-white backdrop-blur-xs">
                  <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                    FACILITY REWINDING BAY
                  </span>
                  <span className="text-charcoal-300 text-xs">
                    {isAr
                      ? "ملفات الستاتور النحاسية وتثبيت الأوتاد العازلة قبل مرحلة الورنيش"
                      : "Stator slot cell insulation, coil insertion, and phase separator fitting"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Spec Table */}
      <section className="py-16 lg:py-20 bg-canvas-warm border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            title={isAr ? "جدول مواصفات وفئات المحركات الكهربائية" : "Electric Motor Specifications & Diagnostic Protocol"}
            description={isAr
              ? "مصفوفة تفصيلية لنطاقات القدرة، أساليب إعادة اللف، واختبارات الجودة لجميع أنواع المحركات المعتمدة بالورشة."
              : "Detailed matrix of motor topologies, rewind scopes, operating parameters, and testing regimens performed at Tarfa."}
            withRule
          />

          <SpecTable
            title={isAr ? "مصفوفة المواصفات الهندسية للمحركات الكهربائية" : "Electric Motors Engineering & Testing Matrix"}
            caption="IEC 60034 · IEEE 43 · ISO 1940 COMPLIANT"
            headers={{
              equipment: isAr ? "نوع المحرك والفئة" : "Motor Topology & Class",
              scope: isAr ? "نطاق العمرة وإعادة اللف" : "Rewinding & Repair Scope",
              specs: isAr ? "نطاق القدرة والجهد" : "Power Rating & Voltage Range",
              testing: isAr ? "معايير الاختبارات وضمان الجودة" : "Diagnostic Testing Protocols",
            }}
            rows={motorSpecRows}
          />
        </div>
      </section>

      {/* 3. Diagnostic & Rewinding Lifecycle */}
      <section className="py-16 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            title={isAr ? "مراحل الفحص وضمان جودة لف المحرك" : "Quality Assurance & Testing Stages"}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs text-start">
            <div className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 space-y-2">
              <span className="text-brand-red font-bold text-xs uppercase block">PRE-TEST INSPECTION</span>
              <h4 className="font-heading font-bold text-sm text-charcoal-900 dark:text-white">
                {isAr ? "الفحص الأولي للقلب" : "Loop Flux & Stator Core Test"}
              </h4>
              <p className="font-body text-charcoal-600 dark:text-charcoal-400">
                {isAr ? "قياس خسائر القلب الحديدي والحرارة المتولدة قبل بدء عملية اللف." : "Verifies interlaminar insulation and core loss before winding removal."}
              </p>
            </div>

            <div className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 space-y-2">
              <span className="text-brand-red font-bold text-xs uppercase block">IN-PROCESS TESTING</span>
              <h4 className="font-heading font-bold text-sm text-charcoal-900 dark:text-white">
                {isAr ? "فحص مقارنة النبضة (Surge)" : "Surge Comparison Testing"}
              </h4>
              <p className="font-body text-charcoal-600 dark:text-charcoal-400">
                {isAr ? "فحص قصر اللفات الداخلية بين كل سلك وآخر في الطور الواحد." : "Detects turn-to-turn insulation weakness before varnishing."}
              </p>
            </div>

            <div className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 space-y-2">
              <span className="text-brand-red font-bold text-xs uppercase block">ROTOR BALANCING</span>
              <h4 className="font-heading font-bold text-sm text-charcoal-900 dark:text-white">
                {isAr ? "موازنة الروتور الحركية" : "Dynamic Rotor Balancing"}
              </h4>
              <p className="font-body text-charcoal-600 dark:text-charcoal-400">
                {isAr ? "موازنة ديناميكية على ماكينة إلكترونية وفق درجة G2.5." : "Calibrated to ISO 1940 G2.5 tolerances to eliminate vibration."}
              </p>
            </div>

            <div className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 space-y-2">
              <span className="text-brand-red font-bold text-xs uppercase block">FINAL RUN & DISPATCH</span>
              <h4 className="font-heading font-bold text-sm text-charcoal-900 dark:text-white">
                {isAr ? "التشغيل التجريبي الكامل" : "No-Load Run Test & Report"}
              </h4>
              <p className="font-body text-charcoal-600 dark:text-charcoal-400">
                {isAr ? "تشغيل المحرك بدون حمل وتسجيل التيارات والاهتزازات في تقرير فني." : "Full voltage running test logging current, temperature, and vibration."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="py-14 bg-[#0a0c14] text-white border-t border-charcoal-800 border-b-2 border-brand-red/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              FAST TURNAROUND ESTIMATE
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في تقييم عطل محرك أو طلب عرض سعر إعادة لف؟" : "Facing Motor Burnout or Planning Scheduled Rewind?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب عرض سعر لف المحرك" : "Request Motor Rewind Quote"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

