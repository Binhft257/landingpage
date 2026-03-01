import { useTranslations } from "next-intl";

import Button from "@/components/UI/Button";
import Communication from "@/components/UI/Communication";

export default function Subscribe() {
  const t = useTranslations("footer");

  return (
    <div>
      <div className="font-extrabold">{t("subscribeTitle")}</div>
      <p className="mt-3 text-sm text-neutral-600">{t("subscribeDesc")}</p>

      <form className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="email"
          className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-neutral-500"
          placeholder={t("emailPlaceholder")}
        />

        <Button
          variant="primary"
          type="submit"
          className="h-10 w-full whitespace-nowrap px-4 text-sm sm:w-auto"
        >
          {t("subscribeBtn")}
        </Button>
      </form>

      <Communication />
    </div>
  );
}