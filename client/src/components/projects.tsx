import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Layers, Database, Lock } from "lucide-react";

const projects = [
  {
    title: "Enterprise Inventory System",
    description: "A full-stack inventory management system designed for high-volume transactions. Features real-time stock tracking and automated reordering.",
    tags: ["Java Spring Boot", "React", "PostgreSQL", "Docker"],
    icon: <Database className="w-10 h-10 text-primary mb-4" />,
    gradient: "from-primary/20 to-transparent"
  },
  {
    title: "Secure Payment Gateway Integration",
    description: "Microservice dedicated to handling secure payments across multiple providers. Implemented reliable retry mechanisms and idempotent transactions.",
    tags: ["Java", "Spring Security", "Kafka", "Redis"],
    icon: <Lock className="w-10 h-10 text-emerald-400 mb-4" />,
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Legacy Data Migration Tool",
    description: "An automated tool to transform and migrate diverse data formats from legacy mainframes to modern cloud databases with zero data loss.",
    tags: ["Integration", "Apache Camel", "ETL", "React"],
    icon: <Layers className="w-10 h-10 text-secondary-foreground mb-4" />,
    gradient: "from-purple-500/20 to-transparent"
  }
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
            <p className="text-muted-foreground max-w-xl">
              Applying robust backend logic to modern user interfaces.
            </p>
          </div>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 font-mono">
            <Github className="w-4 h-4 mr-2" /> View GitHub
          </Button>
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
              <Card className="h-full bg-card/30 border-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                <CardHeader className="relative pt-8">
                  {project.icon}
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-transparent border-white/10 text-xs font-mono text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="relative mt-auto pt-0">
                  <Button variant="ghost" className="w-full justify-between text-muted-foreground hover:text-white hover:bg-white/5 group-hover:translate-x-1 transition-all">
                    View Details <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
