import { clsx } from "clsx";

type SectionProps = {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("border-t border-zinc-800/80 px-5 py-20 sm:px-8 lg:px-10", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-red-500">{label}</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
