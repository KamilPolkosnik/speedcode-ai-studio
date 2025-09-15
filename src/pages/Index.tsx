import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProcessSection from "@/components/ProcessSection";
import PartnershipSection from "@/components/PartnershipSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MatrixRain from "@/MatrixRain";

const Index = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <MatrixRain density={0.92} fontSize={16} speed={0.5} />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <ReviewsSection />
        <ProcessSection />
        <PartnershipSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
