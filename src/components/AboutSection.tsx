import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: "primary" | "secondary" | "accent";
}

const skills: Skill[] = [
  { name: "React", color: "secondary" },
  { name: "TypeScript", color: "primary" },
  { name: "UI/UX Design", color: "accent" },
  { name: "Tailwind CSS", color: "secondary" },
  { name: "Figma", color: "primary" },
  { name: "Node.js", color: "accent" },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/15 text-accent-foreground",
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate about building
              <br />
              beautiful things
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              I'm a creative developer with a love for clean design and
              purposeful interaction. With years of experience across design
              and development, I bring ideas to life with attention to every pixel.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring art, photography,
              and the intersection of technology and culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-5">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full font-body text-sm font-medium ${colorMap[skill.color]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
