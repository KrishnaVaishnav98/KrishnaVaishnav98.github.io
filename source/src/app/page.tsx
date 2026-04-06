import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import VersionTimeline from "@/components/VersionTimeline";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Failures from "@/components/Failures";
import Performance from "@/components/Performance";
import HowIThink from "@/components/HowIThink";
import GitHubCalendar from "@/components/GitHubCalendar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <VersionTimeline />
      <CaseStudy />
      <Projects />
      <CurrentlyBuilding />
      <Failures />
      <Performance />
      <HowIThink />
      <GitHubCalendar />
      <Contact />
    </main>
  );
}
