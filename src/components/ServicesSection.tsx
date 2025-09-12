import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "Kompleksowe Wsparcie",
      description: "Od analizy biznesowej, warsztatów, brandingu i projektowania UX/UI po rozwój i testowanie aplikacji."
    },
    {
      icon: "💻",
      title: "Platformy Webowe",
      description: "Strony internetowe, sklepy online, systemy rezerwacji, platformy e-learningowe i rozwiązania job board."
    },
    {
      icon: "📱",
      title: "Aplikacje Mobilne",
      description: "Kompletne aplikacje mobilne na iOS i Android — dostosowane do celów biznesowych."
    },
    {
      icon: "🤖",
      title: "Rozwiązania AI i Automatyzacja",
      description: "Spersonalizowane ChatBoty, Generatory, Analizatory oraz Agenci AI."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Innovation Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary italic">Innowacyjne</span>
            <span className="text-foreground"> technologie, rzeczywisty wpływ na biznes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            W SpeedCode zawsze wybieramy najefektywniejszą ścieżkę technologiczną, aby dostarczać skalowalne, 
            bezpieczne i wysokowydajne rozwiązania — od MVP i narzędzi na miarę po zaawansowane aplikacje 
            i złożone systemy. To podejście zapewnia naszym klientom co najmniej 30% większą efektywność.
          </p>
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-foreground">Od pomysłu do uruchomienia </span>
            <span className="text-primary italic">– szybciej, kompleksowo, bez kompromisów</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
            Wykorzystując zaawansowane technologie jak AI i No-Code/Low-Code, pomagamy każdej firmie efektywnie 
            przekształcać pomysły w w pełni funkcjonalne usługi AI, narzędzia na miarę, strony internetowe, 
            sklepy online oraz aplikacje mobilne. Poznaj pełną gamę naszych usług:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-blue transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary-variant shadow-blue"
          >
            WYCEN PROJEKT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;