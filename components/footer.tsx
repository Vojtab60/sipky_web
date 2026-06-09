import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black text-white">Šipky Praha</p>
          <p className="mt-2 text-sm text-zinc-500">Profesionální steel darts turnaje v Praze.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-zinc-300">
          <a href="tel:+420000000000" className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-3 transition hover:border-red-500 hover:text-white">
            <Phone aria-hidden="true" size={16} />
            Kontakt
          </a>
          <a href="https://instagram.com" className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-3 transition hover:border-red-500 hover:text-white">
            <Instagram aria-hidden="true" size={16} />
            Instagram
          </a>
          <a href="mailto:info@sipkypraha.cz" className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-3 transition hover:border-red-500 hover:text-white">
            <Mail aria-hidden="true" size={16} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
