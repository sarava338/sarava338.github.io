import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Current Role",
    period: "Last 6 Months",
    description: "Transitioned to full-stack development, building scalable web applications using Java Spring Boot and React. Designing RESTful APIs and optimized database schemas.",
    type: "current",
    tech: ["Spring Boot", "React", "PostgreSQL", "AWS"]
  },
  {
    role: "Integration Specialist",
    company: "Previous Experience",
    period: "3 Years",
    description: "Specialized in enterprise system integration using the webMethods suite. Architected solutions using Integration Server, Universal Messaging, and Designer to orchestrate complex data flows between legacy systems and modern platforms.",
    type: "past",
    tech: ["webMethods IS", "Universal Messaging", "Software AG", "EAI", "B2B"]
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-muted/20 relative">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-muted-foreground">From backend systems integration to end-to-end solution delivery.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-primary to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full translate-y-1.5 md:-translate-x-2 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

                <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                  <div className={`p-6 rounded-xl border border-white/5 bg-card/30 backdrop-blur-sm ${
                    job.type === 'current' ? 'border-primary/20 bg-primary/5' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-primary">{job.period}</span>
                      {job.type === 'current' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-background uppercase">Current</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                    <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="w-3 h-3" /> {job.company}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-secondary-foreground/80 px-2 py-1 rounded bg-secondary/30 border border-secondary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
