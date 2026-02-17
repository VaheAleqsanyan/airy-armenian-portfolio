import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TricolorDivider from "@/components/TricolorDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TricolorDivider className="my-0" />
        <AboutSection />
        <TricolorDivider className="my-0" />
        <ProjectsSection />
        <TricolorDivider className="my-0" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
