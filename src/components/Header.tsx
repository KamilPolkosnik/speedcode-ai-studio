import { Button } from "@/components/ui/button";
import speedCodeLogo from "@/assets/speedcode-logo.png";

const Header = () => {
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
              SERVICES
            </a>
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors">
              CASE STUDIES
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">
              BLOG
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              ABOUT US
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">
              EN
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-variant">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;