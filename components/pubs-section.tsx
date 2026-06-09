import { Beer, Megaphone, Settings } from "lucide-react";
import { Section } from "@/components/section";

const items = [
  {
    title: "Program, který přitáhne lidi",
    text: "Turnaj dá večeru jasný důvod přijít, zůstat déle a vracet se na další termíny.",
    icon: Settings,
  },
  {
    title: "Bez investice do vybavení",
    text: "Setup přivezeme, postavíme, otestujeme a po akci zase odvezeme.",
    icon: Beer,
  },
  {
    title: "Obsah pro komunitu",
    text: "Hospoda získá sportovní event, výsledky, příběhy a důvod komunikovat na sítích.",
    icon: Megaphone,
  },
];

export function PubsSection() {
  return (
    <Section id="hospody" label="Pro hospody" title="Přivezeme šipkařský event bez práce navíc pro podnik.">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, text, icon: Icon }) => (
          <article key={title} className="border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-xl font-black leading-7 text-white">{title}</h3>
              <Icon aria-hidden="true" className="shrink-0 text-red-500" size={28} />
            </div>
            <p className="text-sm leading-6 text-zinc-400">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
