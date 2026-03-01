type ModuleItem = {
  title: string;
  desc: string;
};

export default function ModuleCard({ title, desc }: ModuleItem) {
  return (
    <div className="rounded-[20px] bg-neutral-100 px-6 py-7">
      <div className="flex justify-center">
        <div className="h-14 w-14 rounded-full bg-neutral-200" />
      </div>

      <h3 className="mt-7 text-center text-[18px] font-extrabold leading-7 text-black">
        {title}
      </h3>

      <p className="mt-3 text-center text-[14px] leading-7 text-neutral-700">
        {desc}
      </p>
    </div>
  );
}