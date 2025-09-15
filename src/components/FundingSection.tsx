import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const FundingSection = () => {
  const { t } = useLanguage();
  return (
    <section id="funding" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary italic">{t('funding.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('funding.subtitle')}
          </p>
        </header>

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

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground">{t('funding.contact.title')}</h4>
              <p className="text-muted-foreground">{t('funding.phones')}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FundingSection;
