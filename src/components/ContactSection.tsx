import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="font-body text-muted-foreground mb-10 leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Drop me a line and let's create something beautiful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-body text-sm">hello@portfolio.dev</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm">Yerevan, Armenia</span>
            </div>
          </div>

          <a
            href="mailto:hello@portfolio.dev"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
