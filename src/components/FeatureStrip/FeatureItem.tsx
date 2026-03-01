type FeatureItemProps = {
    title: string;
    desc: string;
};
export default function FeatureItem({ title, desc }: FeatureItemProps) {
    return (
        <div className="flex items-start gap-4">
            <div className="h-11 w-11 shrink-0 rounded-full bg-neutral-200" />
            <div>
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{desc}</p>
            </div>
        </div>
    )
}