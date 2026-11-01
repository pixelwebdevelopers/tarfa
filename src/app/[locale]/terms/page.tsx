import React from "react";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { COMPANY_DETAILS } from "@/config/contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "شروط الخدمة والتعاقد الفني" : "Terms of Service & Engineering Standards",
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        title={isAr ? "شروط الخدمة والتعاقد الفني" : "Terms of Industrial Service & Warranty"}
        description={isAr
          ? "المعايير والشروط العامة الحاكمة لعمليات استلام المعدات، الفحص التشخيصي، إعادة اللف، وضمان التشغيل لدى تارفا."
          : "General operating terms governing equipment custody, teardown inspection, rewinding warranties, and workshop handover."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "شروط الخدمة" : "Terms of Service" },
        ]}
      />

      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-body text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-charcoal-900 dark:text-white">
              {isAr ? "1. نطاق الفحص والتقييم" : "1. Initial Inspection & Diagnostic Teardown"}
            </h2>
            <p>
              {isAr
                ? "تخضع كل معدة يتم استلامها لفحص ظاهري وساكن مبدئي. في حال تطلب الأمر تفكيكاً ميكانيكياً شاملاً لتحديد التلف الخفي، يتم إصدار تقرير فني تفصيلي متضمناً نطاق التكلفة المقدر قبل الشروع في أعمال إعادة اللف أو استبدال القطع."
                : "Incoming equipment undergoes preliminary physical and static insulation testing. If extensive mechanical teardown is required to diagnose hidden failures, a detailed condition report with formal cost estimates is issued prior to rewinding or parts replacement."}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-charcoal-900 dark:text-white">
              {isAr ? "2. معايير الجودة والضمان التشغيلي" : "2. Rewind Quality & Warranty Coverage"}
            </h2>
            <p>
              {isAr
                ? "تضمن تارفا جودة المواد النحاسية والعوازل الفئة H و F ومطابقة أوزان الموازنة الديناميكية لمعايير ISO 1940. تخضع كافة أعمال إعادة اللف لضمان تشغيلي محدد في أمر الشراء ضد عيوب الصناعة والمواد، باستثناء الأعطال الناتجة عن التشغيل الخاطئ أو فقدان أحد الأطوار أو نقص التزييت الميداني."
                : "All rewinding operations carry commercial warranties against manufacturing and material defects, subject to confirmed purchase orders. Warranty coverage assumes proper field protection, balanced phase voltages, and OEM-specified lubrication regimens."}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-charcoal-900 dark:text-white">
              {isAr ? "3. الاستلام والتسليم" : "3. Equipment Delivery & Handover"}
            </h2>
            <p>
              {isAr
                ? "يتم تسليم المعدات مصحوبة بتقرير الفحص الفني النهائي المعتمد بعد إتمام اختبارات التشغيل بدون حمل وقياس الاهتزازات في مقر ورشتنا بالمدينة الصناعية في الرياض."
                : "Refurbished motors and pumps are delivered upon completion of successful no-load testing and vibration sign-off at our Al Sina'iyah workshop in Riyadh."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

