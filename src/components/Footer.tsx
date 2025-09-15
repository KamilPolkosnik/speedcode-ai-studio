import speedCodeLogo from "@/assets/speedcode-logo.png";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={speedCodeLogo} 
                alt="SpeedCode" 
                className="h-8 w-auto mr-3 invert"
              />
              <span className="text-xl font-bold">SpeedCode</span>
            </div>
            <p className="text-muted mb-4">
              {t('footer.description')}
            </p>
            <p className="text-sm text-muted">
              {t('footer.rights')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('footer.webDev')}</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('footer.onlineStores')}</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('footer.mobileApps')}</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('footer.aiSolutions')}</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('footer.nocode')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted hover:text-background transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="#case-studies" className="text-muted hover:text-background transition-colors">{t('footer.ourWork')}</a></li>
              <li><a href="#contact" className="text-muted hover:text-background transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#partnership" className="text-muted hover:text-background transition-colors">{t('footer.partnership')}</a></li>
              <li><a href="#funding" className="text-muted hover:text-background transition-colors">{t('footer.funding')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-sm text-muted">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;