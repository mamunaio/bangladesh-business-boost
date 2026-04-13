import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCategoriesStrip from "@/components/ServiceCategoriesStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TemplatesSection from "@/components/TemplatesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceCategoriesStrip />
      <AboutSection />
      <ServicesSection />
      <TemplatesSection />
      <TechnologiesSection />
      <PortfolioSection />
      <WorkingProcessSection />
      <TrustSection />
      <PricingSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <FloatingControls />
    </div>
  );
};

export default Index;
