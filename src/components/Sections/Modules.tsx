import { useTranslations } from "next-intl";

import ModuleCard from "@/components/Modules/ModuleItems";
import Container from "@/components/UI/Container";
import SectionHeading from "@/components/UI/SectionHeading";

type ModuleItem = {
  title: string;
  desc: string;
};

type ModuleMap = Record<string, ModuleItem>;

export default function Modules() {
  const t = useTranslations("modules");
  const itemsMap = t.raw("items") as ModuleMap;
  const modules: ModuleItem[] = Object.values(itemsMap);

  return (
    <section id="minigames" className="py-14 md:py-16">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((module, index) => (
            <ModuleCard
              key={`${index}-${module.title}`}
              title={module.title}
              desc={module.desc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}