import { setRequestLocale } from "next-intl/server";

import CTA from "@/components/Sections/CTA";
import FAQ from "@/components/Sections/FAQ";
import FeatureStrip from "@/components/Sections/FeatureStrip";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import Modules from "@/components/Sections/Modules";
import Navbar from "@/components/Sections/NavBar";
import PlatformWhy from "@/components/Sections/Platform";
import Pricing from "@/components/Sections/Pricing";
import Problem from "@/components/Sections/Problem";
import Testimonials from "@/components/Sections/Testimonials";
import Why from "@/components/Sections/Why";
import { routing, type AppLocale } from "@/i18n/routing";

type LocalePageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "error";
export const dynamicParams = false;

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <Problem />
      <Modules />
      <PlatformWhy />
      <Why />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}