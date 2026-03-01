import { useTranslations } from "next-intl";

import FeatureItem from "@/components/FeatureStrip/FeatureItem";
import Container from "@/components/UI/Container";

type Feature = { title: string; desc: string };
type FeatureMap = Record<string, Feature>;

export default function FeatureStrip() {
  const t = useTranslations("featureStrip");
  const itemsMap = t.raw("items") as FeatureMap;

  const items: Feature[] = Object.values(itemsMap);

  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <FeatureItem
              key={`${index}-${item.title}`}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}