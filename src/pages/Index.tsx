import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProcessSection from "@/components/ProcessSection";
import PartnershipSection from "@/components/PartnershipSection";
import FundingSection from "@/components/FundingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MatrixRain from "@/MatrixRain";

const Index = () => {
  const { t } = useLanguage();
  
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
        
        {/* Partnership CTA between sections */}
        <div className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="ai-bounce inline-block">
              <a href="#contact">
                <Button 
                  type="button"
                  size="lg"
                  className="h-auto min-h-14 px-2 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-[28px] uppercase tracking-wide border-0 shadow-[0_20px_60px_-10px_rgba(47,107,255,0.45)] font-bold leading-none flex items-center justify-center"
                >
                  {t('partnership.cta')}
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <FundingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
