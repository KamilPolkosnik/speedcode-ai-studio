import { Button } from "@/components/ui/button";
import speedCodeLogo from "@/assets/speedcode-logo.png";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

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
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={speedCodeLogo} 
              alt="SpeedCode" 
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-bold text-foreground">SpeedCode</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              {language === "PL" ? "USŁUGI" : "SERVICES"}
            </a>
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors">
              {language === "PL" ? "PROJEKTY" : "CASE STUDIES"}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {language === "PL" ? "O NAS" : "ABOUT US"}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={toggleTheme} size="sm" className="p-2" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" onClick={toggleLanguage} className="hidden md:block">
              {language}
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-variant">
              {language === "PL" ? "KONTAKT" : "CONTACT US"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;