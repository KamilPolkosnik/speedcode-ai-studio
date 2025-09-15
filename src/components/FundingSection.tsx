import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const FundingSection = () => {
  const { t } = useLanguage();
  const phones = t('funding.phones').replace(/^.*?:\s*/, '').split(',').map(p => p.trim());
  return (
    <section id="funding" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary italic">{t('funding.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('funding.subtitle')}
          </p>
        </header>

        <div className="mb-12">
          <Card className="p-6 md:p-8 bg-card/80">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">{t('funding.partner')}</h3>
                <p className="text-muted-foreground">{t('funding.note')}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="https://www.facebook.com/profile.php?id=61580638433628" target="_blank" rel="noreferrer">
                    <Button variant="secondary" className="rounded-[14px]">{t('funding.fb')}</Button>
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">{t('funding.contact.title')}</h4>
                <div className="flex flex-col gap-3 pt-1">
                  {phones.map((p) => {
                    const tel = p.replace(/\s+/g, '');
                    return (
                      <a key={p} href={`tel:${tel}`}>
                        <Button
                          className="bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]"
                          title={p}
                          aria-label={`Zadzwoń ${p}`}
                        >
                          {p}
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default FundingSection;
