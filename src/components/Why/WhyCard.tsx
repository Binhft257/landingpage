type WhyCardProps = {
  title: string;
  desc: string;
};

export default function WhyCard({ title, desc }: WhyCardProps) {
  return (
    <div>
      <div className="h-14 w-14 rounded-full bg-neutral-200" />

      <h4 className="mt-6 text-[18px] font-extrabold leading-7 text-black">
        {title}
      </h4>

      <p className="mt-2 max-w-[260px] text-[15px] leading-7 text-neutral-700">
        {desc}
      </p>
    </div>
  );
}