import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Armenian Eternity Sign (Arevakhach) watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          viewBox="0 0 200 200"
          className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] lg:w-[620px] lg:h-[620px] opacity-[0.05]"
          fill="currentColor"
          aria-hidden="true"
        >
          <g transform="translate(100,100)">
            {/* Center circle */}
            <circle r="12" />
            {/* 6 spiral arms radiating outward */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <path
                  d="M12,0 C12,-8 20,-16 28,-16 C36,-16 40,-8 40,0 C40,12 28,20 20,28 C14,34 14,42 20,48 C28,56 40,56 48,48 C56,40 60,28 60,16 C60,4 56,-8 48,-16 C40,-24 28,-28 16,-28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                {/* Teardrop terminal */}
                <ellipse cx="16" cy="-28" rx="5" ry="7" />
              </g>
            ))}
            {/* Inner ring */}
            <circle r="24" fill="none" stroke="currentColor" strokeWidth="3" />
            {/* Outer ring */}
            <circle r="72" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </g>
        </svg>
      </div>

      {/* Decorative ambient glows */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Designer & Developer
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[1.05] mb-3"
        >
          Barev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-xl md:text-2xl italic text-muted-foreground mb-8"
        >
          — Welcome —
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
        >
          I'm a creative developer crafting elegant digital experiences — blending
          clean design, purposeful motion, and modern technology to bring ideas to life.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <a
            href="#projects"
            className="inline-block px-10 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-105 active:scale-100"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
