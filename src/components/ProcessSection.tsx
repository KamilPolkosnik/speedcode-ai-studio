import { useLanguage } from "@/hooks/useLanguage";

const ProcessSection = () => {
  const { t } = useLanguage();
  const approaches = [
    {
      title: t('process.innovative.approach'),
      color: "bg-primary",
      items: [
        { task: t('process.requirements'), hours: "50h" },
        { task: t('process.design'), hours: "100h" },
        { task: t('process.implementation'), hours: "350h" },
        { task: t('process.deployment'), hours: "100h" },
        { task: t('process.integration'), hours: "50h" },
        { task: t('process.management'), hours: "100h" }
      ],
      total: "750h",
      rate: t('process.hourlyRateValue')
    },
    {
      title: t('process.traditional.approach'),
      color: "bg-muted",
      items: [
        { task: t('process.requirements'), hours: "200h" },
        { task: t('process.design'), hours: "125h" },
        { task: t('process.implementation'), hours: "600h" },
        { task: t('process.deployment'), hours: "250h" },
        { task: t('process.integration'), hours: "75h" },
        { task: t('process.management'), hours: "125h" }
      ],
      total: "1375h",
      rate: t('process.hourlyRateValue')
    }
  ];

  const processSteps = [
    {
      title: t('process.scope'),
      description: t('process.scope.desc'),
      icon: "🎯"
    },
    {
      title: t('process.design.title'),
      description: t('process.design.desc'),
      icon: "🎨"
    },
    {
      title: t('process.development'),
      description: t('process.development.desc'),
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-secondary dark:bg-section-alt">
      <div className="container mx-auto px-4">
        {/* Innovation Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t('process.innovation.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            {t('process.innovation.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-subtle">
                <div className={`${approach.color} text-white p-4 rounded-lg mb-6 text-center`}>
                  <h3 className="font-bold text-lg">{approach.title}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  {approach.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{item.task}</span>
                      <span className="font-semibold text-primary">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{t('process.hourlyRate')}</span>
                    <span className="text-primary">{approach.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{t('process.projectTime')}</span>
                    <span className="font-bold text-xl text-primary">{approach.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">{t('process.ourApproach')}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            {t('process.approach.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>🚀</div>
                <p className="text-foreground">
                  {t('process.highStandards')}
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>⚡</div>
                <p className="text-foreground">
                  {t('process.fasterIteration')}
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>🔄</div>
                <p className="text-foreground">
                  {t('process.leanStartup')}
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>✨</div>
                <p className="text-foreground">
                  {t('process.quickStart')}
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl inline-block">
                <span className="inline-block animate-robot-head">🤖</span>
              </div>
            </div>
          </div>
        </div>

        {/* How we work */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">{t('process.howWeWork')}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6" style={{ color: '#00D9FF' }}>{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;