import { Button } from "@/components/ui/button";
import heroF35 from "@/assets/hero-f35.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Tworzymy nic takeigo co fajnego jest</span>
              <span className="text-primary italic">dedykowane</span>
              <span className="text-foreground"> rozwiązania dla Twojej firmy </span>
              <span className="text-primary italic">szybciej</span>
              <span className="text-foreground"> i </span>
              <span className="text-primary italic">efektywniej</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Dzięki dobieraniu odpowiednich technologii do każdego projektu, realizujemy produkty cyfrowe 
              <span className="font-bold"> do 40% szybciej i taniej.</span> Nasze rozwiązania łączą rozwój na miarę z AI oraz platformami No-Code/Low-Code, 
              obejmując również strony internetowe i sklepy online.
            </p>

                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Oprogramowanie, aplikacje, strony i sklepy internetowe, </span>
                                        <span className="text-primary italic">rozwiązania szyte na miarę.</span>
            </h1>
            
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-variant shadow-blue px-8 py-4 text-lg font-semibold"
            >
              ROZPOCZNIJMY ROZMOWĘ
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={heroF35} 
              alt="Szybki rozwój z AI" 
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            ZDOBĄDŹ PRZEWAGĘ:
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Szybsze wdrożenie</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">AI</div>
              <p className="text-sm text-muted-foreground">Zaawansowana automatyzacja</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Ciągła dostępność</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">No-Code</div>
              <p className="text-sm text-muted-foreground">Szybkie prototypowanie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;