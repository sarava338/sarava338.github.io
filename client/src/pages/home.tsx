import { Link } from "wouter";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tight text-white">
            DEV<span className="text-primary">.PORTFOLIO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Experience</a>
            <a href="#" className="hover:text-white transition-colors">Skills</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <footer className="py-8 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground font-mono">
          <p>© 2024 Built with React & Spring Boot Principles.</p>
        </div>
      </footer>
    </div>
  );
}
