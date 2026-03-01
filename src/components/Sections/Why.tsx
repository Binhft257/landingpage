import { useTranslations } from "next-intl";

import Container from "@/components/UI/Container";
import WhyCard from "@/components/Why/WhyCard";
import WhyStatItem from "@/components/Why/WhyStatItem";

type Item = { title: string; desc: string };
type ItemMap = Record<string, Item>;

type Stat = { value: string; label: string };
type StatMap = Record<string, Stat>;

export default function Why() {
  const t = useTranslations("why");
  const whyStats = Object.values(t.raw("stats") as StatMap);
  const whyCards = Object.values(t.raw("cards") as ItemMap);

  return (
    <section className="py-14 md:py-16">
      <Container>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-black md:text-4xl">
              {t("title")}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-neutral-700 md:text-base">
              {t("desc")}
            </p>

            <div className="mt-8 h-px max-w-lg bg-neutral-200" />

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-6">
              {whyStats.map((stat, index) => (
                <WhyStatItem
                  key={`${index}-${stat.value}`}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
            {whyCards.map((card, index) => (
              <WhyCard
                key={`${index}-${card.title}`}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}