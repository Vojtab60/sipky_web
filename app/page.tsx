import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PubsSection } from "@/components/pubs-section";
import { PlayersSection } from "@/components/players-section";
import { TournamentsSection } from "@/components/tournaments-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <PlayersSection />
      <PubsSection />
      <TournamentsSection />
      <Footer />
    </main>
  );
}
