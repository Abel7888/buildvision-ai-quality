import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BackendSection from "@/components/sections/BackendSection";
import ContactSection from "@/components/sections/ContactSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <SolutionSection />
        <BackendSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default LandingPage;