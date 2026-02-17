import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Designer & Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6"
        >
          Crafting Digital
          <br />
          <span className="text-primary">Experiences</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Building elegant, functional interfaces with a focus on clean
          aesthetics and intuitive design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg border border-border text-foreground font-body font-medium text-sm hover:bg-muted transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
