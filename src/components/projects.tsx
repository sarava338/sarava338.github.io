import { motion } from "framer-motion";
import { Github, ExternalLink, Database } from "lucide-react";

const projects = [
  {
    title: "Peyar Seyali (பெயர் செயலி)",
    description:
      "A Tamil name database application built with React and TypeScript. Features a real-time backend powered by Firebase, offering advanced search and filtering capabilities to explore the cultural significance and meanings of Tamil names.",
    tags: ["React", "Typescript", "Firebase Authentication", "Firebase Hosting", "Firestore"],
    icon: <Database className="w-10 h-10 text-primary mb-4" />,
    gradient: "from-primary/20 to-transparent",
    repository: "https://github.com/sarava338/peyar-seyali",
    link: "https://peyar-seyali.web.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">Applying robust backend logic to modern user interfaces.</p>
          </div>
          <a href="https://github.com/sarava338" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <button className="border border-white/10 hover:bg-white/5 font-mono">
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </button>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full bg-card/30 border-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                <div
                  className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                <div className="relative pt-8">
                  {project.icon}
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <div className="relative">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-transparent border border-white/10 text-xs font-mono text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative mt-auto pt-0 gap-2">
                  <button
                    className="flex-1 text-muted-foreground hover:text-white hover:bg-white/5 group-hover:translate-x-1 transition-all"
                  >
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      <Github className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100" />
                      Repository
                    </a>
                  </button>
                  <button
                    className="flex-1 text-muted-foreground hover:text-white hover:bg-white/5 group-hover:translate-x-1 transition-all"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100" />
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
