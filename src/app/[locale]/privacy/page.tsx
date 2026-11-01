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
    title: isAr ? "سياسة الخصوصية وحماية البيانات" : "Privacy Policy",
  };
}

export default async function PrivacyPage({
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
        sectionNumber="LEGAL // PRIVACY"
        title={isAr ? "سياسة الخصوصية وحماية البيانات" : "Privacy & Data Protection Policy"}
        description={isAr
          ? "تلتزم شركة تارفا لصيانة المعدات بحماية خصوصية بيانات عملائها وشركائها الصناعيين وفق الأنظمة المعتمدة في المملكة العربية السعودية."
          : "Tarfa Equipment Maintenance is committed to safeguarding the privacy and proprietary data of our commercial and industrial clients in Saudi Arabia."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "سياسة الخصوصية" : "Privacy Policy" },
        ]}
      />

      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-body text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-charcoal-900 dark:text-white">
              {isAr ? "1. جمع البيانات واستخدامها" : "1. Collection and Usage of Technical Information"}
            </h2>
            <p>
              {isAr
                ? "يتم جمع البيانات المزودة عبر نموذج طلب عرض السعر (كالاسم، اسم المصنع، رقم الجوال، صور لوحة الاسم وبيانات المعدات) حصرياً لغرض إعداد عروض الأسعار والتواصل الفني وتنسيق عمليات الاستلام والفحص بالورشة."
                : "Information submitted via our technical quotation form (including personnel contact, company name, phone, equipment ratings, and nameplate photos) is utilized strictly for technical evaluation, cost estimation, and workshop logistics coordination."}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-charcoal-900 dark:text-white">
              {isAr ? "2. سرية المواصفات الصناعية" : "2. Confidentiality of Industrial Data"}
            </h2>
            <p>
              {isAr
                ? "نتعامل مع كافة المواصفات والرسومات التشغيلية الخاصة بمصانع العملاء بسرية تامة، ولا يتم مشاركة أي معلومات فنية أو تجارية مع أي طرف ثالث دون موافقة خطية صريحة."
                : "All proprietary plant drawings, operating parameters, and equipment condition reports are treated with strict industrial confidentiality. Tarfa never sells, leases, or transmits commercial data to third-party entities."}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-charcoal-900 dark:text-white">
              {isAr ? "3. التواصل المباشر" : "3. Direct Inquiries & Contact"}
            </h2>
            <p>
              {isAr
                ? `لأي استفسار يتعلق بحماية البيانات، يرجى مراسلتنا مباشرة على البريد: ${COMPANY_DETAILS.email} أو الاتصال على: ${COMPANY_DETAILS.phonePrimary}.`
                : `For inquiries regarding our privacy standards or data retention protocols, please contact our workshop liaison directly at ${COMPANY_DETAILS.email} or call ${COMPANY_DETAILS.phonePrimary}.`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

