import { useLanguage } from "@/hooks/useLanguage";

const AboutSection = () => {
  const { t } = useLanguage();
  const technologies = [
    "ChatGPT", "Bubble", "FlutterFlow", "Lovable", "Bolt.new", "Webflow", "Xano", "React", "Node.js", "AI APIs", "Inne - najlepsze dla Twojego projektu!",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">{t('about.title')}</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p>
                {t('about.p3')}
              </p>
              <p>
                {t('about.p4')}
              </p>
              <p className="font-semibold text-foreground">
                {t('about.values')}
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-secondary p-8 rounded-lg text-white text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">SpeedCode</h3>
              <p>{t('about.slogan')}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-subtle">
              <h4 className="text-xl font-bold mb-4 text-foreground">{t('about.technologies')}</h4>
              <div className="flex flex-wrap gap-3 tech-wave">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;