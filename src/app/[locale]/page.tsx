import React from "react";
import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { ServicesIndexTable } from "@/components/home/ServicesIndexTable";
import { CoreMaintenanceMosaic } from "@/components/home/CoreMaintenanceMosaic";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { IndustriesSplit } from "@/components/home/IndustriesSplit";
import { ClientsWall } from "@/components/home/ClientsWall";
import { ClosingCtaBand } from "@/components/home/ClosingCtaBand";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero: Asymmetric left-aligned headline + real workshop photo with chamfer mask */}
      <HeroSection />

      {/* 2. Credibility strip: 4-column client-confirmed facts */}
      <CredibilityStrip />

      {/* 3. Services as an indexed list/table (not cards) with hover reveal */}
      <ServicesIndexTable />

      {/* 4. Full-bleed dark section: Core Maintenance asymmetric mosaic with real photos */}
      <CoreMaintenanceMosaic />

      {/* 5. 7-step industrial workflow timeline */}
      <ProcessTimeline />

      {/* 6. Industries: split layout with real plant photo and clean list */}
      <IndustriesSplit />

      {/* 7. Clients: restrained wall of verified corporate names */}
      <ClientsWall />

      {/* 8. Closing CTA band with phone, WhatsApp and quote gateway */}
      <ClosingCtaBand />
    </div>
  );
}
