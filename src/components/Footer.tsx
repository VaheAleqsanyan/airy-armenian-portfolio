const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. Built with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
