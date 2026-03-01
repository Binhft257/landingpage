import { useTranslations } from "next-intl";

import ProblemItem from "@/components/Problem/ProblemItem";
import Container from "@/components/UI/Container";
import SectionHeading from "@/components/UI/SectionHeading";

type ProblemItems = Record<string, string>;

export default function Problem() {
  const t = useTranslations("problem");
  const itemsMap = t.raw("items") as ProblemItems;
  const painPoints: string[] = Object.values(itemsMap);

  return (
    <section id="solutions" className="py-14 md:py-16">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {painPoints.map((text, index) => (
            <ProblemItem key={`${index}-${text}`} text={text} />
          ))}
        </div>
      </Container>
    </section>
  );
}