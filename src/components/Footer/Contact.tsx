import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("footer");

  return (
    <div>
      <div className="font-extrabold">{t("contactTitle")}</div>

      <div className="mt-3 space-y-4 text-sm text-neutral-700">
        {/* Hotline */}
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-neutral-200" />
          <div className="break-words">
            {t("hotline")}:{" "}
            <span className="font-semibold text-[#0088FF]">0862 392 204</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-neutral-200" />
          <div className="break-words">
            {t("email")}:{" "}
            <span className="font-semibold text-[#0088FF]">
              quybka@gmail.com
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-neutral-200" />
          <div className="break-words">
            {t("address")}:{" "}
            <span className="font-semibold text-[#0088FF]">
              Số 9, ngõ 11, phố Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}