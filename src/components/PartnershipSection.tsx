import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const PartnershipSection = () => {
  const { t } = useLanguage();
  
  const partnershipBenefits = [
    {
      icon: "🤝",
      title: t('partnership.jointPartnership'),
      description: t('partnership.jointPartnership.desc')
    },
    {
      icon: "💡",
      title: t('partnership.yourIdea'),
      description: t('partnership.yourIdea.desc')
    },
    {
      icon: "📈",
      title: t('partnership.sharedProfits'),
      description: t('partnership.sharedProfits.desc')
    },
    {
      icon: "🚀",
      title: t('partnership.fullSupport'),
      description: t('partnership.fullSupport.desc')
    },
    {
      icon: "⚡",
      title: t('partnership.fastMarket'),
      description: t('partnership.fastMarket.desc')
    },
    {
      icon: "🎯",
      title: t('partnership.strategic'),
      description: t('partnership.strategic.desc')
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary italic">{t('partnership.title1')}</span>
            <span className="text-foreground">{t('partnership.title2')}</span>
            <span className="text-primary italic">{t('partnership.title3')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            {t('partnership.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-blue transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4" style={{ color: '#00D9FF' }}>{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-secondary rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            {t('partnership.model.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-5xl">1️⃣</div>
              <h4 className="text-xl font-bold">{t('partnership.presentIdea')}</h4>
              <p className="text-white/90">
                {t('partnership.presentIdea.desc')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl">2️⃣</div>
              <h4 className="text-xl font-bold">{t('partnership.jointAnalysis')}</h4>
              <p className="text-white/90">
                {t('partnership.jointAnalysis.desc')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl">3️⃣</div>
              <h4 className="text-xl font-bold">{t('partnership.implementation')}</h4>
              <p className="text-white/90">
                {t('partnership.implementation.desc')}
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg font-semibold mb-2">
              {t('partnership.ideal')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p>{t('partnership.innovativeIdea')}</p>
                <p>{t('partnership.lackResources')}</p>
                <p>{t('partnership.quickMarket')}</p>
              </div>
              <div className="space-y-2">
                <p>{t('partnership.experiencedPartner')}</p>
                <p>{t('partnership.shareRisk')}</p>
                <p>{t('partnership.strategicSupport')}</p>
              </div>
            </div>
          </div>

          <div className="ai-bounce w-full flex justify-center">
            <a href="#contact" className="inline-flex">
              <Button 
                type="button"
                size="lg"
                className="mx-auto bg-primary text-white hover:bg-primary/90 rounded-[28px] px-10 py-6 uppercase tracking-wide border-0 shadow-[0_20px_60px_-10px_rgba(255,255,255,0.3)] font-bold"
              >
                {t('partnership.cta')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;