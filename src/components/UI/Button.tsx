import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "outline";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button"
}: ButtonProps) {
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-4 text-sm font-semibold transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-neutral-800"
      : "border border-black bg-white text-black hover:bg-neutral-50";

  const mergedClassName = `${base} ${styles} ${className}`;

  if (href && href.startsWith("#")) {
    return (
      <a className={mergedClassName} href={href}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link className={mergedClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={mergedClassName}>
      {children}
    </button>
  );
}