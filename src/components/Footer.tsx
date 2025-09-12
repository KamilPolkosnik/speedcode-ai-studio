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
              AI software house developing custom software for businesses faster and more efficiently.
            </p>
            <p className="text-sm text-muted">
              © 2024 SpeedCode sp. z o.o. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted hover:text-background transition-colors">Web Development</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">No-Code/Low-Code</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted hover:text-background transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="text-muted hover:text-background transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="text-muted hover:text-background transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-muted hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-sm text-muted">
            Made with 💙 by SpeedCode - AI software house
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;