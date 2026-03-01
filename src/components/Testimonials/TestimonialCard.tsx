import Image from "next/image";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  brand: string;
};

export default function TestimonialCard({
  text,
  name,
  role,
  brand,
}: Testimonial) {
  return (
    <article className="flex h-full min-h-[430px] flex-col px-6 py-4 md:px-8 md:py-3">
      <div className="mb-8">
        <Image
          src="/avatar.png"
          width={56}
          height={56}
          alt="Avatar"
          className="h-14 w-14 object-contain opacity-80"
        />
      </div>

      <p className="max-w-[320px] text-[15px] italic leading-[1.75] text-neutral-900">
        {text}
      </p>

      <div className="mt-10">
        <div className="text-[16px] font-semibold leading-6 text-black">
          {name}
        </div>

        <div className="mt-1 text-[12px] leading-5 text-neutral-800">
          {role}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Image
            src="/Master Wire.png"
            width={28}
            height={18}
            alt="Master Wire"
            className="h-auto w-[28px] object-contain"
          />
          <span className="text-[13px] font-semibold leading-none text-black">
            {brand}
          </span>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <Image
          src="/quote-bottom.png"
          width={24}
          height={24}
          alt="Quote"
          className="h-6 w-6 object-contain"
        />
      </div>
    </article>
  );
}