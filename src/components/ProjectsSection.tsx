import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: "primary" | "secondary" | "accent";
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with seamless checkout flow and real-time inventory management.",
    tags: ["React", "TypeScript", "Stripe"],
    accent: "primary",
  },
  {
    title: "Health & Wellness App",
    description: "A calming interface for tracking mindfulness, fitness goals, and daily well-being.",
    tags: ["React Native", "Firebase", "UI Design"],
    accent: "secondary",
  },
  {
    title: "Creative Studio Website",
    description: "A bold portfolio for a design agency showcasing their best creative work and case studies.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    accent: "accent",
  },
];

const accentBar: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Recent Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              <div className={`h-48 ${accentBar[project.accent]} opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
