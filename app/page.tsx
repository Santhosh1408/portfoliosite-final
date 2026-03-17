import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTerminal from "@/components/AboutTerminal";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grid-paper min-h-screen">
      <Navbar />

      <div className="container-max">
        <section id="home" className="pt-8">
          <Hero />
          <AboutTerminal />
        </section>

        <section id="career" className="py-20">
          <Career />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}