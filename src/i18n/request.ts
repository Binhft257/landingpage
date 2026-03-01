import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing, type AppLocale } from "@/i18n/routing";

function isLocale(value: string): value is AppLocale {
  return routing.locales.includes(value as AppLocale);
}

const messagesMap = {
  vi: () => import("@/messages/vi.json"),
  en: () => import("@/messages/en.json")
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !isLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await messagesMap[locale]()).default
  };
});