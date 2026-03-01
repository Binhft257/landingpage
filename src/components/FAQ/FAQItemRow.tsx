"use client";

type FaqItem = { q: string; a: string };

type Props = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  indexKey: string;
};

export default function FaqItemRow({
  item,
  isOpen,
  onToggle,
  indexKey,
}: Props) {
  return (
    <div key={indexKey} className="border-t border-neutral-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-6 px-6 py-7 text-left md:px-8"
      >
        <div className="flex w-8 shrink-0 items-center justify-center text-[28px] font-bold leading-none text-black">
          {isOpen ? "−" : "+"}
        </div>

        <div className="flex-1">
          <div className="text-[22px] font-extrabold leading-8 text-black">
            {item.q}
          </div>

          {isOpen ? (
            <div className="mt-6 text-[15px] leading-8 text-neutral-700">
              {item.a}
            </div>
          ) : null}
        </div>
      </button>
    </div>
  );
}