import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import speedCodeLogo from "@/assets/speedcode-logo-new.png";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Ensure light is default on first render
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "PL" ? "EN" : "PL");
  };

  const toggleTheme = () => {
    if (isDark) {
      // Switch to light
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setIsDark(false);
    } else {
      // Switch back to dark
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center h-16">
            <img 
              src={speedCodeLogo} 
              alt="SpeedCode" 
              className="h-40 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary underline-offset-4 transition-colors" title={t('nav.services.title')}>
              {t('nav.services')}
            </a>
            <a href="#case-studies" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary underline-offset-4 transition-colors" title={t('nav.projects.title')}>
              {t('nav.projects')}
            </a>
            <a href="#about" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary underline-offset-4 transition-colors" title={t('nav.about.title')}>
              {t('nav.about')}
            </a>
            <a href="#partnership" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary underline-offset-4 transition-colors" title={t('nav.partnership.title')}>
              {t('nav.partnership')}
            </a>
            <a href="#funding" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary underline-offset-4 transition-colors" title={t('nav.funding.title')}>
              {t('nav.funding')}
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="outline" onClick={toggleTheme} size="sm" className="h-9 w-9 p-0" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="hidden md:block text-sm font-medium h-9 px-3"
              aria-label={t('nav.language.title')}
            >
              {language === "PL" ? "PL" : "EN"}
            </Button>
            <a href="#contact">
              <Button
                className="hidden sm:inline-flex h-10 md:h-11 px-5 py-0 leading-none
             bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px]
             text-sm md:text-base font-semibold
             shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]
             items-center justify-center"
                title={t('nav.letsTalk.title')}
              >
                {t('nav.letsTalk')}
              </Button>
            </a>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-6">
                  <a href="#services" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={t('nav.services.title')}>
                    {t('nav.services')}
                  </a>
                  <a href="#case-studies" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={t('nav.projects.title')}>
                    {t('nav.projects')}
                  </a>
                  <a href="#about" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={t('nav.about.title')}>
                    {t('nav.about')}
                  </a>
                  <a href="#partnership" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={t('nav.partnership.title')}>
                    {t('nav.partnership')}
                  </a>
                  <a href="#funding" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={t('nav.funding.title')}>
                    {t('nav.funding')}
                  </a>
                  <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={toggleLanguage}
                      className="w-full justify-center text-sm font-medium"
                      aria-label={t('nav.language.title')}
                    >
                      {language === "PL" ? "PL" : "EN"}
                    </Button>
                    <a href="#contact">
                      <Button
                        className="w-full bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] py-3 text-base font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)] h-12 flex items-center justify-center"
                        title={t('nav.letsTalk.title')}
                      >
                        {t('nav.letsTalk')}
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;