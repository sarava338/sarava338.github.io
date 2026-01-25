import { motion } from "framer-motion";
import { ArrowRight, Terminal, Database, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 z-0 tech-grid-bg opacity-20 pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6 text-primary font-mono text-sm tracking-widest uppercase">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            System Status: Online
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-white mb-6">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Robust Solutions
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl font-light">
            Full Stack Developer specializing in <strong className="text-white font-medium">Java Spring Boot</strong> and <strong className="text-white font-medium">React</strong>. 
            Leveraging 3 years of deep integration expertise to build scalable, resilient web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-base h-12 px-8">
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 text-white font-mono text-base h-12 px-8">
              Download CV
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-mono font-bold text-white mb-1">6<span className="text-primary text-lg">mos</span></div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Full Stack Dev</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-white mb-1">3<span className="text-secondary-foreground text-lg">yrs</span></div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Integration Specialist</div>
            </div>
            <div className="hidden md:block">
              <div className="text-3xl font-mono font-bold text-white mb-1">Spring/React</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Core Stack</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
