import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, Building2, Factory, Construction, HeartPulse, Wheat, Utensils, Check } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "القطاعات الصناعية المستفيدة — خبرة عبر الصناعات السعودية"
      : "Industries Served — Electromechanical Expertise Across Saudi Sectors",
    description: isAr
      ? "تارفا تخدم كبرى القطاعات الصناعية بالمملكة: المشاريع الحكومية، مصانع الحديد، الإسمنت، المقاولات، المستشفيات، مطاحن الدقيق، والصناعات الغذائية."
      : "Heavy industrial maintenance for critical Saudi sectors: Government projects, Steel manufacturing, Cement plants, Civil construction, Hospitals, Flour mills, and Food processing.",
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const sectors = [
    {
      id: "government",
      icon: Building2,
      code: "SECTOR 01",
      name: isAr ? "المشاريع الحكومية والمرافق العامة" : "Government Projects & Public Utilities",
      summary: isAr
        ? "محطات ضخ مياه الشرب، محطات توليد الطاقة الكهربائية، وشبكات البنية التحتية العامة في منطقة الرياض ومختلف مناطق المملكة."
        : "Municipal water extraction stations, power distribution substations, and critical civic infrastructure throughout the Kingdom.",
      equipment: [
        isAr ? "مضخات الآبار الارتوازية الغاطسة عالية القدرة" : "High-capacity deep well submersible pump sets",
        isAr ? "محركات محطات الضخ الرئيسية متعددة المراحل" : "Main municipal booster and multistage water pumps",
        isAr ? "محولات التوزيع ومولدات الديزل الاحتياطية للمنشآت العامة" : "Distribution transformers and emergency diesel gensets",
      ],
    },
    {
      id: "steel",
      icon: Factory,
      code: "SECTOR 02",
      name: isAr ? "صناعات الحديد والصلب" : "Steel & Heavy Metal Manufacturing",
      summary: isAr
        ? "بيئات تشغيلية قاسية تتطلب محركات تتحمل درجات الحرارة العالية والغبار المعدني والاهتزازات المستمرة."
        : "Severe operating environments requiring high-temperature insulation, heavy starting torque, and continuous duty uptime.",
      equipment: [
        isAr ? "محركات الدرفلة الرئيسية ومحركات التيار المستمر الثقيلة" : "Heavy rolling mill drive motors and DC armatures",
        isAr ? "محركات روافع الصهر الكهربائية ذات حلقات الانزلاق" : "Furnace crane slip-ring hoist and traverse motors",
        isAr ? "مراوح أبراج التبريد ومضخات التبريد الصناعي" : "Cooling tower forced-draft blowers and slurry pumps",
      ],
    },
    {
      id: "cement",
      icon: Factory,
      code: "SECTOR 03",
      name: isAr ? "صناعات الإسمنت والجبس" : "Cement & Heavy Mineral Industries",
      summary: isAr
        ? "أفران الإسمنت وكسارات الحجر تتطلب محركات ذات عزم دوران فائق ومقاومة عالية لتسرب الغبار الكلسي."
        : "Rotary kilns, raw ball mills, and clinker crushers operating in high particulate and abrasive dust atmospheres.",
      equipment: [
        isAr ? "محركات أفران الإسمنت الرئيسية ومحركات الكسارات" : "Rotary kiln main drive motors and primary jaw crushers",
        isAr ? "مراوح سحب الهواء والغبار الكبرى (Baghouse Exhaust Fans)" : "High-inertia baghouse and ID exhaust fans (dynamic balancing)",
        isAr ? "مضخات طين الإسمنت والحمأة ذات العزم العالي" : "Cement slurry transfer pumps and pneumatic blower stators",
      ],
    },
    {
      id: "construction",
      icon: Construction,
      code: "SECTOR 04",
      name: isAr ? "شركات المقاولات والإنشاءات الكبرى" : "Civil Construction & Infrastructure Companies",
      summary: isAr
        ? "مشاريع البناء والحفريات والأنفاق تعتمد على جاهزية مضخات نزح المياه الجوفية ومولدات الطاقة الميدانية."
        : "Large-scale excavation, tunneling, and batching plants relying on immediate dewatering readiness and portable generation sets.",
      equipment: [
        isAr ? "مضخات نزح المياه الجوفية الغاطسة ذات قدرة سحب الرواسب" : "Heavy-duty dewatering submersible pumps with solids handling",
        isAr ? "محركات خلاطات الخرسانة المركزية ومضخات الحقن" : "Ready-mix batching plant drives and grout injection pumps",
        isAr ? "مولدات الديزل الميدانية لمواقع المشاريع النائية" : "Skid-mounted site diesel alternators and distribution coils",
      ],
    },
    {
      id: "hospitals",
      icon: HeartPulse,
      code: "SECTOR 05",
      name: isAr ? "المستشفيات والمنشآت الصحية" : "Hospitals & Critical Healthcare Facilities",
      summary: isAr
        ? "منشآت حيوية لا تحتمل أي انقطاع في منظومة التكييف المركزي أو تعطل مضخات المياه ومولدات الطوارئ."
        : "Mission-critical facilities requiring zero tolerance for HVAC chiller failures, sterile water drops, or standby power interruptions.",
      equipment: [
        isAr ? "ضواغط التبريد المركزية للشيلرات (حلزونية ومكابس)" : "Central HVAC chiller compressors (screw and reciprocating)",
        isAr ? "مولدات الطوارئ الاحتياطية لتغذية غرف العمليات والعناية" : "Emergency backup power generators and synchronization alternators",
        isAr ? "مضخات تعزيز الضغط وشبكات مياه الإطفاء والتعقيم" : "Potable booster sets and certified fire suppression pumps",
      ],
    },
    {
      id: "flour-mills",
      icon: Wheat,
      code: "SECTOR 06",
      name: isAr ? "مطاحن الدقيق وصوامع الغلال" : "Flour Mills & Grain Silo Facilities",
      summary: isAr
        ? "بيئات غبار دقيق قابلة للاشتعال تتطلب محركات معزولة بإحكام ومراوح نقل هوائي متزنة ديناميكياً."
        : "Combustible flour dust environments requiring hermetically sealed motors, pneumatic conveyor drives, and vibration-free blowers.",
      equipment: [
        isAr ? "محركات النواقل اللولبية ومصاعد الحبوب الرأسية" : "Vertical bucket elevator drives and enclosed screw conveyors",
        isAr ? "مضخات ومنافيخ النقل الهوائي للدقيق (Roots Blowers)" : "Pneumatic transfer positive-displacement Roots blowers",
        isAr ? "المحركات المحكمة المقاومة لدخول الغبار الكربوني" : "Totally enclosed dust-ignition-proof electric motors",
      ],
    },
    {
      id: "food",
      icon: Utensils,
      code: "SECTOR 07",
      name: isAr ? "الصناعات الغذائية ومستودعات التبريد" : "Food Processing & Cold Chain Logistics",
      summary: isAr
        ? "مصانع الأغذية والألبان وسلاسل التجميد تعتمد كلياً على كفاءة ضواغط التبريد ومضخات الفولاذ الصحي."
        : "Food packaging, dairy processing, and cold chain distribution centers requiring continuous sub-zero refrigeration reliability.",
      equipment: [
        isAr ? "ضواغط التبريد والتجميد لمستودعات اللحوم والألبان" : "Ammonia and Freon cold-room refrigeration compressors",
        isAr ? "مضخات الستانلس ستيل الصحية لنقل السوائل الغذائية" : "Sanitary stainless steel centrifugal and positive displacement pumps",
        isAr ? "محركات خطوط التعبئة الآلية ومحركات السيور الناقلة" : "Automated bottling conveyor drives and washdown motors",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        sectionNumber="EXPERTISE // 04"
        badge={isAr ? "القطاعات الحيوية بالمملكة" : "7 INDUSTRIAL SECTORS"}
        title={isAr ? "خبرتنا الممتدة عبر القطاعات الصناعية" : "Industrial Expertise Across Critical Saudi Sectors"}
        description={isAr
          ? "تعتمد كبرى مصانع ومرافق المملكة على تارفا للحفاظ على جاهزية معداتها الكهروميكانيكية وتقليل أوقات التوقف الطارئة."
          : "Heavy manufacturing and public utilities across Saudi Arabia rely on Tarfa's four-decade track record to keep rotating machinery running without interruption."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "القطاعات الصناعية" : "Industries" },
        ]}
      />

      {/* Intro Context Banner */}
      <section className="py-12 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-semibold">
                INDUSTRIAL RELIABILITY MANDATE
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900 dark:text-white">
                {isAr
                  ? "حماية خطوط الإنتاج الحيوية من الخسائر التشغيلية"
                  : "Protecting Continuous Manufacturing Plants from Catastrophic Downtime"}
              </h2>
              <p className="font-body text-sm text-charcoal-600 dark:text-charcoal-400 leading-relaxed max-w-2xl">
                {isAr
                  ? "تدرك تارفا أن توقف محرك رئيسي في مصنع إسمنت أو شيلر مركزي في مستشفى يكلف مئات الآلاف كل ساعة. لذلك نقدم دعماً هندسياً سريعاً وبروتوكولات فحص دقيقة تعيد المعدة لمواصفات المصنع الأصلي."
                  : "At Tarfa, we understand that an unexpected motor trip in a steel mill or a chiller failure in a major hospital incurs severe downtime penalties. Our workshop responds with precision diagnostics, round-the-clock overhaul capability, and OEM compliance."}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 bg-charcoal-950 text-white border border-charcoal-800 text-start space-y-2 font-mono text-xs">
              <span className="text-brand-red font-bold text-xs uppercase block">
                EMERGENCY LIAISON
              </span>
              <p className="text-charcoal-300">
                {isAr ? "الخط الساخن للمصانع لحالات الأعطال الطارئة بالرياض:" : "Direct industrial breakdown dispatch line in Riyadh:"}
              </p>
              <a href="tel:+966502640474" className="phone-number text-lg font-bold text-white block hover:text-brand-red transition-colors">
                +966 50 2640 474
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sector Grid */}
      <section className="py-16 lg:py-20 bg-canvas-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.id}
                  className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-brand-red transition-colors shadow-hairline"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-charcoal-100 dark:border-charcoal-800 pb-3">
                      <div className="flex items-center gap-2.5 text-brand-red">
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-heading font-bold text-lg text-charcoal-950 dark:text-white">
                          {sector.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-charcoal-400">
                        {sector.code}
                      </span>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                      {sector.summary}
                    </p>
                  </div>

                  {/* Typical Machinery Maintained */}
                  <div className="pt-3 border-t border-charcoal-100 dark:border-charcoal-800 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-400 block font-semibold">
                      {isAr ? "المعدات الكهروميكانيكية التي نقوم بصيانتها:" : "KEY ROTATING MACHINERY SERVICED:"}
                    </span>
                    <ul className="space-y-1.5 text-xs font-body text-charcoal-700 dark:text-charcoal-300">
                      {sector.equipment.map((eq, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-red font-bold text-xs mt-0.5">•</span>
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-12 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              PLANT OVERHAUL CONSULTATION
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في مناقشة صيانة سنوية أو عمرة شاملة لمعدات مصنعك؟" : "Planning a Plant Shutdown or Need Long-Term Maintenance Partnership?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "طلب اجتماع فني" : "Request Technical Consultation"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

