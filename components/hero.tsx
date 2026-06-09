import Image from "next/image";
import { Trophy } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black px-5 py-6 sm:px-8 lg:px-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-photo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] brightness-[1.35] contrast-[1.12] saturate-[1.12]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.52)_0%,rgba(5,5,5,0.22)_42%,rgba(5,5,5,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.12)_48%,rgba(5,5,5,0.64)_100%)]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md bg-red-600 text-sm font-black text-white">SP</span>
          <span className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-200">Šipky Praha</span>
        </div>
        <a href="#turnaje" className="hidden text-sm font-semibold text-zinc-300 transition hover:text-white sm:block">
          Turnaje
        </a>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl items-end py-16">
        <div className="max-w-4xl pb-8">
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
      </div>
    </section>
  );
}
