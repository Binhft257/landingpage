type ProblemItemProps = {
  text: string;
};

export default function ProblemItem({ text }: ProblemItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-11 w-11 shrink-0 rounded-full bg-neutral-200" />
      <p className="mt-4 max-w-xs text-sm text-neutral-700">{text}</p>
    </div>
  );
}