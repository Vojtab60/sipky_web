import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold uppercase tracking-wide transition duration-200",
        variant === "primary"
          ? "bg-red-600 text-white shadow-[0_0_32px_rgba(220,38,38,0.3)] hover:bg-red-500"
          : "border border-zinc-700 bg-zinc-950/70 text-zinc-100 hover:border-red-500 hover:text-white",
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" size={17} strokeWidth={2.4} />
    </Link>
  );
}
