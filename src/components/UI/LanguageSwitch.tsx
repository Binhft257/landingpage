"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

export default function LanguageSwitch() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const currentLabel = locale === "vi" ? "Tiếng Việt" : "English";

  const switchLocale = (nextLocale: AppLocale) => {
    if (nextLocale === locale) {
      setOpen(false);
      return;
    }

    const currentScrollY = window.scrollY;
    const hash = window.location.hash || "";

    startTransition(() => {
      router.replace(`${pathname}${hash}`, {
        locale: nextLocale,
        scroll: false
      });
    });

    let retryCount = 0;

    const restoreScroll = () => {
      retryCount += 1;
      window.scrollTo({ top: currentScrollY, behavior: "auto" });

      if (retryCount < 4) {
        requestAnimationFrame(restoreScroll);
      }
    };

    requestAnimationFrame(restoreScroll);
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current) {
        return;
      }

      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={toggleMenu}
        disabled={isPending}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-busy={isPending}
        className="inline-flex min-w-[128px] items-center justify-between gap-2 rounded-[14px] border border-neutral-300 bg-white px-3 py-2 text-[14px] font-semibold text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:border-neutral-400 hover:shadow-[0_4px_14px_rgba(0,0,0,0.10)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[138px]"
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 text-[15px] leading-none text-sky-500">
            🌐
          </span>
          <span className="truncate">{isPending ? "..." : currentLabel}</span>
        </span>

        <span
          className={`shrink-0 text-neutral-500 transition-transform duration-200 ease-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 8L10 12L14 8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="absolute left-0 right-0 top-full h-2" />

      <div
        className={`absolute right-0 top-[calc(100%+8px)] z-50 w-[180px] max-w-[calc(100vw-2rem)] origin-top-right rounded-2xl border border-neutral-200 bg-white p-2 text-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
        role="menu"
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => switchLocale("en")}
          role="menuitem"
          className={`flex w-full items-center rounded-xl px-3.5 py-2.5 text-left text-[14px] font-medium transition-all duration-150 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 ${
            locale === "en"
              ? "bg-neutral-100 text-neutral-900"
              : "text-neutral-700"
          }`}
        >
          English
        </button>

        <button
          type="button"
          onClick={() => switchLocale("vi")}
          role="menuitem"
          className={`mt-1 flex w-full items-center rounded-xl px-3.5 py-2.5 text-left text-[14px] font-medium transition-all duration-150 hover:bg-sky-50 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500/30 ${
            locale === "vi" ? "bg-sky-50 text-sky-600" : "text-neutral-700"
          }`}
        >
          Tiếng Việt
        </button>
      </div>
    </div>
  );
}