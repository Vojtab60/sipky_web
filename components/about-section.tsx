import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="o-projektu" label="O projektu" title="Nejsme jen další hospoda se šipkami.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-lg leading-8 text-zinc-300">
          <p>
            Jsme parta šipkařů, která vozí profesionální steel darts setup přímo do pražských hospod.
          </p>
          <p>
            Nepřidáváme jen terč na zeď. Přivezeme profi terče, stabilní konstrukci, kvalitní osvětlení,
            scoring a organizaci turnaje od registrace až po výsledky.
          </p>
          <p>
            Díky tomu může hospoda nabídnout večer, který působí jako skutečný šipkařský event, a hráči si
            zahrají v podmínkách, které běžně znají z profesionálních turnajů.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {["Přijedeme", "Postavíme setup", "Odřídíme turnaj"].map((item) => (
            <div key={item} className="border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
