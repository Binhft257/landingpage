import Image from "next/image";
import { useTranslations } from "next-intl";

import Communication from "@/components/UI/Communication";

export default function Brand() {
  const t = useTranslations("footer");

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image src="/Master Wire.png" width={50} height={50} alt="logo" />
        <div className="font-extrabold">{t("brand")}</div>
      </div>

      <p className="mt-3 text-sm text-neutral-600">{t("about")}</p>

      <Communication />
    </div>
  );
}