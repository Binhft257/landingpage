"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

import Container from "@/components/UI/Container";
import LanguageSwitch from "@/components/UI/LanguageSwitch";

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/Master Wire.png" width={50} height={50} alt="Logo" />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-700 md:flex">
          <button
            type="button"
            className="cursor-pointer hover:text-black"
            onClick={() => scrollToId("home")}
          >
            {t("home")}
          </button>
          <button
            type="button"
            className="cursor-pointer hover:text-black"
            onClick={() => scrollToId("solutions")}
          >
            {t("solutions")}
          </button>
          <button
            type="button"
            className="cursor-pointer hover:text-black"
            onClick={() => scrollToId("minigames")}
          >
            {t("minigames")}
          </button>
          <button
            type="button"
            className="cursor-pointer hover:text-black"
            onClick={() => scrollToId("contact")}
          >
            {t("contact")}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((previous) => !previous)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-neutral-300 text-lg font-bold hover:bg-neutral-50 md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <Container className="py-3">
            <nav className="flex flex-col">
              <button
                type="button"
                className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-black"
                onClick={() => scrollToId("home")}
              >
                {t("home")}
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-black"
                onClick={() => scrollToId("solutions")}
              >
                {t("solutions")}
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-black"
                onClick={() => scrollToId("minigames")}
              >
                {t("minigames")}
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-black"
                onClick={() => scrollToId("contact")}
              >
                {t("contact")}
              </button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}