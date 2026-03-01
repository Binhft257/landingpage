import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { routing, type AppLocale } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

function isLocale(value: string): value is AppLocale {
  return routing.locales.includes(value as AppLocale);
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "error";
export const dynamicParams = false;

const messagesMap = {
  vi: () => import("@/messages/vi.json"),
  en: () => import("@/messages/en.json")
} as const;

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await messagesMap[locale]()).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}