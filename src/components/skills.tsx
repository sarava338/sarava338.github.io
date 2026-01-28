import { motion } from "framer-motion";
import { Code2, Server, Globe, Database, Workflow, Cpu } from "lucide-react";

const skills = [
  {
    category: "Backend Engineering",
    icon: <Server className="w-6 h-6 text-primary" />,
    items: ["Java 17+", "Spring Boot 3", "Hibernate/JPA", "REST APIs", "Microservices", "PostgreSQL"]
  },
  {
    category: "Integration & Middleware",
    icon: <Workflow className="w-6 h-6 text-secondary-foreground" />,
    items: ["webMethods IS", "Universal Messaging", "MWS", "Trading Networks", "Kafka", "Docker", "CI/CD Pipelines"]
  },
  {
    category: "Frontend Engineering",
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
    items: ["React 18+", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design", "State Management (Context/Query)"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive stack built on years of solving complex integration challenges and modern web development needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card/50 border-white/5 h-full hover:border-primary/20 transition-colors duration-300">
                <div className="p-6">
                  <div className="mb-6 bg-background/50 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span 
                        key={item} 
                        className="bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
