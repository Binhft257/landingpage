"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import FaqItemRow from "@/components/FAQ/FAQItemRow";
import Container from "@/components/UI/Container";
import SectionHeading from "@/components/UI/SectionHeading";

type FaqItem = { q: string; a: string };
type FaqItemsMap = Record<string, FaqItem>;

export default function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(3);

  const itemsMap = t.raw("items") as FaqItemsMap;
  const faqs: FaqItem[] = Object.values(itemsMap);

  return (
    <section className="py-14 md:py-16">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mx-auto max-w-5xl">
          {faqs.map((faq, index) => (
            <FaqItemRow
              key={`${index}-${faq.q}`}
              indexKey={`${index}-${faq.q}`}
              item={faq}
              isOpen={open === index}
              onToggle={() => setOpen(open === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}