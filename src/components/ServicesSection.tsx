import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: "🎯",
      title: t('services.comprehensive'),
      description: t('services.comprehensive.desc')
    },
    {
      icon: "💻",
      title: t('services.web'),
      description: t('services.web.desc')
    },
    {
      icon: "📱",
      title: t('services.mobile'),
      description: t('services.mobile.desc')
    },
    {
      icon: "🤖",
      title: t('services.ai'),
      description: t('services.ai.desc')
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Innovation Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary italic">{t('services.innovation.title1')}</span>
            <span className="text-foreground">{t('services.innovation.title2')}</span>
            <span className="text-primary italic">{t('services.innovation.title3')}</span>
            <span className="text-foreground">{t('services.innovation.title4')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            {t('services.innovation.subtitle').split('co najmniej').length > 1 ? (
              <>
                {t('services.innovation.subtitle').split('co najmniej')[0]}
                <span className="text-primary italic font-bold">co najmniej 40% szybszą efektywność przy równoczesnym zmniejszeniu kosztów.</span>
              </>
            ) : t('services.innovation.subtitle').split('at least').length > 1 ? (
              <>
                {t('services.innovation.subtitle').split('at least')[0]}
                <span className="text-primary italic font-bold">at least 40% faster efficiency while reducing costs.</span>
              </>
            ) : (
              t('services.innovation.subtitle')
            )}
          </p>
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-foreground">{t('services.title1')}</span>
            <span className="text-primary italic">{t('services.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-blue transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4" style={{ color: '#00D9FF' }}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="ai-bounce inline-block">
            <a href="#contact">
              <Button 
                type="button"
                size="lg"
                className="bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[28px] px-10 py-6 uppercase tracking-wide border-0 shadow-[0_20px_60px_-10px_rgba(47,107,255,0.45)]"
              >
                {t('services.quote')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;