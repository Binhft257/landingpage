type WhyStatItemProps = {
  value: string;
  label: string;
};

export default function WhyStatItem({ value, label }: WhyStatItemProps) {
  return (
    <div>
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="mt-1 text-xs text-neutral-600">{label}</div>
    </div>
  );
}