import { useTranslations } from "next-intl";

import Button from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import SectionHeading from "@/components/UI/SectionHeading";

type PricingRow = {
  label: string;
  starter: string;
  growth: string;
  enterprise: string;
};

function CellValue({ value }: { value: string }) {
  const normalizedValue = value.trim();

  if (normalizedValue === "✓" || normalizedValue === "✔") {
    return (
      <span
        className="mx-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white"
        aria-label="Included"
      >
        <span className="text-[11px] leading-none">✓</span>
      </span>
    );
  }

  if (
    normalizedValue === "—" ||
    normalizedValue === "-" ||
    normalizedValue === ""
  ) {
    return <span>&nbsp;</span>;
  }

  return <span>{value}</span>;
}

function MauLabel({ text }: { text: string }) {
  if (text !== "MAU") {
    return <span>{text}</span>;
  }

  return (
    <span className="inline-flex items-center gap-2">
      <span>{text}</span>
      <span
        className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-200 text-[10px] font-bold text-neutral-700"
        aria-label="Info"
        title="Monthly Active Users"
      >
        ?
      </span>
    </span>
  );
}

export default function Pricing() {
  const t = useTranslations("pricing");
  const rows = t.raw("table.rows") as PricingRow[];

  return (
    <section id="pricing" className="py-14 md:py-16">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="overflow-x-auto bg-white">
          <table className="w-full min-w-[920px] border-collapse text-sm">
            <colgroup>
              <col className="w-[28%]" />
              <col className="w-[24%]" />
              <col className="w-[24%]" />
              <col className="w-[24%]" />
            </colgroup>

            <thead>
              <tr className="align-top">
                <th className="px-6 py-6 text-left text-[20px] font-extrabold leading-7 text-black">
                  {t("columns.plan")}
                </th>

                <th className="px-6 py-6 text-center">
                  <div className="text-[20px] font-extrabold leading-7 text-black">
                    {t("columns.starter.name")}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-neutral-600">
                    {t("columns.starter.desc")}
                  </div>
                </th>

                <th className="rounded-t-3xl bg-neutral-100 px-6 py-6 text-center">
                  <div className="text-[20px] font-extrabold leading-7 text-black">
                    {t("columns.growth.name")}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-neutral-600">
                    {t("columns.growth.desc")}
                  </div>
                </th>

                <th className="px-6 py-6 text-center">
                  <div className="text-[20px] font-extrabold leading-7 text-black">
                    {t("columns.enterprise.name")}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-neutral-600">
                    {t("columns.enterprise.desc")}
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => {
                const isFirst = index === 0;

                return (
                  <tr
                    key={`${row.label}-${index}`}
                    className="border-t border-neutral-200"
                  >
                    <td className="px-6 py-4 font-semibold text-black">
                      {isFirst ? <MauLabel text={row.label} /> : row.label}
                    </td>

                    <td className="px-6 py-4 text-center text-neutral-700">
                      <CellValue value={row.starter} />
                    </td>

                    <td className="bg-neutral-100 px-6 py-4 text-center text-neutral-700">
                      <CellValue value={row.growth} />
                    </td>

                    <td className="px-6 py-4 text-center text-neutral-700">
                      <CellValue value={row.enterprise} />
                    </td>
                  </tr>
                );
              })}

              <tr className="border-t border-neutral-200">
                <td className="px-6 py-8 align-top text-[20px] font-extrabold leading-7 text-black">
                  {t("priceRow.label")}
                </td>

                <td className="px-6 py-8 text-center align-bottom">
                  <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                    {t("priceRow.monthlyFrom")}
                  </div>
                  <div className="mt-2 text-[28px] font-extrabold leading-none tracking-tight text-black md:text-[52px]">
                    {t("priceRow.starterPrice")}
                  </div>
                  <div className="mt-5 flex justify-center">
                    <Button
                      href="#contact"
                      variant="primary"
                      className="px-5 py-2.5 text-sm"
                    >
                      {t("priceRow.starterCta")}
                    </Button>
                  </div>
                </td>

                <td className="rounded-b-3xl bg-neutral-100 px-6 py-8 text-center align-bottom">
                  <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                    {t("priceRow.monthlyFrom")}
                  </div>
                  <div className="mt-2 text-[28px] font-extrabold leading-none tracking-tight text-black md:text-[52px]">
                    {t("priceRow.growthPrice")}
                  </div>
                  <div className="mt-5 flex justify-center">
                    <Button
                      href="#contact"
                      variant="primary"
                      className="px-5 py-2.5 text-sm"
                    >
                      {t("priceRow.growthCta")}
                    </Button>
                  </div>
                </td>

                <td className="px-6 py-8 text-center align-bottom">
                  <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                    {t("priceRow.monthlyFrom")}
                  </div>
                  <div className="mt-2 text-[28px] font-extrabold leading-none tracking-tight text-black md:text-[52px]">
                    {t("priceRow.enterprisePrice")}
                  </div>
                  <div className="mt-5 flex justify-center">
                    <Button
                      href="#contact"
                      variant="primary"
                      className="px-5 py-2.5 text-sm"
                    >
                      {t("priceRow.enterpriseCta")}
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}