"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import {
  InputField,
  SelectField,
  TextareaField,
  FileUploadField,
} from "@/components/FormFields";
import { COMPANY_DETAILS } from "@/config/contact";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Shield,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const common = useTranslations("common");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    equipmentType: "",
    powerRating: "",
    message: "",
    website_hp: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const equipmentOptions = [
    { value: "motor", label: t("form.equipmentOptions.motor") },
    { value: "compressor", label: t("form.equipmentOptions.compressor") },
    { value: "pump", label: t("form.equipmentOptions.pump") },
    { value: "generator", label: t("form.equipmentOptions.generator") },
    { value: "transformer", label: t("form.equipmentOptions.transformer") },
    { value: "core", label: t("form.equipmentOptions.core") },
    { value: "balancing", label: t("form.equipmentOptions.balancing") },
    { value: "other", label: t("form.equipmentOptions.other") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || t("form.errorDesc"));
      }

      setStatus("success");
      setFormData({
        fullName: "",
        company: "",
        phone: "",
        email: "",
        equipmentType: "",
        powerRating: "",
        message: "",
        website_hp: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || t("form.errorDesc"));
    }
  };

  const whatsappMessage = isAr
    ? encodeURIComponent("السلام عليكم، نود الاستفسار عن فحص أو طلب عرض سعر لمعدة لدى ورشة تارفا.")
    : encodeURIComponent("Hello, we would like to request a quote or technical inspection at Tarfa Equipment Maintenance.");

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phonePrimaryRaw}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col w-full text-start">
      <PageHeader
        title={isAr ? "التواصل المباشر وطلب عروض الأسعار" : "Contact & Technical Quotation Gateway"}
        description={isAr
          ? "تواصل مباشرة مع فريقنا الهندسي بالرياض للحصول على تقييم فني لعطل المعدة أو طلب عرض سعر إعادة لف وعمرة شاملة."
          : "Connect directly with our Riyadh engineering workshop to schedule diagnostic teardowns, rotor balancing, or obtain a certified rewind quotation."}
        breadcrumbs={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "التواصل وعروض الأسعار" : "Contact & Quote" },
        ]}
      />

      <section className="py-16 lg:py-20 bg-canvas-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                title={isAr ? "بيانات التواصل ومقر الورشة" : "Direct Technical Directory"}
                description={isAr
                  ? "فريقنا الهندسي جاهز لاستقبال المعدات أو ترتيب زيارة ميدانية لفحص المعدات في موقع مصنعك."
                  : "Our Riyadh Al Sina'iyah workshop is open 6 days a week with 24/7 emergency dispatch for heavy breakdown emergencies."}
              />

              {/* Direct Personnel Card */}
              <div className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-6 space-y-4 shadow-hairline">
                <div className="flex items-center justify-between border-b border-charcoal-100 dark:border-charcoal-800 pb-3">
                  <div>
                    <span className="font-mono text-[10px] text-brand-red font-bold uppercase tracking-wider block">
                      DIRECT LIAISON
                    </span>
                    <h3 className="font-heading font-extrabold text-lg text-charcoal-900 dark:text-white">
                      {isAr ? "م. حامد علي" : "Hamid Ali"}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-charcoal-400">
                    {t("repRole")}
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-charcoal-400 block text-[10px] uppercase">
                        {isAr ? "الخط المباشر للورشة" : "PRIMARY WORKSHOP LINE"}
                      </span>
                      <a
                        href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                        className="phone-number text-sm font-bold text-charcoal-900 dark:text-white hover:text-brand-red transition-colors"
                      >
                        {COMPANY_DETAILS.phonePrimary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-charcoal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-charcoal-400 block text-[10px] uppercase">
                        {isAr ? "خط الطوارئ الإضافي" : "SECONDARY STANDBY LINE"}
                      </span>
                      <a
                        href={`tel:${COMPANY_DETAILS.phoneSecondary}`}
                        className="phone-number text-sm font-semibold text-charcoal-700 dark:text-charcoal-300 hover:text-brand-red transition-colors"
                      >
                        {COMPANY_DETAILS.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-charcoal-400 block text-[10px] uppercase">
                        {isAr ? "البريد الإلكتروني" : "WORKSHOP EMAIL"}
                      </span>
                      <a
                        href={`mailto:${COMPANY_DETAILS.email}`}
                        className="text-sm font-semibold text-charcoal-900 dark:text-white hover:text-brand-red transition-colors"
                      >
                        {COMPANY_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-charcoal-400 block text-[10px] uppercase">
                        {isAr ? "عنوان الورشة بالرياض" : "FACILITY ADDRESS"}
                      </span>
                      <span className="font-body text-xs text-charcoal-700 dark:text-charcoal-300 block leading-relaxed">
                        {isAr ? COMPANY_DETAILS.address.arFull : COMPANY_DETAILS.address.enFull}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-charcoal-400 block text-[10px] uppercase">
                        {isAr ? "ساعات العمل الرسمية" : "WORKING HOURS"}
                      </span>
                      <span className="font-body text-xs text-charcoal-700 dark:text-charcoal-300 block">
                        {isAr ? COMPANY_DETAILS.hours.ar : COMPANY_DETAILS.hours.en}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="pt-3 border-t border-charcoal-100 dark:border-charcoal-800">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{isAr ? "محادثة فورية عبر واتساب" : "Direct WhatsApp Inquiry"}</span>
                  </a>
                </div>
              </div>

              {/* Privacy-Friendly Google Maps Embed Container */}
              <div className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-charcoal-700 dark:text-charcoal-300">
                    {isAr ? "موقع الورشة على الخريطة" : "RIYADH SINA'IYAH MAP"}
                  </span>
                  <a
                    href={COMPANY_DETAILS.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-brand-red hover:underline flex items-center gap-1"
                  >
                    <span>{isAr ? "فتح في خرائط جوجل" : "Open in Google Maps"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative h-48 w-full bg-charcoal-100 dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-8 h-8 text-brand-red mb-2" />
                  <span className="font-heading font-bold text-sm text-charcoal-900 dark:text-white">
                    {isAr ? "المدينة الصناعية (الصناعية) — الرياض 12871" : "Al Sina'iyah Industrial Area — Riyadh 12871"}
                  </span>
                  <span className="font-mono text-xs text-charcoal-500 mt-0.5">
                    2240 As Saman Al Saman Street
                  </span>
                  <a
                    href={COMPANY_DETAILS.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-3 py-1.5 bg-charcoal-900 text-white text-xs font-mono hover:bg-brand-red transition-colors industrial-cut-badge"
                  >
                    {isAr ? "توجيه نظام الملاحة (GPS)" : "Get Driving Directions"}
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Quotation Request Form */}
            <div className="lg:col-span-7 border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-6 sm:p-8 lg:p-10 shadow-hairline space-y-6">
              <div className="space-y-2 border-b border-charcoal-100 dark:border-charcoal-800 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-bold">
                  RFQ PORTAL · 24-HOUR ESTIMATE
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-charcoal-950 dark:text-white">
                  {t("form.submit")}
                </h3>
                <p className="font-body text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-400">
                  {t("lead")}
                </p>
              </div>

              {/* Success Notification */}
              {status === "success" && (
                <div className="p-5 border border-industrial-green/40 bg-industrial-green/10 text-charcoal-900 dark:text-white space-y-2">
                  <div className="flex items-center gap-2 text-industrial-green font-heading font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{t("form.successTitle")}</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm leading-relaxed text-charcoal-700 dark:text-charcoal-300">
                    {t("form.successDesc")}
                  </p>
                </div>
              )}

              {/* Error Notification */}
              {status === "error" && (
                <div className="p-4 border border-brand-red/40 bg-brand-red/10 text-brand-red space-y-1">
                  <div className="flex items-center gap-2 font-heading font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{t("form.errorTitle")}</span>
                  </div>
                  <p className="font-mono text-xs text-charcoal-800 dark:text-charcoal-200">
                    {errorMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field (hidden from real users, traps spam bots) */}
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField
                    id="fullName"
                    name="fullName"
                    label={t("form.fullName")}
                    placeholder={t("form.fullNamePlaceholder")}
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />

                  <InputField
                    id="company"
                    name="company"
                    label={t("form.company")}
                    placeholder={t("form.companyPlaceholder")}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField
                    id="phone"
                    name="phone"
                    type="tel"
                    label={t("form.phone")}
                    placeholder={t("form.phonePlaceholder")}
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />

                  <InputField
                    id="email"
                    name="email"
                    type="email"
                    label={t("form.email")}
                    placeholder={t("form.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <SelectField
                    id="equipmentType"
                    name="equipmentType"
                    label={t("form.equipmentType")}
                    placeholder={t("form.equipmentSelectDefault")}
                    required
                    options={equipmentOptions}
                    value={formData.equipmentType}
                    onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                  />

                  <InputField
                    id="powerRating"
                    name="powerRating"
                    label={t("form.powerRating")}
                    placeholder={t("form.powerRatingPlaceholder")}
                    value={formData.powerRating}
                    onChange={(e) => setFormData({ ...formData, powerRating: e.target.value })}
                  />
                </div>

                <TextareaField
                  id="message"
                  name="message"
                  label={t("form.message")}
                  placeholder={t("form.messagePlaceholder")}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <FileUploadField
                  id="fileUpload"
                  label={t("form.fileUpload")}
                  hint={t("form.fileUploadHint")}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    withChamfer
                    isLoading={status === "submitting"}
                    className="w-full sm:w-auto font-bold text-sm"
                  >
                    <span>
                      {status === "submitting" ? t("form.submitting") : t("form.submit")}
                    </span>
                    <ArrowIcon className="w-4 h-4 ms-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

