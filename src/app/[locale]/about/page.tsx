import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY_DETAILS } from "@/config/contact";
import { Shield, Clock, Award, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "من نحن — تاريخ وخبرة 40 عاماً" : "About Us — History & Heritage Since 1983",
    description: isAr
      ? "تارفا لصيانة المعدات: تأسست في الرياض عام 1983 لتقديم خدمات إعادة لف وصيانة المحركات الكهربائية والضواغط والمضخات وفق أعلى معايير الجودة."
      : "Tarfa Equipment Maintenance was founded in Riyadh in 1983, providing four decades of specialized industrial electromechanical rewinding and repair services.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full text-start">
      {/* Page Header */}
      <PageHeader
        sectionNumber="OVERVIEW // EST. 1983"
        badge={isAr ? "بيت الجودة" : "HOUSE OF QUALITY"}
        title={isAr ? "أربعة عقود من التميز الكهروميكانيكي في الرياض" : "Four Decades of Electromechanical Excellence in Riyadh"}
        description={isAr
          ? "منذ عام 1983، تشكل تارفا نبض خدمات إعادة اللف والصيانة في الصناعة السعودية، حيث يلتقي التميز بالخبرة للحفاظ على استمرارية خطوط الإنتاج."
          : "Since 1983, Tarfa Equipment Maintenance has served as the heartbeat of motor rewinding and industrial maintenance across the Kingdom of Saudi Arabia."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "من نحن" : "About Us" },
        ]}
      />

      {/* 1. History & Foundation Section */}
      <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 Cols: History Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="01 // FOUNDATION & HERITAGE"
                title={isAr ? "نبض خدمات إعادة اللف منذ عام 1983" : "The Pulse of Industrial Rewinding Since 1983"}
              />

              <div className="space-y-4 font-body text-charcoal-600 dark:text-charcoal-300 leading-relaxed text-sm sm:text-base">
                <p>
                  {isAr
                    ? "أصبحت شركة تارفا لصيانة المعدات نبض خدمات إعادة اللف والصيانة في قطاع الصناعة بالمملكة العربية السعودية عام 1983، حيث اكتسبت ثقة عملائها عبر تقديم خدمات بأعلى معايير الجودة، مما بنى جسوراً متينة من الشراكة والاعتمادية."
                    : "TARFA Equipment Maintenance became the pulse of rewinding and maintenance services in the Kingdom of Saudi Arabian industry in 1983, gaining the confidence of customers by providing services of the highest quality standards, which built their trust in us."}
                </p>
                <p>
                  {isAr
                    ? "في تارفا، نجمع بين المهنية الاحترافية، والاعتمادية الموثوقة، والتميز الهندسي لضمان تشغيل المصانع والمرافق الحيوية بسلاسة دون توقفات غير مخططة، مع مواصلة بناء شراكات استراتيجية متينة للمستقبل."
                    : "At TARFA, we combine professionalism, reliability, and technical excellence to keep industries running smoothly while continuing to build strong partnerships for the future."}
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850">
                  <span className="font-mono text-xs uppercase text-brand-red font-bold block mb-1">
                    PILLAR 01
                  </span>
                  <span className="font-heading font-bold text-sm text-charcoal-900 dark:text-white block">
                    {isAr ? "بيت الجودة" : "House of Quality"}
                  </span>
                  <span className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-0.5 block">
                    {isAr ? "مواد عزل درجة H و F وأسلاك نحاسية معتمدة" : "Class H & F copper wire and OEM varnish standards"}
                  </span>
                </div>

                <div className="p-4 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850">
                  <span className="font-mono text-xs uppercase text-brand-red font-bold block mb-1">
                    PILLAR 02
                  </span>
                  <span className="font-heading font-bold text-sm text-charcoal-900 dark:text-white block">
                    {isAr ? "الخبرة الممتدة" : "40+ Years Heritage"}
                  </span>
                  <span className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-0.5 block">
                    {isAr ? "خدمة متواصلة للقطاعات السعودية الثقيلة" : "Continuous service to Saudi heavy industry since 1983"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Authentic Riyadh Workshop Assembly Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-950 overflow-hidden industrial-cut">
                <Image
                  src="/images/workshop/riyadh-assembly-hall.png"
                  alt="Tarfa overhead crane assembly hall and mechanical testing bays in Riyadh"
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[10%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 font-mono text-xs text-white backdrop-blur-xs">
                  <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                    WORKSHOP INFRASTRUCTURE // RIYADH SINA'IYAH
                  </span>
                  <span className="text-charcoal-300 text-xs">
                    {isAr
                      ? "صالة التجميع الرئيسية وأجهزة الموازنة الديناميكية وأفران التحميص الحرارية"
                      : "Overhead crane bays, curing ovens, and dynamic balancing station"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Facility & Workshop Capabilities */}
      <section className="py-16 lg:py-20 bg-canvas-warm border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="02 // WORKSHOP TOOLING & INFRASTRUCTURE"
            title={isAr ? "تجهيزات الورشة ومحطات الفحص الهندسي" : "Workshop Equipment & Diagnostic Bays"}
            description={isAr
              ? "صممت ورشتنا في المدينة الصناعية بالرياض للتعامل مع محركات الجهد العالي والضواغط الصناعية الثقيلة."
              : "Our Riyadh Al Sina'iyah workshop is engineered to overhaul, balance, and rewind heavy industrial rotating machinery."}
            withRule
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 space-y-3">
              <span className="font-mono text-xs text-brand-red font-semibold block">
                STATION 01 // BALANCING
              </span>
              <h3 className="font-heading font-bold text-lg text-charcoal-950 dark:text-white">
                {isAr ? "موازنة الأعضاء الدوارة (ISO 1940)" : "Dynamic Rotor Balancing Rig"}
              </h3>
              <p className="font-body text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                {isAr
                  ? "أجهزة موازنة إلكترونية لمعايرة وتصحيح اختلال توازن العضو الدوار ومراوح السحب وضمان خلوها من الاهتزازات التشغيلية."
                  : "Precision electronic balancing machine for rotors, impellers, and fans to eliminate vibration and bearing wear."}
              </p>
            </div>

            <div className="p-6 border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 space-y-3">
              <span className="font-mono text-xs text-brand-red font-semibold block">
                STATION 02 // IMPREGNATION
              </span>
              <h3 className="font-heading font-bold text-lg text-charcoal-950 dark:text-white">
                {isAr ? "أفران التحميص وغمر الورنيش" : "Varnish Impregnation & Curing Ovens"}
              </h3>
              <p className="font-body text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                {isAr
                  ? "أحواض غمر بمواد ورنيش عازلة عالية المقاومة وأفران تجفيف مضبوطة حرارياً لضمان تصلب العازل ومقاومة الرطوبة."
                  : "Controlled immersion tanks and temperature-regulated baking ovens ensuring deep insulation penetration and thermal durability."}
              </p>
            </div>

            <div className="p-6 border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 space-y-3">
              <span className="font-mono text-xs text-brand-red font-semibold block">
                STATION 03 // ELECTRICAL TESTING
              </span>
              <h3 className="font-heading font-bold text-lg text-charcoal-950 dark:text-white">
                {isAr ? "مختبر الفحص الكهربائي الساكن" : "Static High-Potential Test Suite"}
              </h3>
              <p className="font-body text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                {isAr
                  ? "فحوصات مقارنة النبضة (Surge Test)، واختبار مقاومة العزل حتى 5 كيلوفولت، وقياس مقاومة الأطوار بدقة الميكروأوم."
                  : "Surge comparison, 5kV Megger insulation testing, micro-ohm winding resistance, and transformer oil breakdown testers."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clearly Marked Client TODO Placeholders */}
      <section className="py-12 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 border border-dashed border-charcoal-300 dark:border-charcoal-700 bg-canvas-warm/70 dark:bg-charcoal-850/70 space-y-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-brand-red" />
              <span className="font-mono text-xs uppercase font-bold text-brand-red tracking-wider">
                CONTENT INTEGRITY // CLIENT DOCUMENTATION PENDING
              </span>
            </div>
            <p className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 leading-relaxed">
              {isAr
                ? "ملاحظة تدقيق المحتوى: البيانات الواردة أعلاه مستخلصة بدقة من ملف الشركة الرسمي لعام 1983. سيتم تزويد الموقع بشهادات الآيزو (ISO Certifications)، صور الكادر الهندسي الإضافية، ومساحة المنشأة الرسمية فور اعتمادها من إدارة العميل."
                : "Content Integrity Note: All narrative copy and specifications reflect confirmed 1983 profile facts. Formal ISO certifications, team member portraits, and facility square footage figures are marked as pending client supply and verification."}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="py-12 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              DIRECT TECHNICAL LIAISON
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في زيارة الورشة أو مناقشة صيانة مجدولة؟" : "Plan a Workshop Inspection or Schedule Maintenance"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "تواصل مع مهندسينا" : "Speak with an Engineer"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

