import Image from "next/image";
import { ShieldCheck, Trophy } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-5 py-6 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10">
        <Image src="/hero-darts.svg" alt="" fill priority className="object-cover opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_38%,rgba(5,5,5,0.46)_100%)]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md bg-red-600 text-sm font-black text-white">SP</span>
          <span className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-200">Šipky Praha</span>
        </div>
        <a href="#turnaje" className="hidden text-sm font-semibold text-zinc-300 transition hover:text-white sm:block">
          Turnaje
        </a>
      </nav>

      <div className="mx-auto grid min-h-[calc(92vh-4.5rem)] max-w-6xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-red-200">
            <Trophy aria-hidden="true" size={15} />
            Steel darts Praha
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Šipky Praha</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Přivezeme do hospody profesionální steel darts setup a uděláme z běžného večera turnaj jako pro profíky.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#turnaje">Přihlásit se na turnaj</ButtonLink>
            <ButtonLink href="#hospody" variant="secondary">
              Chci turnaj ve své hospodě
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            ["Mobilní setup", "Terče, stojany, světla i scoring přivezeme a postavíme na místě."],
            ["Profi podmínky", "Hráči si vyzkouší atmosféru steel darts bez kompromisů."],
            ["Turnajový flow", "Registrace, pavouk, výsledky a průběh večera držíme pod kontrolou."],
          ].map(([title, text]) => (
            <div key={title} className="border border-zinc-800 bg-zinc-950/75 p-5 backdrop-blur">
              <div className="mb-4 grid size-10 place-items-center rounded-md bg-red-600/15 text-red-400">
                <ShieldCheck aria-hidden="true" size={20} />
              </div>
              <h2 className="text-lg font-black text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
