import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import speedCodeLogo from "@/assets/speedcode-logo.png";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";

const Header = () => {
  const [language, setLanguage] = useState("PL");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Ensure dark is default on first render
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
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
          <div className="flex items-center">
            <img 
              src={speedCodeLogo} 
              alt="SpeedCode" 
              className="h-8 md:h-10 w-auto mr-2 md:mr-3"
            />
            <span className="hidden sm:block text-xl md:text-2xl font-extrabold tracking-tight text-foreground">SpeedCode</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary hover:underline underline-offset-4 transition-colors" title={language === "PL" ? "Zobacz nasze usługi" : "See our services"}>
              {language === "PL" ? "Usługi" : "Services"}
            </a>
            <a href="#case-studies" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary hover:underline underline-offset-4 transition-colors" title={language === "PL" ? "Zobacz nasze projekty" : "See our projects"}>
              {language === "PL" ? "Projekty" : "Projects"}
            </a>
            <a href="#about" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary hover:underline underline-offset-4 transition-colors" title={language === "PL" ? "Dowiedz się o nas więcej" : "Learn more about us"}>
              {language === "PL" ? "O nas" : "About"}
            </a>
            <a href="#partnership" className="text-sm md:text-base font-medium text-foreground/90 hover:text-primary hover:underline underline-offset-4 transition-colors" title={language === "PL" ? "Zostań naszym partnerem" : "Become our partner"}>
              {language === "PL" ? "Zostań partnerem" : "Partnership"}
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="outline" onClick={toggleTheme} size="sm" className="p-2" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="hidden md:block text-sm font-medium"
              aria-label={language === "PL" ? "Zmień język na angielski" : "Switch language to Polish"}
            >
              {language === "PL" ? "PL" : "EN"}
            </Button>
            <a href="#contact">
              <Button
                className="hidden sm:block bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] px-3 md:px-5 py-2.5 text-sm md:text-base font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]"
                title={language === "PL" ? "Umów krótką rozmowę" : "Schedule a quick call"}
              >
                {language === "PL" ? "Porozmawiajmy" : "Let's talk"}
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
                  <a href="#services" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={language === "PL" ? "Zobacz nasze usługi" : "See our services"}>
                    {language === "PL" ? "Usługi" : "Services"}
                  </a>
                  <a href="#case-studies" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={language === "PL" ? "Zobacz nasze projekty" : "See our projects"}>
                    {language === "PL" ? "Projekty" : "Projects"}
                  </a>
                  <a href="#about" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={language === "PL" ? "Dowiedz się o nas więcej" : "Learn more about us"}>
                    {language === "PL" ? "O nas" : "About"}
                  </a>
                  <a href="#partnership" className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors" title={language === "PL" ? "Zostań naszym partnerem" : "Become our partner"}>
                    {language === "PL" ? "Zostań partnerem" : "Partnership"}
                  </a>
                  <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={toggleLanguage}
                      className="w-full justify-center text-sm font-medium"
                      aria-label={language === "PL" ? "Zmień język na angielski" : "Switch language to Polish"}
                    >
                      {language === "PL" ? "PL" : "EN"}
                    </Button>
                    <a href="#contact">
                      <Button
                        className="w-full bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] py-3 text-base font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]"
                        title={language === "PL" ? "Umów krótką rozmowę" : "Schedule a quick call"}
                      >
                        {language === "PL" ? "Porozmawiajmy" : "Let's talk"}
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