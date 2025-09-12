import speedCodeLogo from "@/assets/speedcode-logo.png";

const Footer = () => {
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
              AI software house tworzący dedykowane oprogramowanie dla firm szybciej i efektywniej.
            </p>
            <p className="text-sm text-muted">
              © 2024 SpeedCode sp. z o.o. Wszelkie prawa zastrzeżone.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted hover:text-background transition-colors">Rozwój Stron Web</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">Sklepy Online</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">Aplikacje Mobilne</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">Rozwiązania AI</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">No-Code/Low-Code</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Firma</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted hover:text-background transition-colors">O Nas</a></li>
              <li><a href="#case-studies" className="text-muted hover:text-background transition-colors">Studia Przypadków</a></li>
              <li><a href="#contact" className="text-muted hover:text-background transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-sm text-muted">
            Stworzone z 💙 przez SpeedCode - AI software house
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;