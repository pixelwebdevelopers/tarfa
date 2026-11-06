import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Barlow, IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { COMPANY_DETAILS } from "@/config/contact";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "تارفا لصيانة المعدات | إعادة لف وصيانة المحركات والضواغط | الرياض"
    : "Tarfa Equipment Maintenance | Industrial Rewinding & Overhaul | Riyadh";

  const description = isAr
    ? "ورشة هندسية متخصصة منذ عام 1983 في الرياض لإعادة لف وصيانة المحركات الكهربائية، ضواغط التبريد، المضخات، المولدات، والمحولات الكهربائية."
    : "Specialized industrial electromechanical workshop since 1983 in Riyadh, Saudi Arabia. Rewinding, repair, and dynamic testing of motors, chiller compressors, pumps, and transformers.";

  return {
    title: {
      default: title,
      template: `%s | ${isAr ? "تارفا لصيانة المعدات" : "Tarfa Equipment Maintenance"}`,
    },
    description,
    keywords: [
      "Tarfa Equipment Maintenance",
      "تارفا لصيانة المعدات",
      "motor rewinding Riyadh",
      "إعادة لف المحركات الرياض",
      "chiller compressor repair",
      "صيانة ضواغط التبريد",
      "stator core testing",
      "فحص قلوب الستاتور",
      "dynamic rotor balancing",
      "موازنة الروتور الحركية",
      "industrial pumps repair",
      "صيانة المضخات الصناعية",
      "Al Sinaiyah Riyadh",
      "المدينة الصناعية الرياض",
    ],
    authors: [{ name: COMPANY_DETAILS.name.en }],
    creator: COMPANY_DETAILS.name.en,
    publisher: COMPANY_DETAILS.name.en,
    metadataBase: new URL("https://tarfamaintenance.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      url: `https://tarfamaintenance.com/${locale}`,
      siteName: isAr ? COMPANY_DETAILS.name.ar : COMPANY_DETAILS.name.en,
      title,
      description,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Tarfa Equipment Maintenance Workshop",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const description = isAr
    ? "ورشة هندسية متخصصة منذ عام 1983 في الرياض لإعادة لف وصيانة المحركات الكهربائية، ضواغط التبريد، المضخات، المولدات، والمحولات الكهربائية."
    : "Specialized industrial electromechanical workshop since 1983 in Riyadh, Saudi Arabia. Rewinding, repair, and dynamic testing of motors, chiller compressors, pumps, and transformers.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": "https://tarfamaintenance.com/#organization",
        name: isAr ? COMPANY_DETAILS.name.ar : COMPANY_DETAILS.name.en,
        alternateName: [
          "Tarfa Equipment Maintenance",
          "تارفا لصيانة المعدات",
          "House of Quality",
          "Where Excellence Meets Expertise",
        ],
        url: "https://tarfamaintenance.com",
        logo: "https://tarfamaintenance.com/images/logo.png",
        image: "https://tarfamaintenance.com/images/og-image.jpg",
        description,
        telephone: "+966502640474",
        email: COMPANY_DETAILS.email,
        foundingDate: "1983",
        address: {
          "@type": "PostalAddress",
          streetAddress: "As Saman Al Saman, 2240, Al Sina'iyah",
          addressLocality: "Riyadh",
          postalCode: "12871",
          addressCountry: "SA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.6465,
          longitude: 46.7412,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
            ],
            opens: "07:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isAr ? "خدمات الصيانة وإعادة اللف" : "Industrial Maintenance & Rewinding Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isAr ? "إعادة لف وصيانة المحركات الكهربائية" : "Electric Motor Rewinding & Overhaul",
                description: isAr
                  ? "إعادة لف وصيانة المحركات الحثية ومحركات التيار المستمر حتى 2000+ كيلوواط"
                  : "AC & DC motor rewinding up to 2,000+ kW, VPI insulation, bearing replacement.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isAr ? "إعادة بناء ضواغط مبردات الشيلر" : "Chiller Compressor Rebuilding",
                description: isAr
                  ? "صيانة وضغط واختبار ضواغط الشيلر الترددية والحلزونية والطاردة المركزية"
                  : "Screw, reciprocating, and centrifugal compressor rebuilding and hermetic testing.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isAr ? "صيانة وتجديد المضخات الصناعية" : "Industrial Water Pump Overhauls",
                description: isAr
                  ? "صيانة مضخات الطرد المركزي، المضخات الغاطسة ونزح المياه، واستبدال موانع التسرب"
                  : "Centrifugal, multistage, and submersible pump rebuilds, mechanical seal renewal.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isAr ? "فحص قلوب الستاتور واللحام النقطي" : "Stator Core Testing & Re-Varnishing",
                description: isAr
                  ? "فحص فقدان طاقة القلب الحديدي، تنظيف وإعادة الطلاء بالعزل، ولحام نقطي للشرائح"
                  : "Loop ring core loss testing, lamination restacking, spot welding, and varnish curing.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isAr ? "الموازنة الديناميكية الدقيقة للروتور" : "Dynamic Rotor Balancing & Static Testing",
                description: isAr
                  ? "موازنة حركية للأعضاء الدوارة بموجب معايير ISO 1940 وفحوصات كهربائية شاملة"
                  : "Multi-plane dynamic balancing up to 5,000 kg, surge comparison, Baker testing.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${barlow.variable} ${ibmPlexArabic.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/AFDiwa.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ArialUnicodeMS.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ArialBold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`min-h-screen flex flex-col font-body ${
          isAr ? "font-arabic" : "font-heading"
        } antialiased selection:bg-brand-red selection:text-white bg-canvas-warm overflow-x-clip max-w-full`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1 w-full overflow-x-clip">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

