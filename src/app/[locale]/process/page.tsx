import React from "react";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Shield,
} from "lucide-react";
import {
  LogInspectionIcon,
  TeardownIcon,
  RewindingSpoolIcon,
  BakingOvenIcon,
  BalancingRigIcon,
  ElectricalTestIcon,
  DispatchCrateIcon,
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
      ? "خطوات العمل ومراحل ضبط الجودة — 7 مراحل قياسية للصيانة"
      : "Standard 7-Stage Overhaul Protocol & QC Workflow",
    description: isAr
      ? "المسار الهندسي المعتمد لشركة تارفا: 7 خطوات قياسية تبدأ بالاستلام والفحص وتنتهي بالاختبارات النهائية والتسليم."
      : "Tarfa 7-stage engineering overhaul protocol: Receipt, Teardown, Rewinding, Varnish & Baking, Dynamic Balancing, Run Testing, and Handover.",
  };
}

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const steps = [
    {
      num: "01",
      icon: LogInspectionIcon,
      title: isAr ? "الاستلام والتوثيق المبدئي" : "Receipt & Initial Log Inspection",
      scope: isAr ? "توثيق بيانات لوحة الاسم Nameplate وفحص الأضرار الظاهرية" : "Nameplate parameter logging & visual baseline damage inspection",
      qa: isAr ? "توثيق بيانات لوحة الاسم وصور العطل الظاهري" : "Nameplate verification & incoming condition photo documentation",
    },
    {
      num: "02",
      icon: TeardownIcon,
      title: isAr ? "التفكيك الميكانيكي والفحص الساكن" : "Mechanical Teardown & Diagnostics",
      scope: isAr ? "تفكيك هيدروليكي، فحص استقامة العمود، واختبار مقارنة النبضة" : "Hydraulic teardown, shaft runout check, and surge comparison testing",
      qa: isAr ? "قياس مقاومة العزل بجهاز ميجر 5kV وفحص التدفق الحلقي" : "5kV Megger insulation resistance & loop flux core assessment",
    },
    {
      num: "03",
      icon: RewindingSpoolIcon,
      title: isAr ? "إعادة اللف والعزل الهندسي" : "Precision Rewinding & Slot Insulation",
      scope: isAr ? "عزل Nomex فئة H/F وأسلاك نحاسية نقية مطابقة للمصنّع الأصلي" : "Class H/F Nomex slot insulation & pure copper round/strip rewinding",
      qa: isAr ? "فحص قصر اللفات ومطابقة أبعاد وأقطار الأسلاك النحاسية" : "Turn-to-turn surge test and wire gauge micrometer verification",
    },
    {
      num: "04",
      icon: BakingOvenIcon,
      title: isAr ? "الغمر بالورنيش والتحميص الحراري" : "Varnish Impregnation & Thermal Baking",
      scope: isAr ? "غمر كلي بأحواض الورنيش وتحميص في أفران مبرمجة لدرجات حرارة دقيقة" : "VPI/dip tank immersion & temperature-regulated curing oven bake",
      qa: isAr ? "مراقبة منحنى درجة الحرارة وزمن التحميص داخل الفرن" : "Baking oven temperature curve logging and curing hardness test",
    },
    {
      num: "05",
      icon: BalancingRigIcon,
      title: isAr ? "الموازنة الديناميكية والتجميع" : "Precision Dynamic Balancing & Assembly",
      scope: isAr ? "موازنة إلكترونية ثنائية المستوى وفق ISO 1940 G2.5 وتركيب محامل أصلية" : "Two-plane dynamic balancing to ISO 1940 G2.5 with OEM bearings",
      qa: isAr ? "شهادة اتزان ديناميكي معتمدة بقياس الاهتزازات المتبقية" : "ISO 1940 residual unbalance certification (< 2.5 mm/s RMS)",
    },
    {
      num: "06",
      icon: ElectricalTestIcon,
      title: isAr ? "التشغيل التجريبي والفحوصات النهائية" : "Full No-Load Run & Electrical Sign-off",
      scope: isAr ? "تشغيل بالجهد الاسمي الكامل، فحص توازن التيارات والاهتزاز والحرارة" : "Full rated voltage run test, phase balance, vibration FFT & thermal scan",
      qa: isAr ? "فحص توازن التيارات واختبار الجهد العالي (Hipot)" : "Phase current symmetry, bearing thermal scan, and final Hipot test",
    },
    {
      num: "07",
      icon: DispatchCrateIcon,
      title: isAr ? "الطلاء الوقائي وإصدار التقرير والتسليم" : "Protective Coating, Report & Dispatch",
      scope: isAr ? "طلاء إيبوكسي صناعي مقاوم، وتغليف وإرفاق شهادة الفحص الفني" : "Industrial enamel coating, protective wrap, and final QA test certificate",
      qa: isAr ? "تقرير فحص نهائي معتمد وموقع من مهندس الجودة" : "Official signed workshop inspection certificate & handover sheet",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        title={isAr ? "خطوات العمل ومراحل ضبط الجودة" : "7-Stage Engineering Overhaul Protocol"}
        description={isAr
          ? "مسار قياسي متكامل يخضع لكل مرحلة لاختبارات فنية موثقة لضمان إعادة المعدة إلى كفاءتها التشغيلية القصوى."
          : "Every piece of equipment follows a strict 7-phase overhaul path with calibrated testing at each transition."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "خطوات العمل" : "Process" },
        ]}
      />

      {/* Intro Note & Client Confirmation Disclaimer */}
      <section className="py-12 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-4 sm:p-5 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-700">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-sm text-charcoal-900 dark:text-white block">
                  {isAr ? "مخطط العمليات المعياري" : "Standard Industrial Lifecycle Protocol"}
                </span>
                <span className="font-body text-sm text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
                  {isAr
                    ? "هذا المسار يمثل إجراءات الصيانة القياسية المتبعة في ورشة الرياض، ويتم تعديله وفق متطلبات الصانع أو الشروط الخاصة بالعميل."
                    : "This workflow outlines our standard Al Sina'iyah workshop practice and is customized per client technical specifications."}
                </span>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-brand-red flex-shrink-0 uppercase">
              ISO-COMPLIANT WORKFLOW
            </span>
          </div>
        </div>
      </section>

      {/* Detailed Step-by-Step Breakdown with Icons */}
      <section className="py-16 lg:py-20 bg-canvas-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 rounded-xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-lg group"
                >
                  {/* Left: Step number, icon, and title */}
                  <div className="lg:w-5/12 flex items-center gap-4">
                    <span className="w-10 h-10 flex items-center justify-center font-mono font-bold text-sm bg-[#1c1e3e] text-white rounded-md group-hover:bg-brand-red transition-colors flex-shrink-0">
                      {st.num}
                    </span>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-canvas-warm dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors">
                        {st.title}
                      </h3>
                    </div>
                  </div>

                  {/* Middle: Clean Scope Tag */}
                  <div className="lg:w-4/12 ps-14 lg:ps-0">
                    <span className="font-mono text-sm text-charcoal-700 dark:text-charcoal-200 font-medium block">
                      {st.scope}
                    </span>
                  </div>

                  {/* Right: Quality Checkpoint Badge */}
                  <div className="lg:w-3/12 p-2.5 bg-canvas-warm/70 dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-750 text-start space-y-0.5 ps-14 lg:ps-3">
                    <div className="flex items-center gap-1.5 text-brand-red font-mono text-[10px] font-bold uppercase">
                      <Shield className="w-3 h-3" />
                      <span>QC VERIFICATION</span>
                    </div>
                    <span className="font-mono text-xs text-charcoal-700 dark:text-charcoal-200 block font-semibold">
                      {st.qa}
                    </span>
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
              CONFIRM YOUR WORKSHOP SPECIFICATIONS
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في جدولة فحص أو استلام لمعدات معطلة؟" : "Ready to Schedule Diagnostic Inspection for Industrial Machinery?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب فحص وتسليم" : "Schedule Workshop Handover"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
