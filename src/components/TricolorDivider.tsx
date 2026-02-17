import { motion } from "framer-motion";

const TricolorDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center py-1 ${className}`}>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-xs h-px origin-left"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))",
      }}
    />
  </div>
);

export default TricolorDivider;
