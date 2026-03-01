"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import TestimonialCard from "@/components/Testimonials/TestimonialCard";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  brand: string;
};

type TestimonialCarouselProps = {
  items: Testimonial[];
  intervalMs?: number;
};

function getSlidesPerView() {
  if (typeof window === "undefined") {
    return 1;
  }

  return window.matchMedia("(min-width: 768px)").matches ? 3 : 1;
}

export default function TestimonialsCarousel({
  items,
  intervalMs = 3000
}: TestimonialCarouselProps) {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(true);
  const timerRef = useRef<number | null>(null);

  const count = items.length;
  const step = Math.min(slidesPerView, Math.max(count, 1));
  const shouldCarousel = count > step;

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(getSlidesPerView());
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const slides = useMemo(() => {
    if (count === 0) {
      return [];
    }

    if (!shouldCarousel) {
      return items;
    }

    const head = items.slice(0, step);
    const tail = items.slice(-step);

    return [...tail, ...items, ...head];
  }, [items, count, step, shouldCarousel]);

  useEffect(() => {
    if (count === 0) {
      return;
    }

    setAnimating(false);
    setIndex(shouldCarousel ? step : 0);
    requestAnimationFrame(() => setAnimating(true));
  }, [count, step, shouldCarousel]);

  useEffect(() => {
    if (!shouldCarousel) {
      return;
    }

    timerRef.current = window.setInterval(() => {
      setAnimating(true);
      setIndex((currentIndex) => currentIndex + step);
    }, intervalMs);

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [shouldCarousel, intervalMs, step]);

  const onTransitionEnd = () => {
    if (!shouldCarousel) {
      return;
    }

    const maxIndex = step + count;

    if (index >= maxIndex) {
      setAnimating(false);
      setIndex(step);
      requestAnimationFrame(() => setAnimating(true));
    }

    if (index < step) {
      setAnimating(false);
      setIndex(step + (count - (count % step || step)));
      requestAnimationFrame(() => setAnimating(true));
    }
  };

  const pageCount = shouldCarousel ? Math.ceil(count / step) : 1;
  const activePage = shouldCarousel
    ? Math.floor((index - step) / step) % pageCount
    : 0;

  const slideBasis = `${100 / slidesPerView}%`;
  const translatePercent = index * (100 / slidesPerView);

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <div
          className={[
            "flex",
            animating ? "transition-transform duration-500 ease-in-out" : ""
          ].join(" ")}
          style={{ transform: `translateX(-${translatePercent}%)` }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((item, slideIndex) => (
            <div
              key={`${slideIndex}-${item.name}`}
              className="relative shrink-0"
              style={{ flexBasis: slideBasis }}
            >
              {slidesPerView === 3 && slideIndex % slidesPerView !== 0 ? (
                <div className="absolute bottom-4 left-0 top-4 hidden w-px bg-neutral-200 md:block" />
              ) : null}

              <div className="h-full md:px-6">
                <TestimonialCard {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: pageCount }).map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={
              dotIndex === activePage
                ? "h-2 w-10 rounded-full bg-black"
                : "h-2 w-2 rounded-full bg-neutral-300"
            }
          />
        ))}
      </div>
    </div>
  );
}