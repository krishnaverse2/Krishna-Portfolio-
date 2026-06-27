import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#222]">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}