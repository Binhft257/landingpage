import { useTranslations } from "next-intl";

import Button from "@/components/UI/Button";
import Container from "@/components/UI/Container";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-14 md:py-16">
      <Container>
        <div className="text-center">
          <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {t("title")}
          </h3>

          <p className="mt-3 text-sm text-neutral-600 md:text-base">
            {t("subtitle")}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="#demo" variant="primary">
              {t("demo")}
            </Button>
            <Button href="#contact" variant="outline">
              {t("consult")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}