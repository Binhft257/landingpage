import { useTranslations } from "next-intl";

import Brand from "@/components/Footer/Brand";
import Contact from "@/components/Footer/Contact";
import Subscribe from "@/components/Footer/Subcribe";
import Container from "@/components/UI/Container";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer id="contact" className="border-t border-neutral-200 bg-[#f3f3f3]">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
          <Brand />
          <Contact />
          <Subscribe />
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-200 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>{t("copyright")}</div>

          <div className="flex gap-4">
            <a className="hover:text-neutral-700" href="#">
              {t("privacy")}
            </a>
            <a className="hover:text-neutral-700" href="#">
              {t("terms")}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}