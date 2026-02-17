import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-soft" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="font-display text-xl font-semibold tracking-tight text-foreground"
        >
          Portfolio
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 relative z-[60]"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-foreground/10 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-50 md:hidden flex flex-col justify-center"
            >
              {/* Tricolor accent line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))",
                }}
              />
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <button
                      onClick={() => handleClick(item.href)}
                      className="font-body text-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
