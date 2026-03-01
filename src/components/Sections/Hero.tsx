import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/components/UI/Button";
import Container from "@/components/UI/Container";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="pt-10 md:pt-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div className="max-w-[560px]">
            <h1 className="whitespace-pre-line text-4xl font-extrabold leading-[1.02] tracking-tight text-black md:text-6xl">
              {t("title")}
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-8 text-neutral-700 md:text-lg">
              {t("desc")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#demo" variant="primary" className="px-6 py-3">
                {t("ctaDemo")}
              </Button>
              <Button href="#contact" variant="outline" className="px-6 py-3">
                {t("ctaConsult")}
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/image.png"
              alt="image"
              width={1200}
              height={900}
              className="h-auto w-full max-w-[560px] object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200" />
      </Container>
    </section>
  );
}