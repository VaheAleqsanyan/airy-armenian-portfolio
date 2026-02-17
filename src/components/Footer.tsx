import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import TricolorDivider from "./TricolorDivider";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

const Footer = () => {
  return (
    <footer className="py-10">
      <TricolorDivider className="mb-8" />
      <div className="container mx-auto px-6 flex flex-col items-center gap-5">
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-secondary hover:text-secondary/70 transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. Built with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
