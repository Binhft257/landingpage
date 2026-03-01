import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/UI/Container";
import SectionHeading from "@/components/UI/SectionHeading";

type Item = { title: string; desc: string };
type ItemMap = Record<string, Item>;

export default function Platform() {
  const t = useTranslations("platform");
  const platformItems = Object.values(t.raw("items") as ItemMap);

  return (
    <section className="py-14 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-14">
          <div className="max-w-[620px]">
            <SectionHeading
              title={t("title")}
              subtitle={t("desc")}
              align="left"
            />

            <div className="mt-8 space-y-7">
              {platformItems.map((item, index) => (
                <div
                  key={`${index}-${item.title}`}
                  className="flex items-start gap-5"
                >
                  <div className="mt-1 h-14 w-14 shrink-0 rounded-full bg-neutral-200" />
                  <div>
                    <h3 className="text-[22px] font-extrabold leading-8 text-black">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[430px] text-[15px] leading-7 text-neutral-700">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/image.png"
              alt="Platform preview"
              width={1200}
              height={900}
              className="h-auto w-full max-w-[620px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}