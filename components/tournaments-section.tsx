import { CalendarDays, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import tournaments from "@/data/tournaments.json";

export function TournamentsSection() {
  return (
    <Section id="turnaje" label="Nadcházející turnaje" title="Nejbližší večery na terči.">
      <div className="grid gap-4">
        {tournaments.map((tournament) => (
          <article
            key={tournament.id}
            className="grid gap-5 border border-zinc-800 bg-zinc-950/70 p-5 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div>
              <div className="mb-3 flex flex-wrap gap-3 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays aria-hidden="true" size={16} className="text-red-500" />
                  {tournament.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin aria-hidden="true" size={16} className="text-red-500" />
                  {tournament.venue}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">{tournament.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{tournament.address}</p>
            </div>
            <div className="flex items-center gap-3 sm:justify-end">
              <span className="rounded-md border border-red-500/30 bg-red-950/30 px-3 py-2 text-sm font-bold text-red-100">
                {tournament.status}
              </span>
              <span className="text-sm font-semibold text-zinc-400">{tournament.spots} míst</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
