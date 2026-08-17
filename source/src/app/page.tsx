import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollPath from "@/components/ScrollPath";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <ScrollPath />
        <div className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
