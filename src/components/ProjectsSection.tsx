import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectWellness from "@/assets/project-wellness.jpg";
import projectStudio from "@/assets/project-studio.jpg";
import projectGallery from "@/assets/project-gallery.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectArt from "@/assets/project-art.jpg";

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
}

type Category = "Web" | "Design" | "Art";

const categories: Category[] = ["Web", "Design", "Art"];

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "Web",
    image: projectEcommerce,
    description:
      "A modern shopping experience with seamless checkout flow and real-time inventory.",
  },
  {
    id: "2",
    title: "Wellness App",
    category: "Design",
    image: projectWellness,
    description:
      "A calming interface for tracking mindfulness, fitness, and daily well-being.",
  },
  {
    id: "3",
    title: "Creative Studio",
    category: "Design",
    image: projectStudio,
    description:
      "Brand identity and website for a boutique design agency.",
  },
  {
    id: "4",
    title: "Art Gallery",
    category: "Art",
    image: projectGallery,
    description:
      "A digital gallery showcasing contemporary geometric art and installations.",
  },
  {
    id: "5",
    title: "Analytics Dashboard",
    category: "Web",
    image: projectDashboard,
    description:
      "Clean data visualization dashboard with real-time metrics and reporting.",
  },
  {
    id: "6",
    title: "Armenian Patterns",
    category: "Art",
    image: projectArt,
    description:
      "A cultural exploration of traditional Armenian ornamental art and motifs.",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Recent Projects
          </h2>
        </motion.div>

        {/* Filter bar */}
        <div className="flex items-center justify-center gap-2 mb-14 flex-wrap">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-colors duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card border-2 border-transparent hover:border-accent transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block text-xs font-body font-medium uppercase tracking-wider text-accent-foreground/60 mb-2">
          {project.category}
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
};

export default ProjectsSection;
