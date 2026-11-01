import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "عملاؤنا وشركاء الثقة — كبرى المنشآت الصناعية في المملكة"
      : "Our Clients & Industrial Partners — Serving Leading Saudi Enterprises",
    description: isAr
      ? "قائمة عملاء وشركاء تارفا لصيانة المعدات: كاف العربية، كي إس بي للمضخات، سابكو، الوطنية، مستشفى فقيه، جامعة الملك سعود، والمنجم للأغذية."
      : "Tarfa Equipment Maintenance corporate client portfolio: CAF Arabia, KSB Pumps Arabia, SAPPCO, Al-Watnia, Dr. Muhammad Fagi Hospital, King Saud University, and Al Munajem.",
  };
}

export default async function ClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const clients = [
    {
      id: "caf",
      name: "CAF ARABIA",
      arabicName: "كاف العربية",
      logo: "/images/clients/caf-arabia.svg",
      sector: isAr ? "هندسة وتوريد قطارات السكك الحديدية والنقل" : "Railway Rolling Stock Engineering & Transport",
      scope: isAr ? "صيانة محركات الدفع الكهربائية ومضخات التبريد ومراوح التهوية" : "Traction motor inspection, auxiliary blower overhaul, cooling fans",
      location: "Riyadh, KSA",
    },
    {
      id: "ksb",
      name: "KSB PUMPS ARABIA",
      arabicName: "كي إس بي للمضخات العربية",
      logo: "/images/clients/ksb-pumps.svg",
      sector: isAr ? "صناعة وتوريد المضخات ومحطات المياه الصناعية" : "Industrial Pump Manufacturing & Fluid Technology",
      scope: isAr ? "إعادة لف المحركات الكهربائية للمضخات الغاطسة والسطحية" : "Submersible & surface motor rewinding, mechanical seal overhaul",
      location: "Riyadh Industrial City",
    },
    {
      id: "al-ameen",
      name: "AL-AMEEN DEV & TRADE CO",
      arabicName: "شركة الأمين للتنمية والتجارة",
      logo: "/images/clients/al-ameen.png",
      sector: isAr ? "التطوير الهندسي والتجارة والمقاولات الصناعية" : "Commercial Trading & Industrial Engineering Development",
      scope: isAr ? "صيانة وتجديد المحركات الكهروميكانيكية ومعدات الضخ والتبريد" : "Electromechanical drive overhaul and pump set refurbishment",
      location: "Kingdom-Wide Operations",
    },
    {
      id: "al-watnia",
      name: "AL-WATNIA",
      arabicName: "الشركة الوطنية للإنتاج الزراعي والداجني",
      logo: "/images/clients/al-watania.png",
      sector: isAr ? "الصناعات الغذائية والإنتاج الزراعي والداجني" : "Poultry & Agricultural Food Processing",
      scope: isAr ? "صيانة ضواغط التبريد ومحركات خطوط المعالجة ومضخات المياه" : "Refrigeration chiller compressors, feed mill motors, deep well pumps",
      location: "Al-Qassim & Riyadh",
    },
    {
      id: "fagi",
      name: "DR MUHAMMAD FAGI HOSPITAL",
      arabicName: "مستشفى د. محمد فقيه",
      logo: "/images/clients/fakeeh-care.svg",
      sector: isAr ? "الرعاية الصحية والمستشفيات والمنشآت الطبية" : "Healthcare Facilities & Medical Infrastructure",
      scope: isAr ? "صيانة ضواغط التكييف المركزي ومولدات الطوارئ ومضخات التعزيز" : "Central HVAC chiller compressors, backup generators, booster pumps",
      location: "Western & Central Regions",
    },
    {
      id: "sappco",
      name: "SAPPCO",
      arabicName: "الشركة السعودية لأنابيب البلاستيك (سابكو)",
      logo: "/images/clients/sappco.png",
      sector: isAr ? "الصناعات البلاستيكية وأنابيب البنية التحتية" : "Saudi Plastic Products Company (Piping & Infrastructure)",
      scope: isAr ? "إعادة لف محركات خطوط البثق الرئيسية ومضخات التبريد الصناعي" : "Extrusion line DC/AC drive motors and chiller pump units",
      location: "Riyadh Industrial City",
    },
    {
      id: "al-jouf",
      name: "AlL-JOUF MINERAL WATER BOTTLING",
      arabicName: "شركة مياه الجوف المعدنية",
      logo: "/images/clients/al-jouf-water.png",
      sector: isAr ? "تعبئة ومعالجة المياه الطبيعية والعصائر" : "Mineral Water Bottling & Beverage Processing Plants",
      scope: isAr ? "صيانة مضخات استخراج المياه العميقة ومحركات خطوط التعبئة" : "Deep extraction well pumps and automated bottling line drives",
      location: "Al-Jouf & Distribution Hubs",
    },
    {
      id: "ksu",
      name: "JAMIA MALIK SAUD",
      arabicName: "جامعة الملك سعود",
      logo: "/images/clients/king-saud-university.png",
      sector: isAr ? "المرافق الجامعية ومحطات الخدمات الهندسية المركزية" : "King Saud University Engineering & Utilities Infrastructure",
      scope: isAr ? "صيانة ضواغط محطة التبريد المركزية ومضخات شبكات المياه" : "Central chiller plant compressors and campus distribution pumps",
      location: "Riyadh, KSA",
    },
    {
      id: "al-munajem",
      name: "Al MUNAJEM FOOD COMPANY",
      arabicName: "شركة المنجم للأغذية",
      logo: "/images/clients/almunajem-foods.png",
      sector: isAr ? "سلاسل التبريد والتوزيع والتخزين الغذائي" : "Cold Chain Storage & Food Distribution",
      scope: isAr ? "صيانة ضواغط التجميد المركزية ومحركات مراوح مستودعات التبريد" : "Commercial blast freezing compressors and cold store fan motors",
      location: "Riyadh Logistics Zone",
    },
  ];

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        sectionNumber="PARTNERS // TRACK RECORD"
        badge={isAr ? "شراكات مستمرة منذ 1983" : "SERVING KSA SINCE 1983"}
        title={isAr ? "عملاؤنا وشركاء مسيرة التميز" : "Valued Corporate Clients & Industrial Partners"}
        description={isAr
          ? "على مدى أكثر من 40 عاماً، وثقت كبرى الشركات الصناعية والمؤسسات العامة في المملكة بقدرات تارفا في الحفاظ على استمرارية معداتها."
          : "Over four decades of proven reliability, Tarfa has partnered with leading Saudi enterprises to maintain mission-critical electrical and rotating machinery."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "عملاؤنا" : "Clients" },
        ]}
      />

      {/* Intro */}
      <section className="py-12 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-semibold">
              RELATIONSHIPS BUILT ON RELIABILITY
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900 dark:text-white">
              {isAr ? "ثقة متبادلة مع كبرى الجهات والشركات" : "Trusted by Critical National Enterprises"}
            </h2>
            <p className="font-body text-sm text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
              {isAr
                ? "قائمتنا تضم نخبة من الشركات الرائدة في قطاعات النقل، تصنيع المضخات، الصناعات البلاستيكية، الرعاية الصحية، والمرافق الجامعية بالمملكة."
                : "Our customer relationships are built on swift diagnostic turnaround, zero-compromise rewinding standards, and reliable post-repair performance."}
            </p>
          </div>
        </div>
      </section>

      {/* Client Cards Grid with Logos */}
      <section className="py-16 lg:py-20 bg-canvas-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((c, idx) => (
              <div
                key={c.id}
                className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-6 flex flex-col justify-between space-y-5 hover:border-brand-red transition-all duration-200 shadow-hairline group"
              >
                <div className="space-y-4">
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between border-b border-charcoal-100 dark:border-charcoal-800 pb-2.5">
                    <span className="font-mono text-[11px] font-bold text-brand-red">
                      {idx < 9 ? `CLIENT 0${idx + 1}` : `CLIENT ${idx + 1}`}
                    </span>
                    <span className="font-mono text-[10px] text-charcoal-400 uppercase">
                      {c.location}
                    </span>
                  </div>

                  {/* Logo Display Box */}
                  <div className="h-20 w-full flex items-center justify-center p-3 bg-canvas-warm/70 dark:bg-charcoal-850 border border-charcoal-200/80 dark:border-charcoal-750">
                    <div className="relative w-full h-12 flex items-center justify-center">
                      <Image
                        src={c.logo}
                        alt={`${c.name} Logo`}
                        width={200}
                        height={48}
                        className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  {/* Client title and sector */}
                  <div className="space-y-1">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors">
                      {c.name}
                    </h3>
                    {isAr && (
                      <span className="font-heading text-xs text-charcoal-500 block font-semibold">
                        {c.arabicName}
                      </span>
                    )}
                    <p className="font-mono text-xs text-charcoal-600 dark:text-charcoal-300 font-medium">
                      {c.sector}
                    </p>
                  </div>
                </div>

                {/* Scope of service */}
                <div className="pt-3 border-t border-charcoal-100 dark:border-charcoal-800 space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-400 block font-semibold">
                    {isAr ? "نطاق الصيانة المنفذ:" : "SERVICES PERFORMED:"}
                  </span>
                  <span className="font-body text-xs text-charcoal-700 dark:text-charcoal-400 block leading-relaxed">
                    {c.scope}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Plus many more banner */}
          <div className="p-5 border border-dashed border-charcoal-300 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-600 dark:text-charcoal-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>
                {isAr
                  ? "وعشرات المصانع والمؤسسات والشركات في المدينة الصناعية بالرياض وكافة مناطق المملكة العربية السعودية."
                  : "And dozens of industrial facilities, contracting firms, and commercial operators across Riyadh and the Kingdom."}
              </span>
            </div>
            <span className="font-bold text-brand-red uppercase flex-shrink-0">
              EST. 1983 // 40+ YEARS
            </span>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-12 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-red font-semibold uppercase">
              JOIN OUR VALUED CLIENT NETWORK
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              {isAr ? "هل ترغب في بدء شراكة صيانة موثوقة لمعدات مصنعك؟" : "Looking for a Long-Term Electromechanical Maintenance Partner?"}
            </h3>
          </div>
          <Button href="/contact" variant="primary" size="md" withChamfer>
            <span>{isAr ? "تواصل مع الإدارة الفنية" : "Contact Technical Management"}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
