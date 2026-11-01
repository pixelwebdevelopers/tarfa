import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { AlertCircle, CheckCircle2, ArrowRight, ArrowLeft, Shield, Wrench, FileText } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "مسار العمل الصناعي — 7 مراحل لإعادة اللف والصيانة"
      : "Our Process — 7-Stage Electromechanical Refurbishment Lifecycle",
    description: isAr
      ? "تعرف على مراحل إعادة لف وصيانة المعدات لدى ورشة تارفا بالرياض: من الفحص الأولي والتفكيك حتى الموازنة الديناميكية والاختبار النهائي والتسليم."
      : "Detailed 7-stage workshop lifecycle: Receiving, Dismantling, Rewinding, Varnish baking, Dynamic balancing, Final testing, and Handover.",
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
      title: isAr ? "الاستلام والتوثيق المبدئي" : "Receipt & Initial Log Inspection",
      desc: isAr
        ? "استلام المعدة في الورشة، تسجيل كافة بيانات لوحة الاسم (Nameplate: الجهد، القدرة، التيار، السرعة، فئة العزل)، وتوثيق الحالة الظاهرية والتلف الميكانيكي في بطاقة عمل رقمية خاصة."
        : "Log incoming equipment into workshop registry, capture complete nameplate parameters (voltage, power, full-load amps, RPM, insulation class), and document initial mechanical/electrical damage.",
      qa: isAr ? "توثيق بيانات لوحة الاسم وصور العطل الظاهري" : "Nameplate verification & incoming condition photo documentation",
    },
    {
      num: "02",
      title: isAr ? "التفكيك الميكانيكي والفحص الساكن" : "Mechanical Teardown & Static Diagnostic Testing",
      desc: isAr
        ? "تفكيك أغطية المحرك وكراسي التحميل باستخدام ساحبات هيدروليكية، فحص عمود الدوران لقياس الانحراف، وإجراء فحص مقارنة النبضة (Surge Test) وقياس مقاومة العزل لتشخيص سبب الانهيار."
        : "Hydraulic puller disassembly of end shields and bearings, shaft total indicator runout inspection, and high-frequency surge comparison to pinpoint insulation failure points.",
      qa: isAr ? "قياس مقاومة العزل بجهاز ميجر 5kV وفحص التدفق الحلقي" : "5kV Megger insulation resistance & loop flux core assessment",
    },
    {
      num: "03",
      title: isAr ? "إعادة اللف والعزل الهندسي" : "Precision Stator Rewinding & Slot Insulation",
      desc: isAr
        ? "تنظيف مجاري الستاتور وتركيب عوازل متطورة (Nomex / Mylar) من الفئتين F و H، ولف ملفات نحاسية نقية بأسلاك دائرية أو شريطية مطابقة تماماً للمخطط الأصلي للمصنّع مع عزل الأطوار وتثبيت الأوتاد."
        : "Precision slot cell insulation insertion using Class H Nomex/Mylar, followed by pure copper round or rectangular strip wire winding strictly adhering to OEM turns and pitch specifications.",
      qa: isAr ? "فحص قصر اللفات ومطابقة أبعاد وأقطار الأسلاك النحاسية" : "Turn-to-turn surge test and wire gauge micrometer verification",
    },
    {
      num: "04",
      title: isAr ? "الغمر بالورنيش والتحميص الحراري" : "Varnish Impregnation & Temperature-Controlled Baking",
      desc: isAr
        ? "غمر الستاتور بالكامل في أحواض ورنيش عازل عالي المقاومة للرطوبة والكيماويات، ثم تحميصه داخل أفران حرارية مبرمجة لدرجات حرارة مضبوطة لضمان التصلب الكامل وحماية الملفات من الاهتزازات."
        : "Deep tank immersion in high-dielectric baking varnish ensuring complete penetration into slot recesses, followed by temperature-regulated oven curing to solidify insulation against moisture and vibration.",
      qa: isAr ? "مراقبة منحنى درجة الحرارة وزمن التحميص داخل الفرن" : "Baking oven temperature curve logging and curing hardness test",
    },
    {
      num: "05",
      title: isAr ? "الموازنة الديناميكية والتجميع الميكانيكي" : "Precision Dynamic Balancing & Assembly",
      desc: isAr
        ? "موازنة العضو الدوار ومراوح التبريد على ماكينة موازنة إلكترونية ثنائية المستوى وفق معيار ISO 1940 درجة G2.5، وتركيب كراسي تحميل جديدة وضبط الخلوص وموانع التسرب."
        : "Two-plane electronic dynamic balancing of rotors and impellers to ISO 1940 Grade G2.5 tolerances, followed by installation of OEM bearings, mechanical seals, and shaft alignment.",
      qa: isAr ? "شهادة اتزان ديناميكي معتمدة بقياس الاهتزازات المتبقية" : "ISO 1940 residual unbalance certification (< 2.5 mm/s RMS)",
    },
    {
      num: "06",
      title: isAr ? "التشغيل التجريبي والفحوصات النهائية" : "Full No-Load Run Testing & Electrical Sign-off",
      desc: isAr
        ? "تشغيل المحرك بكامل الجهد الاسمي بدون حمل، قياس تيارات الأطوار الثلاثة للتأكد من توازنها التام، مراقبة درجات حرارة المحامل، وقياس مستوى الضجيج والاهتزازات التشغيلية."
        : "Full rated voltage no-load run test, phase current balance measurement, bearing temperature rise logging, vibration FFT spectrum analysis, and final high-potential insulation verification.",
      qa: isAr ? "فحص توازن التيارات واختبار الجهد العالي (Hipot)" : "Phase current symmetry, bearing thermal scan, and final Hipot test",
    },
    {
      num: "07",
      title: isAr ? "الطلاء الوقائي وإصدار التقرير الفني والتسليم" : "Protective Coating, Technical Report & Dispatch",
      desc: isAr
        ? "طلاء المعدة بطلاء صناعي مقاوم للرطوبة والصدأ، إحكام إغلاق صندوق التوصيلات، وإصدار ملف الفحص الفني المكتمل المتضمن قراءات العزل والموازنة قبل التسليم الآمن للعميل."
        : "Industrial protective enamel spray coating, terminal box sealing, packaging for transport, and delivery accompanied by the comprehensive workshop testing certificate.",
      qa: isAr ? "تقرير فني موقع من مدير الورشة يتضمن كافة القراءات" : "Official signed inspection certificate with before/after diagnostic data",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        sectionNumber="WORKFLOW // 07 STAGES"
        badge={isAr ? "دورة الجودة الشاملة" : "END-TO-END QC LIFECYCLE"}
        title={isAr ? "مسار العمل الصناعي وضمان الجودة" : "7-Stage Electromechanical Refurbishment Lifecycle"}
        description={isAr
          ? "منهجية معتمدة تخضع لها كل معدة تدخل ورشة تارفا بالرياض لضمان عودتها لأعلى مستويات الكفاءة والاعتمادية."
          : "Rigorous step-by-step engineering refurbishment protocol ensuring every rewound motor and overhauled pump meets or exceeds OEM specifications."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "خطوات العمل" : "Our Process" },
        ]}
      />

      {/* Client Confirmation Notice */}
      <section className="py-6 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 border border-dashed border-charcoal-300 dark:border-charcoal-700 bg-canvas-warm/70 dark:bg-charcoal-850/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-charcoal-600 dark:text-charcoal-300">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>
                {isAr
                  ? "ملاحظة: هذا المسار يمثل بروتوكول الورشة المعتمد، ويتم تخصيص معايير الفحص وفق المتطلبات الخاصة لكل عميل قبل بدء المشروع."
                  : "Client Notice: This represents Tarfa's standard workshop workflow. Specific inspection criteria and testing hold-points are confirmed with the client prior to project commencement."}
              </span>
            </div>
            <span className="font-bold text-brand-red uppercase flex-shrink-0">
              QC AUDIT PROTOCOL
            </span>
          </div>
        </div>
      </section>

      {/* Detailed Step-by-Step Breakdown */}
      <section className="py-16 lg:py-20 bg-canvas-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-brand-red transition-colors shadow-hairline group"
              >
                {/* Left: Step number and title */}
                <div className="lg:w-4/12 flex items-start gap-4">
                  <span className="w-11 h-11 flex items-center justify-center font-mono font-bold text-base bg-charcoal-950 text-white group-hover:bg-brand-red transition-colors flex-shrink-0 industrial-cut-badge">
                    {st.num}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] text-brand-red uppercase font-bold tracking-wider block">
                      STAGE {st.num} // LIFECYCLE
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors">
                      {st.title}
                    </h3>
                  </div>
                </div>

                {/* Middle: Description */}
                <div className="lg:w-5/12">
                  <p className="font-body text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Right: Quality Checkpoint Badge */}
                <div className="lg:w-3/12 p-3 bg-canvas-warm dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800 text-start space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-red font-mono text-[10px] font-bold uppercase">
                    <Shield className="w-3 h-3" />
                    <span>QC CHECKPOINT</span>
                  </div>
                  <span className="font-mono text-xs text-charcoal-700 dark:text-charcoal-300 block">
                    {st.qa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-12 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              TRANSPARENT REPAIR PROTOCOL
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في متابعة أو طلب عمرة شاملة لمعدتك وفق هذا المسار؟" : "Ready to Dispatch Equipment for Systematic Overhaul?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب فحص المعدة الآن" : "Schedule Equipment Assessment"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

