import { ChartNoAxesColumnIncreasing, MessageCircle, Trophy } from "lucide-react";
import { Section } from "@/components/section";

const items = [
  {
    title: "Zážitek jako na profi turnaji",
    text: "Hraješ na steel darts setupu s pořádným osvětlením, jasným scoringem a turnajovou atmosférou.",
    icon: Trophy,
  },
  {
    title: "Reálný progres",
    text: "Vidíš výsledky, porovnáváš se s ostatními a postupně můžeš budovat svoje místo v žebříčku.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Komunita kolem šipek",
    text: "Potkáš hráče z Prahy, zahraješ si bez stresu a poznáš hospody, kde šipky nejsou jen doplněk.",
    icon: MessageCircle,
  },
];

export function PlayersSection() {
  return (
    <Section id="hraci" label="Pro hráče" title="Vyzkoušej si šipky tak, jak se mají hrát.">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, text, icon: Icon }) => (
          <article key={title} className="border border-zinc-800 bg-zinc-950/60 p-6 transition hover:border-red-600/70">
            <Icon aria-hidden="true" className="mb-6 text-red-500" size={28} />
            <h3 className="text-xl font-black text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
